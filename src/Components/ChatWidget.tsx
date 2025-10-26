import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const sysPrompt = {
  role: "system",
  content: `
  Ты — персональный консультант сайта разработчика **Бекжана**. 
  Ты создан специально, чтобы рассказывать посетителям про **автоматизацию через n8n** и **помогать им понять пользу автоматизации**.
  
  🎯 Твоя единственная миссия:
  - Рассказывай, как автоматизация (через n8n, кодах, бизнес автоматизация идей, личныйъ опытах, базы данных, интеграции, AI) улучшает бизнес.
  - Говори очень коротко (1–3 предложения), просто и уверенно.”
  
  ⚙️ Правила железные:
  1. Отвечай **только** по теме автоматизации, n8n, интеграций, ИИ-автопроцессов и опыта Бекжана.
  2. Если вопрос не по теме — отвечай: “Я консультирую только по автоматизации 😊”.
  3. Если спрашивают о цене — говори: “О цене можно уточнить у Бекжана — просто напишите ему в Telegram!”.
  4. Не объясняй долго, не используй списки, не обучай, не философствуй.
  5. Никогда не пиши, что ты модель, бот, Gemini или кто-то ещё. Ты — **консультант Бекжана**.
  6. Не выдавай код и не объясняй программирование.
  7. Если пользователь пишет "зачем ты нужен", отвечай: "Я помогаю понять, как автоматизация экономит время и деньги бизнеса 😉 !"
  
  Примеры:
  ❓ Что даёт автоматизация?
  💬 "Она экономит часы рутины и ускоряет бизнес. "
  
  ❓ Можно ли автоматизировать отчёты?
  💬 "Да! Через n8n отчёты формируются автоматически.  😉"
  `,
};

