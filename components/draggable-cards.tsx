import React, { useEffect, useRef, useState } from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import Carousel from "@/components/ui/image-carousel";

export function DraggableCardDemo() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(5).fill(false));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Add staggered delay based on card index
              setTimeout(() => {
                setVisibleCards(prev => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 150) // 150ms delay between each card
              observer.unobserve(ref);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px 100px 0px' }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const slideData = [
    {
      title: "Japan",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Canada",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Mexico",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400",
    },
    {
      title: "Concert",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <>
      {/* Mobile Carousel - visible under 768px */}
      <div 
        ref={(el) => { cardRefs.current[4] = el }}
        className={`block md:hidden transition-all duration-700 ease-out ${
          visibleCards[4]
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-12'
        }`}
      >
        <Carousel slides={slideData} />
      </div>

      {/* Desktop Draggable Cards - visible 768px and above */}
      <DraggableCardContainer className="hidden md:flex relative w-full items-center justify-center overflow-clip py-8 md:py-16">
      <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-8 p-2 sm:p-4 md:p-8 max-w-5xl mx-auto">
        {/* Japan Card */}
        <div
          ref={(el) => { cardRefs.current[0] = el }}
          className={`transition-all duration-700 ease-out ${
            visibleCards[0]
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-12'
          }`}
        >
          <DraggableCardBody className="rotate-[-2deg] w-48 h-auto sm:w-64 sm:h-auto md:w-80 md:h-auto p-2 sm:p-4 md:p-6 min-h-0">
          <img
            src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Japan"
            className="pointer-events-none relative h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 object-cover"
          />
          <h3 className="mt-2 sm:mt-4 text-center text-lg sm:text-xl md:text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            Japan
          </h3>
          </DraggableCardBody>
        </div>

        {/* Canada Card */}
        <div
          ref={(el) => { cardRefs.current[1] = el }}
          className={`transition-all duration-700 ease-out ${
            visibleCards[1]
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-12'
          }`}
        >
          <DraggableCardBody className="rotate-[3deg] w-48 h-auto sm:w-64 sm:h-auto md:w-80 md:h-auto p-2 sm:p-4 md:p-6 min-h-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Canada"
            className="pointer-events-none relative h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 object-cover"
          />
          <h3 className="mt-2 sm:mt-4 text-center text-lg sm:text-xl md:text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            Canada
          </h3>
          </DraggableCardBody>
        </div>

        {/* Mexico Card */}
        <div
          ref={(el) => { cardRefs.current[2] = el }}
          className={`transition-all duration-700 ease-out ${
            visibleCards[2]
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-12'
          }`}
        >
          <DraggableCardBody className="rotate-[1deg] w-48 h-auto sm:w-64 sm:h-auto md:w-80 md:h-auto p-2 sm:p-4 md:p-6 min-h-0">
        <img
          src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400"
          alt="Mexico"
          className="pointer-events-none relative h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 object-cover"
        />
          <h3 className="mt-2 sm:mt-4 text-center text-lg sm:text-xl md:text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            Mexico
          </h3>
          </DraggableCardBody>
        </div>

        {/* Concert Card */}
        <div
          ref={(el) => { cardRefs.current[3] = el }}
          className={`transition-all duration-700 ease-out ${
            visibleCards[3]
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-12'
          }`}
        >
          <DraggableCardBody className="rotate-[-3deg] w-48 h-auto sm:w-64 sm:h-auto md:w-80 md:h-auto p-2 sm:p-4 md:p-6 min-h-0">
        <img
          src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Concert"
          className="pointer-events-none relative h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 object-cover"
        />
          <h3 className="mt-2 sm:mt-4 text-center text-lg sm:text-xl md:text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            Concert
          </h3>
          </DraggableCardBody>
        </div>
      </div>

    </DraggableCardContainer>
    </>
  );
}
