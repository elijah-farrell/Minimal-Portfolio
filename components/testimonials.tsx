"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function TestimonialsDemo() {
  return (
    <div className="h-[20rem] flex flex-col antialiased bg-white dark:bg-[#171717] items-center justify-center relative w-full">
      {/* Left gradient - more minimal and responsive */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-20 md:w-24 lg:w-32 z-[9999] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-[#171717] via-white/80 dark:via-[#171717]/80 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-4 sm:h-6 md:h-8 bg-gradient-to-b from-white dark:from-[#171717] via-white/60 dark:via-[#171717]/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-4 sm:h-6 md:h-8 bg-gradient-to-t from-white dark:from-[#171717] via-white/60 dark:via-[#171717]/60 to-transparent"></div>
      </div>
      
      {/* Right gradient - more minimal and responsive */}
      <div className="absolute inset-y-0 right-0 w-16 sm:w-20 md:w-24 lg:w-32 z-[9999] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-l from-white dark:from-[#171717] via-white/80 dark:via-[#171717]/80 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-4 sm:h-6 md:h-8 bg-gradient-to-b from-white dark:from-[#171717] via-white/60 dark:via-[#171717]/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-4 sm:h-6 md:h-8 bg-gradient-to-t from-white dark:from-[#171717] via-white/60 dark:via-[#171717]/60 to-transparent"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 w-full overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          className="[--animation-duration:400s]"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "John's work is absolutely phenomenal. The attention to detail and technical excellence he brings to every project is exactly what we need at Tesla.",
    name: "Elon Musk",
    title: "CEO, Tesla & SpaceX",
    image: "https://images.unsplash.com/photo-1624797432677-6f803a98acb3?q=80&w=400&h=400&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    quote:
      "Working with John has been transformative for our platform. His ability to scale solutions and optimize performance is unmatched.",
    name: "Jeff Bezos",
    title: "Founder, Amazon",
    image: "https://images.unsplash.com/photo-1613181013804-1dcba09e6a9d?q=80&w=789&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "John delivered our project ahead of schedule and exceeded all expectations. His technical expertise is world-class.",
    name: "Mark Zuckerberg",
    title: "CEO, Meta",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote:
      "John's ability to translate complex requirements into elegant solutions is remarkable. He's a true innovator in the field.",
    name: "Tim Cook",
    title: "CEO, Apple",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=400&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote:
      "The quality of John's work speaks for itself. He consistently delivers beyond what we ask for and pushes the boundaries of what's possible.",
    name: "Satya Nadella",
    title: "CEO, Microsoft",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=400&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote:
      "John's technical skills combined with his strategic thinking make him an invaluable partner for any ambitious project.",
    name: "Sundar Pichai",
    title: "CEO, Google",
    image: "https://images.unsplash.com/photo-1718209881007-c0ecdfc00f9d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];