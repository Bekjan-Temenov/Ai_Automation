"use client";

import { SplineScene } from "./ui/splite";
import { Card } from "./ui/card";
import { Spotlight } from "./ui/spotlight";
import useTypedText from "../utils/useTypedText";

export function SplineSceneBasic() {  
    
    
    const typedRef = useTypedText<string>([
        "That Work",
        "For You",
        "24/7",
        "That Scale",
        "Intelligently",
    ]);
    
  return (
    <Card className="relative w-full overflow-hidden border-none h-full md:h-[650px]">
      <Spotlight
        className="left-0 -top-40 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="grid h-full grid-cols-1 md:grid-cols-2">

        <div className="relative hidden sm:flex md:block">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
        
        <div className="flex flex-col justify-between py-3 reveal-up">
          <div className="mb-6">
            <div className="inline-flex items-center px-4 py-2 mb-4 rounded-full bg-charcoal/50">
              <div className="w-2 h-2 mr-2 rounded-full bg-accent-orange animate-pulse"></div>
              <span className="text-sm">Available for projects</span>
            </div>
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-7xl">
            <span className="block">AI Systems</span>
            <span ref={typedRef} className="block text-accent-orange" />
          </h1>

          <p className="mb-8 text-xl leading-relaxed text-gray-300">
            I create intelligent automation solutions that eliminate routine
            tasks, streamline workflows, and let you focus on what truly
            matters—growing your business.
          </p>

          <div className="flex-col hidden gap-4 sm:flex md:block sm:flex-row">
            <a
              href="https://t.me/temen0v"
              className="px-8 py-4 font-semibold text-center transition-all rounded-lg bg-accent-orange hover:bg-orange-600 glow-orange"
            >
              Write in Telegram
            </a>
            <a
              href="portfolio.html"
              className="px-8 py-4 font-semibold text-center transition-all border rounded-lg border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-primary-black"
            >
              View My Work
            </a>
          </div>
        </div>

        <div className="relative min-h-[400px] mt-3 block md:hidden">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col block gap-4 md:hidden sm:flex-row">
            <a
              href="https://t.me/temen0v"
              className="px-8 py-4 font-semibold text-center transition-all rounded-lg bg-accent-orange hover:bg-orange-600 glow-orange"
            >
              Write in Telegram
            </a>
            <a
              href="portfolio.html"
              className="px-8 py-4 font-semibold text-center transition-all border rounded-lg border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-primary-black"
            >
              View My Work
            </a>
          </div>
      </div>
    </Card>
  );
}
