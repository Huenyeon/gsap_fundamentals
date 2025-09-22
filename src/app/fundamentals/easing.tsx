"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { CustomBounce } from "gsap/CustomBounce";
import { CustomWiggle } from "gsap/CustomWiggle";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";

export default function Easing() {
  useEffect(() => {
    gsap.registerPlugin(
      RoughEase,
      ExpoScaleEase,
      SlowMo,
      CustomEase,
      CustomBounce,
      CustomWiggle
    );

    const wiggles = 8;
    CustomWiggle.create("wiggleOut", { wiggles, type: "easeOut" });
    CustomWiggle.create("wiggleInOut", { wiggles, type: "easeInOut" });
    CustomWiggle.create("wiggleAnticipate", { wiggles, type: "anticipate" });
    CustomWiggle.create("wiggleUniform", { wiggles, type: "uniform" });
    CustomWiggle.create("wiggleRandom", { wiggles, type: "random" });
  }, []);

  const playAnimation = () => {
    const tl = gsap.timeline();

    tl.to(".blue-box", {
      x: 150,
      duration: 1.2,
      ease: "bounce.out",
      yoyo: true,
      repeat: 1,
    })
      .to(".red-box", {
        y: 120,
        duration: 1.2,
        ease: "elastic.out(1, 0.3)",
        yoyo: true,
        repeat: 1,
      })
      .to(".green-box", {
        rotation: 360,
        duration: 1.2,
        ease: "slow(0.7, 0.7, false)",
        yoyo: true,
        repeat: 1,
      })
      .to(".yellow-box", {
        scale: 1.5,
        duration: 1.2,
        ease: "expoScale(0.5, 2, power2.inOut)",
        yoyo: true,
        repeat: 1,
      })
      .to(".purple-box", {
        x: -150,
        duration: 1.2,
        ease: "wiggleAnticipate",
        yoyo: true,
        repeat: 1,
      });
  };

  return (
    <div className="font-sans flex flex-col items-center justify-center">
      <div className="grid grid-cols-3 gap-8 mb-6">
        <div className="blue-box w-20 h-20 bg-blue-500 rounded-lg" />
        <div className="red-box w-20 h-20 bg-red-500 rounded-lg" />
        <div className="green-box w-20 h-20 bg-green-500 rounded-lg" />
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="yellow-box w-20 h-20 bg-yellow-500 rounded-lg" />
        <div className="purple-box w-20 h-20 bg-purple-500 rounded-lg" />
      </div>

      <button
        onClick={playAnimation}
        className="px-6 py-3 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-600 transition"
      >
        ▶ Play Animation
      </button>
    </div>
  );
}
