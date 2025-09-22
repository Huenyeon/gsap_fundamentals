"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import Timeline from "./fundamentals/timeline";
import Easing from "./fundamentals/easing";
import Tween from "./fundamentals/tween";

export default function Fundamentals() {
  const [activeDemo, setActiveDemo] = useState<"timeline" | "easing" | "tween" | null>(null);

  useEffect(() => {
    // Animate title
    gsap.from(".title span", {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 0.8,
      ease: "back.out(1.7)",
    });

    // Start buttons invisible
    gsap.set([".btn-left", ".btn-center", ".btn-right"], {
      opacity: 0,
      visibility: "hidden",
    });

    // Timeline for entrance
    const tl = gsap.timeline();

    tl.fromTo(
      ".btn-left",
      { x: -200, opacity: 0, visibility: "visible" },
      { x: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" },
      0.2
    )
      .fromTo(
        ".btn-center",
        { y: 100, opacity: 0, visibility: "visible" },
        { y: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" },
        0.4
      )
      .fromTo(
        ".btn-right",
        { x: 200, opacity: 0, visibility: "visible" },
        { x: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" },
        0.6
      );
  }, []);

  return (
    <div className="font-sans flex flex-col items-center w-screen min-h-screen bg-gray-900 text-white p-8">
      <div className="flex flex-col items-center mb-12">
        <h1 className="title text-3xl sm:text-5xl font-bold mb-8 flex gap-2">
          {"Fundamentals of GSAP".split("").map((letter, i) => (
            <span key={i} className="inline-block">
              {letter}
            </span>
          ))}
        </h1>

        <div className="flex gap-4">
          <button
            onClick={() => setActiveDemo("tween")}
            className={`btn-left opacity-0 px-6 py-3 rounded-lg text-lg font-semibold transition cursor-pointer ${
              activeDemo === "tween" ? "bg-red-700" : "bg-red-600 hover:bg-gray-700"
            }`}
          >
            ▶ Tween
          </button>

          <button
            onClick={() => setActiveDemo("timeline")}
            className={`btn-center opacity-0 px-6 py-3 rounded-lg text-lg font-semibold transition cursor-pointer ${
              activeDemo === "timeline" ? "bg-green-700" : "bg-green-600 hover:bg-gray-700"
            }`}
          >
            ▶ Timeline
          </button>

          <button
            onClick={() => setActiveDemo("easing")}
            className={`btn-right opacity-0 px-6 py-3 rounded-lg text-lg font-semibold transition cursor-pointer ${
              activeDemo === "easing" ? "bg-blue-700" : "bg-blue-600 hover:bg-gray-700"
            }`}
          >
            ▶ Easing
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        {activeDemo === "easing" && (
          <div className="w-full flex justify-center">
            <Easing />
          </div>
        )}

        {activeDemo === "timeline" && (
          <div className="w-full flex justify-center">
            <Timeline />
          </div>
        )}

        {activeDemo === "tween" && (
          <div className="w-full flex justify-center">
            <Tween />
          </div>
        )}

      </div>
    </div>
  );
}
