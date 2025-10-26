"use client";
import React from "react";
import { ContainerScroll } from "./ui/containerScroll";
import ChatWidget from "./ChatWidget";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col">
      <ContainerScroll>
        <ChatWidget/>
        
      </ContainerScroll>
    </div>
  );
}