export default function ChatWidget() {
  const [msgs, setMsgs] = useState(() => {
    try {
      const saved = localStorage.getItem("chat_gemini");
      return saved ? JSON.parse(saved) : [sysPrompt];
    } catch {
      return [sysPrompt];
    }
  });
  const [input, setInput] = useState("");
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  const boxRef = useRef(null);
  const inputRef = useRef(null);
  const isStreamingRef = useRef(false);

  useEffect(() => {
    try {
      localStorage.setItem("chat_gemini", JSON.stringify(msgs));
    } catch (e) {
      console.error("Ошибка сохранения:", e);
    }

    if (boxRef.current) {
      boxRef.current.scrollTop = boxRef.current.scrollHeight;
    }
  }, [msgs]);

  const send = async () => {
    if (!input.trim() || load) return;

    setError("");
    const userMsg = { role: "user", content: input.trim() };
    setMsgs((m) => [...m, userMsg]);
    setInput("");
    setLoad(true);
    isStreamingRef.current = true;

    setMsgs((m) => [...m, { role: "assistant", content: "" }]);

    try {
      const apiKey = import.meta.env.VITE_OPENROUTER_KEY || "sk-or-v1-demo-key";

      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
          "HTTP-Referer": window.location.origin,
          "X-Title": "ReactGeminiBot",
        },
        body: JSON.stringify({
          model: "google/gemini-2.0-flash-001",
          messages: [
            sysPrompt,
            ...msgs.filter((m) => m.role !== "system"),
            userMsg,
          ],
          max_output_tokens: 120,
          temperature: 0.7,
          stream: true,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      let assistant = "";
      const reader = res.body.getReader();
      const dec = new TextDecoder();

      while (isStreamingRef.current) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = dec.decode(value, { stream: true });
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (!line.startsWith("data:")) continue;
          if (line.includes("[DONE]")) continue;

          try {
            const json = JSON.parse(line.slice(5).trim());
            const delta = json.choices?.[0]?.delta?.content;

            if (delta) {
              assistant += delta;
              setMsgs((m) => {
                const newMsgs = [...m];
                newMsgs[newMsgs.length - 1] = {
                  role: "assistant",
                  content: assistant,
                };
                return newMsgs;
              });
            }
          } catch {
            // Игнорируем ошибки парсинга
          }
        }
      }

      if (!assistant) {
        throw new Error("Пустой ответ от сервера");
      }
    } catch (err) {
      console.error(err);
      setError("Ошибка соединения. Попробуйте снова.");
      setMsgs((m) => {
        const newMsgs = [...m];
        if (
          newMsgs[newMsgs.length - 1]?.role === "assistant" &&
          !newMsgs[newMsgs.length - 1]?.content
        ) {
          newMsgs.pop();
        }
        return newMsgs;
      });
    } finally {
      setLoad(false);
      isStreamingRef.current = false;
    }
  };

  const clear = () => {
    if (load) return;
    setMsgs([sysPrompt]);
    setError("");
    try {
      localStorage.removeItem("chat_gemini");
    } catch (e) {
      console.error("Ошибка очистки:", e);
    }
  };

  const stopGeneration = () => {
    isStreamingRef.current = false;
    setLoad(false);
  };

  return (
    <div className="flex flex-col w-full h-full bg-white rounded-lg">
      {/* Шапка */}
      <div className="flex items-center justify-between px-4 py-3 border-b rounded-t-lg bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold text-gray-800 md:text-base">
            AI-бот
          </span>
        </div>
        <button
          onClick={clear}
          disabled={load}
          className="px-2 py-1 text-xs text-gray-600 transition-colors border border-gray-300 rounded-lg md:px-3 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Очистить
        </button>
      </div>

      {/* Ошибка */}
      {error && (
        <div className="px-4 py-2 text-xs text-red-600 border-b border-red-100 md:text-sm bg-red-50">
          {error}
        </div>
      )}

      {/* Сообщения */}
      <div
        ref={boxRef}
        className="flex-1 px-3 py-3 space-y-3 overflow-y-auto md:px-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
      >
        {msgs.length === 1 ? (
          <div className="flex items-center justify-center h-full text-center text-gray-400">
            <div>
              <div className="mb-2 text-4xl">💬</div>
              <p className="text-sm md:text-base">Начните общение с ботом</p>
            </div>
          </div>
        ) : (
          msgs
            .filter((m) => m.role !== "system")
            .map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                } animate-fadeIn`}
              >
                <div
                  className={`max-w-[90%] md:max-w-[80%] px-3 py-2 md:px-4 md:py-2.5 rounded-2xl text-xs md:text-sm shadow-sm ${
                    m.role === "user"
                      ? "bg-indigo-600 text-white rounded-br-sm"
                      : "bg-gray-100 text-gray-800 rounded-bl-sm"
                  }`}
                >
                  <div className="prose prose-sm max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        p: ({ children }) => (
                          <p className="mb-1.5 last:mb-0">{children}</p>
                        ),
                        ul: ({ children }) => (
                          <ul className="mb-1.5 ml-4 list-disc last:mb-0">
                            {children}
                          </ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="mb-1.5 ml-4 list-decimal last:mb-0">
                            {children}
                          </ol>
                        ),
                        li: ({ children }) => (
                          <li className="mb-0.5">{children}</li>
                        ),
                        code: ({ inline, children }) =>
                          inline ? (
                            <code className="px-1.5 py-0.5 bg-black/10 rounded text-[0.9em]">
                              {children}
                            </code>
                          ) : (
                            <code className="block p-2 my-2 overflow-x-auto bg-black/10 rounded text-[0.85em]">
                              {children}
                            </code>
                          ),
                        a: ({ children, href }) => (
                          <a
                            href={href}
                            className="text-blue-500 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {children}
                          </a>
                        ),
                        strong: ({ children }) => (
                          <strong className="font-semibold">{children}</strong>
                        ),
                        em: ({ children }) => (
                          <em className="italic">{children}</em>
                        ),
                      }}
                    >
                      {m.content}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            ))
        )}

        {load && (
          <div className="flex items-center space-x-2 text-xs text-gray-500 md:text-sm">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
            <span>Печатает</span>
            <button
              onClick={stopGeneration}
              className="ml-2 text-xs text-red-500 hover:text-red-700"
            >
              ⏹
            </button>
          </div>
        )}
      </div>

      {/* Поле ввода */}
      <div className="flex px-3 py-3 space-x-2 border-t rounded-b-lg md:px-4 bg-gray-50">
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              send();
            }
          }}
          placeholder="Напишите сообщение…"
          disabled={load}
          className="flex-1 px-3 py-2 text-xs text-gray-800 bg-white border border-gray-300 md:px-4 md:py-2.5 md:text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-all"
        />
        <button
          onClick={send}
          disabled={load || !input.trim()}
          className="px-3 py-2 text-white transition-all bg-indigo-600 md:px-4 md:py-2.5 rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
          aria-label="Отправить сообщение"
        >
          <span className="text-base md:text-lg">➤</span>
        </button>
      </div>

      {/* Стили */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
      `}</style>
    </div>
  );
}
