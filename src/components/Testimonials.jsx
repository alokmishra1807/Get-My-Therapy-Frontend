"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div
      className="h-[25rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow"  />
    </div>
  );
}

const testimonials = [
  {
    quote: "I used to feel overwhelmed every day, but with the help of therapy, I’ve learned to manage my anxiety and find calm in the chaos.",
    name: "Aarav Sharma",
    title: "Anxiety & Stress Management"
  },
  {
    quote: "We were constantly arguing and on the verge of breaking up. Counseling helped us communicate better and rebuild our relationship.",
    name: "Neha & Rahul Verma",
    title: "Relationship Counseling"
  },
  {
    quote: "After going through a traumatic experience, I felt lost and scared. Therapy gave me a safe space to heal and become strong again.",
    name: "Sanya Mehta",
    title: "Trauma Recovery"
  }
];
