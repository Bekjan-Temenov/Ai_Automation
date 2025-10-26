import React, { useState } from "react";
import useRevealOnScroll from "../utils/useRevealOnScroll";
import ProjectModal from "./ProjectModal";

const data = [
  {
    id: 1,
    title: "YouTube Shorts Automation",
    image: "resources/portfolio/project1.png",
    description: "YouTube Shorts Automation",
    dexription2:
      "This comprehensive YouTube Shorts automation system handles everything from content creation to publishing and analytics. The client was spending 8 hours daily on manual video processing and uploads.",
    keys: [
      " AI-powered video optimization and tagging",
      "Automated thumbnail generation and A/B testing",
      "Smart scheduling based on audience analytics",
      "Real-time performance monitoring",
      "Automated comment moderation and responses",
    ],
    results: {
      title: "Results",
      hashtags: [
        { id: 1, number: "90%", title: "Time Reduction" },
        { id: 2, number: "3x", title: "Content Output" },
      ],
    },
    button: "90% Efficiency",
    percent: "90%",
    analitic: [
      {
        id: 1,
        title: "Efficiency",
        number: 90,
      },
      {
        id: 2,
        title: "Auto Publishing",
        number: "24/7",
      },
      {
        id: 3,
        title: "Content Output",
        number: "3x",
      },
    ],
    hashtags: ["n8n", "YouTube API", "OpenAI", "Python"],
  },
  {
    id: 2,
    title: "Nutritionist Bot Platform",
    image: "resources/portfolio/project2.png",
    description:
      "AI-powered chatbot platform for nutritionists with personalized meal planning, client tracking, and automated engagement features.",
    button: "Health Tech",
    keys: [
      "Personalized meal plan generation based on dietary restrictions",
      "Automated client onboarding and progress tracking",
      "Integration with fitness trackers and health apps",
      "Smart reminder system for meals and check-ins",
      "Multi-language support for global reach",
    ],
    results: {
      title: "Stack",
      hashtag: [
        "Telegram API",
        "Supabase",
        "OpenAI",
        "React",
        "OpenAI GPT-4",
        "Node.js",
      ],
    },
    analitic: [
      {
        id: 1,
        title: "Clients",
        number: "500+",
      },
      {
        id: 2,
        title: "Engagement Rate",
        number: "85%",
      },
      {
        id: 3,
        title: "Availability",
        number: "24/7",
      },
    ],
    hashtags: ["Telegram API", "Supabase", "OpenAI", "React"],
  },
  {
    id: 3,
    title: "SMM Automation Suite",
    image: "resources/portfolio/project3.png",
    description:
      "Comprehensive social media automation with content curation, scheduling, and analytics across multiple platforms.",
    button: "Scale",
    keys: [
      "AI-powered content curation and creation",
      "Cross-platform scheduling and publishing",
      "Real-time engagement monitoring and responses",
      "Advanced analytics and performance tracking",
      "Team collaboration and approval workflows",
    ],
    results: {
      title: "Stack",
      hashtag: [
        "Instagram",
        "Facebook",
        "Twitter",
        "LinkedIn",
        "TikTok",
        "YouTube",
      ],
    },
    analitic: [
      {
        id: 1,
        title: "Platforms",
        number: 12,
      },
      {
        id: 2,
        title: "Posts/Month",
        number: "1000+",
      },
      {
        id: 3,
        title: "Time Saved",
        number: "75%",
      },
    ],
    hashtags: ["n8n", "Vercel", "Node.js", "MongoDB"],
  },
  {
    id: 4,
    title: "Email Marketing Automation",
    image: "resources/portfolio/project4.png",
    description:
      "Smart email sequences with AI-powered personalization and lead scoring that increased conversion rates by 340%.",
    button: "Conversion",
    results: {
      title: "Metrics",
      metrics: [
        {
          id: 1,
          title: "Conversion Boost",
          number: "340%",
        },
        {
          id: 2,
          title: "Open Rate Improvement",
          number: "85%",
        },
        {
          id: 3,
          title: "Click-through Rate",
          number: "+120%",
        },
      ],
    },
    keys: [
      "AI-powered subject line optimization",
      "Behavioral trigger automation",
      "Dynamic content personalization",
      " Advanced segmentation and targeting",
      "Predictive send time optimization",
    ],
    analitic: [
      {
        id: 1,
        title: "Conversion Boost",
        number: "340%",
      },
      {
        id: 2,
        title: "Subscribers",
        number: "50K",
      },
      {
        id: 3,
        title: "Deliverability",
        number: "98%",
      },
    ],
    hashtags: ["SendGrid", "Python", "Machine Learning", "PostgreSQL"],
  },
];

const Portfolio = () => {
  useRevealOnScroll();
  const [opened, setOpened] = useState<null | typeof data[0]>(null);

  return (
    <div className="bg-primary-black text-warm-white">
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center reveal-up">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real projects, real results. Discover how AI automation
              transformed these businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {data.map((item, index) => (
              <div
                key={index}
                className="project-card bg-charcoal/50 rounded-2xl cursor-pointer hover-lift hover:scale-105  reveal-up"
                onClick={() => setOpened(item)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={`img-${item.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <span className="bg-accent-orange/20 text-accent-orange px-3 py-1 rounded-full text-sm font-semibold">
                      {item.button}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-6">{item.description}</p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {item.analitic.map((item, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <span className="text-3xl font-bold ">
                          {item.number}
                        </span>
                        <span className="text-sm text-gray-300">
                          {item.title}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.hashtags.map((item, index) => (
                      <span
                        key={index}
                        className="bg-charcoal px-3 py-1 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {opened && (
            <div className="fixed top-0 left-0  h-full bg-black/50 flex items-center justify-center">
              <ProjectModal
                data={opened}
                id={opened}
                onClose={() => setOpened(false)}
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
