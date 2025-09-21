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

    const wiggles = 10;

    CustomWiggle.create("Wiggle.easeOut", { wiggles, type: "easeOut" });
    CustomWiggle.create("Wiggle.easeInOut", { wiggles, type: "easeInOut" });
    CustomWiggle.create("Wiggle.anticipate", { wiggles, type: "anticipate" });
    CustomWiggle.create("Wiggle.uniform", { wiggles, type: "uniform" });
    CustomWiggle.create("Wiggle.random", { wiggles, type: "random" });


  }, []);

  return (
    <div className="font-sans grid min-h-screen place-items-center">
      <div className="grid grid-cols-3 gap-6">
        <div>
            <div className="blue-box w-20 h-20 bg-blue-500"></div>
            <button className = "bg-amber-500">Play me</button>
        </div>

        <div className="red-box w-20 h-20 bg-red-500"></div>
        <div className="green-box w-20 h-20 bg-green-500"></div>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="yellow-box w-20 h-20 bg-yellow-500"></div>
        <div className="purple-box w-20 h-20 bg-purple-500"></div>
      </div>
    </div>

  );
}
