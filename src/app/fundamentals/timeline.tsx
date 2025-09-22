"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Timeline() {
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true, repeat: -1, yoyo: true });

    tl.current.fromTo(
      ".box",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)" }
    );

    tl.current
      .to(".box1", { x: 150, duration: 1, ease: "power2.inOut" })
      .to(".box2", { y: 100, duration: 1, ease: "bounce.out" })
      .to(".box3", { rotation: 360, duration: 1, ease: "elastic.out(1, 0.3)" })
      .to(".box4", { scale: 1.5, duration: 1, ease: "back.out(2)" }, "-=0.5")
      .to(".box5", { skewX: 45, duration: 1, ease: "circ.inOut" })
      .to(".box6", { opacity: 0.2, duration: 1, ease: "power4.inOut" })
      .to(".box7", { x: -150, y: -100, duration: 1, ease: "expo.inOut" })
      .to(".box8", { rotationY: 360, duration: 1, ease: "linear" });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-white">
      <h1 className="text-2xl font-bold mb-6">GSAP Timeline Showcase</h1>

      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="box box1 w-20 h-20 rounded-xl bg-red-500"></div>
        <div className="box box2 w-20 h-20 rounded-xl bg-blue-500"></div>
        <div className="box box3 w-20 h-20 rounded-xl bg-green-500"></div>
        <div className="box box4 w-20 h-20 rounded-xl bg-yellow-500"></div>
        <div className="box box5 w-20 h-20 rounded-xl bg-purple-500"></div>
        <div className="box box6 w-20 h-20 rounded-xl bg-pink-500"></div>
        <div className="box box7 w-20 h-20 rounded-xl bg-orange-500"></div>
        <div className="box box8 w-20 h-20 rounded-xl bg-cyan-500"></div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => tl.current?.play()}
          className="px-4 py-2 bg-green-600 rounded cursor-pointer"
        >
          ▶ Play
        </button>
        <button
          onClick={() => tl.current?.pause()}
          className="px-4 py-2 bg-yellow-600 rounded cursor-pointer"
        >
          ⏸ Pause
        </button>
        <button
          onClick={() => tl.current?.reverse()}
          className="px-4 py-2 bg-red-600 rounded cursor-pointer"
        >
          ⏪ Reverse
        </button>
        <button
          onClick={() => tl.current?.restart()}
          className="px-4 py-2 bg-blue-600 rounded cursor-pointer"
        >
          🔄 Restart
        </button>
      </div>
    </div>
  );
}
