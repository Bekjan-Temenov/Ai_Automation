import { useEffect, useRef } from 'react';

const MESSAGES = [
  { text: 'I can help automate your YouTube workflow 🎥', side: 'left' },
  { text: 'Or build custom chatbots for your business 🤖', side: 'left' },
  { text: 'What challenges are you facing?', side: 'right' },
  { text: "Let's make your work easier!", side: 'left' },
];

export default function useChatSimulation() {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;

    let i = 0;
    const add = () => {
      if (i >= MESSAGES.length) return;
      const m = MESSAGES[i++];
      const div = document.createElement('div');
      div.className = `flex justify-${m.side === 'left' ? 'start' : 'end'} mb-3`;
      div.innerHTML = `
        <div class="bg-${
          m.side === 'left' ? 'charcoal' : 'accent-orange'
        } rounded-lg px-3 py-2 max-w-xs">
          <p class="text-sm">${m.text}</p>
        </div>`;
      box.appendChild(div);
      box.appendChild(div);
      box.scrollTop = box.scrollHeight;
      setTimeout(add, 3000);
    };
    const t = setTimeout(add, 3000);
    return () => clearTimeout(t);
  }, []);

  return boxRef;
}