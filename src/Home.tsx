import React from "react";
import useRevealOnScroll from "./utils/useRevealOnScroll.js";
import useChatSimulation from "./utils/useChatSimulation.js";
import "./index.css";
import { SplineSceneBasic } from "./Components/SplintSceneBasic.js";
import { HeroScrollDemo } from "./Components/HeroScrollDemo.js";

const Home = () => {
  useRevealOnScroll();

  React.useEffect(() => {
    const onClick = (e: any) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      e.preventDefault();
      document.querySelector(a.getAttribute("href"))?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="bg-primary-black text-warm-white">
      <div className="pt-20">
        <SplineSceneBasic />
      </div>
      
      <HeroScrollDemo/>
      <div className="relative py-20">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="mb-16 text-center reveal-up">
            <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
              What I Automate
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-300">
              From content creation to customer engagement, I build systems that
              work 24/7 so you don't have to.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 cursor-pointer bg-charcoal/50 rounded-2xl hover-lift reveal-up">
              <div className="mb-4">
                <img
                  src="resources/youtube-auto.png"
                  alt="YouTube Automation"
                  className="object-cover w-full h-32 rounded-lg"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold text-accent-orange">
                YouTube Automation
              </h3>
              <p className="mb-4 text-gray-300">
                Auto-posting, content optimization, and analytics that reduced
                manual work by 90%.
              </p>
              <div className="text-sm font-semibold text-accent-orange">
                • Upload • Optimize • Analyze
              </div>
            </div>

            <div className="p-6 cursor-pointer bg-charcoal/50 rounded-2xl hover-lift reveal-up">
              <div className="mb-4">
                <img
                  src="resources/nutrition-bot.png"
                  alt="Nutritionist Chatbot"
                  className="object-cover w-full h-32 rounded-lg"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold text-accent-orange">
                Nutritionist Bots
              </h3>
              <p className="mb-4 text-gray-300">
                Personalized meal planning and client engagement for health
                professionals.
              </p>
              <div className="text-sm font-semibold text-accent-orange">
                • Plan • Engage • Track
              </div>
            </div>

            <div className="p-6 cursor-pointer bg-charcoal/50 rounded-2xl hover-lift reveal-up">
              <div className="mb-4">
                <img
                  src="resources/smm-robot.png"
                  alt="Social Media Automation"
                  className="object-cover w-full h-32 rounded-lg"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold text-accent-orange">
                SMM Automation
              </h3>
              <p className="mb-4 text-gray-300">
                Content curation, scheduling, and cross-platform management at
                scale.
              </p>
              <div className="text-sm font-semibold text-accent-orange">
                • Curate • Schedule • Monitor
              </div>
            </div>

            <div className="p-6 cursor-pointer bg-charcoal/50 rounded-2xl hover-lift reveal-up">
              <div className="mb-4">
                <div className="flex items-center justify-center w-full h-32 rounded-lg bg-gradient-to-br from-accent-orange/20 to-transparent">
                  <svg
                    className="w-16 h-16 text-accent-orange"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-accent-orange">
                Email Automation
              </h3>
              <p className="mb-4 text-gray-300">
                Smart sequences, personalization, and lead nurturing that
                converts.
              </p>
              <div className="text-sm font-semibold text-accent-orange">
                • Segment • Personalize • Convert
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative py-20">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="mb-16 text-center reveal-up">
            <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
              How It Works
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-300">
              My proven process delivers results through intelligent automation
              workflows.
            </p>
          </div>

          <div className="p-8 bg-charcoal/30 rounded-3xl lg:p-12 reveal-up">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <img
                  src="resources/workflow-n8n.png"
                  alt="n8n Workflow"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 font-bold rounded-full bg-accent-orange text-primary-black">
                    1
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold">Trigger</h3>
                    <p className="text-gray-300">
                      Events, schedules, or user actions initiate the workflow
                      automatically.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 font-bold rounded-full bg-accent-orange text-primary-black">
                    2
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold">AI Agent</h3>
                    <p className="text-gray-300">
                      Intelligent processing, decision-making, and data analysis
                      using AI.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 font-bold rounded-full bg-accent-orange text-primary-black">
                    3
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold">Action</h3>
                    <p className="text-gray-300">
                      Automated execution across multiple platforms and systems.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 font-bold rounded-full bg-accent-orange text-primary-black">
                    4
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold">Result</h3>
                    <p className="text-gray-300">
                      Measurable outcomes, analytics, and continuous
                      optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative py-20">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="mb-16 text-center reveal-up">
            <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
              Technologies I Work With
            </h2>
            <p className="text-xl text-gray-300">
              Leveraging cutting-edge tools to build powerful automation
              solutions.
            </p>
          </div>

          <div className="grid items-center grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 justify-items-center reveal-up">
            <div className="p-4 rounded-lg tech-logo bg-charcoal/50">
              <img
                src="https://kimi-web-img.moonshot.cn/img/vectorseek.com/5cbcb24e44771743477f85adcd5d1f353941646a.jpg"
                alt="OpenAI"
                className="object-contain w-16 h-16"
              />
            </div>
            <div className="p-4 rounded-lg tech-logo bg-charcoal/50">
              <img
                src="https://kimi-web-img.moonshot.cn/img/vercel.com/cff24056538a7fdb8b7f4e45099e21c02647097a"
                alt="Vercel"
                className="object-contain w-16 h-16"
              />
            </div>
            <div className="p-4 rounded-lg tech-logo bg-charcoal/50">
              <img
                src="https://kimi-web-img.moonshot.cn/img/raw.githubusercontent.com/65044d3df8182222a7d7ba9744cebef33f3bb340.png"
                alt="Supabase"
                className="object-contain w-16 h-16"
              />
            </div>
            <div className="p-4 rounded-lg tech-logo bg-charcoal/50">
              <img
                src="https://kimi-web-img.moonshot.cn/img/pngimg.com/02b185dfb25f763df50619254215ce93c011177b.png"
                alt="Telegram"
                className="object-contain w-16 h-16"
              />
            </div>
            <div className="p-4 rounded-lg tech-logo bg-charcoal/50">
              <div className="flex items-center justify-center w-16 h-16 text-lg font-bold text-accent-orange">
                n8n
              </div>
            </div>
            <div className="p-4 rounded-lg tech-logo bg-charcoal/50">
              <div className="flex items-center justify-center w-16 h-16 text-sm font-bold text-accent-orange">
                YouTube API
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className="relative py-20">
        <div className="max-w-4xl px-6 mx-auto text-center">
          <div className="reveal-up">
            <h2 className="mb-6 text-4xl font-bold lg:text-6xl">
              Ready to Lighten Your Load?
            </h2>
            <p className="mb-12 text-xl text-gray-300">
              Let's discuss how automation can transform your workflow and free
              up your time.
            </p>

            <a
              href="https://t.me/yourusername"
              target="_blank"
              className="inline-block px-12 py-6 text-2xl font-bold transition-all transform bg-accent-orange hover:bg-orange-600 rounded-2xl glow-orange hover:scale-105"
            >
              Write in Telegram
            </a>

            <p className="mt-6 text-gray-400">
              I respond personally :) Usually within 2 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
