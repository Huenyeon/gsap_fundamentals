"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { CustomBounce } from "gsap/CustomBounce";
import { CustomWiggle } from "gsap/CustomWiggle";
import { RoughEase, SlowMo, ExpoScaleEase} from "gsap/EasePack";
import { SteppedEase } from "gsap/gsap-core";

export default function Easing() {
  useEffect(() => {
    gsap.registerPlugin(
      RoughEase,
      ExpoScaleEase,
      SlowMo,
      CustomEase,
      CustomBounce,
      CustomWiggle,
      SteppedEase
    );

    // const wiggles = 10;

    CustomWiggle.create("Wiggle.anticipate", {
      wiggles: 10,
      type: "anticipate",
    });

    CustomWiggle.create("Wiggle.easeOut", { wiggles: 3, type: "easeOut" });
    // CustomWiggle.create("Wiggle.easeInOut", { wiggles, type: "easeInOut" });
    // CustomWiggle.create("Wiggle.uniform", { wiggles, type: "uniform" });
    // CustomWiggle.create("Wiggle.random", { wiggles, type: "random" });

    // gsap.to(".blue-box", {
    //   x: 200,
    //   duration: 2,
    //   ease: "Wiggle.anticipate",
    //   repeat: -1,
    //   yoyo: true,
    // });
  }, []);


  const anticipateWiggle = () => {
    gsap.to(".blue-box", {
      x: 100,
      duration: 2,
      ease: "Wiggle.anticipate",
      repeat: 1,
      // yoyo: true,
    });
  };

  
  return (
    <div className="font-sans">
      {/* Section 1 - Blue Box */}
      {/* Section 2 - Red Box */}
      <section className="h-screen flex flex-col items-center justify-center gap-4 ">
        <h1>Rough Ease</h1>
        <div className="red-box w-20 h-20 bg-red-500"></div>
        <div className="flex flex-row gap-2">
          <button
            className="bg-amber-500 px-4 py-2 rounded text-white"
            onClick={() =>{
                gsap.from(".red-box", {
                    duration: 1,
                    opacity: 0,
                    //parameters of ease, custome ease
                    // ease: RoughEase.ease.config({
                    //     strength: 2,
                    //     points: 10,
                    //     taper: "in",
                    //     randomize: true,
                    // }),
                    // ease: "rough({strength: 1, points: 20, taper: 'in', randomize: true, clamp: false})",
                    ease: RoughEase,
                    repeat: 1,
                    });
            }}
          >
            Rough Ease
          </button>
          <button className="bg-amber-500 px-4 py-2 rounded text-white">
            Play me
          </button>
        </div>
      </section>



      <section className="h-screen flex flex-col items-center justify-center gap-4 ">
        <h1>Wiggles</h1>
        <div className="blue-box w-20 h-20 bg-blue-500"></div>
        <div className="flex flex-row gap-2">
          <button
            className="bg-amber-500 px-4 py-2 rounded text-white"
            onClick={() => anticipateWiggle()}
          >
            Wiggle
          </button>
          <button className="bg-amber-500 px-4 py-2 rounded text-white">
            Play me
          </button>
        </div>
      </section>


      {/* Section 3 - Green Box */}
      <section className="h-screen flex items-center justify-center ">
        <div className="green-box w-20 h-20 bg-green-500"></div>
      </section>

      {/* Section 4 - Yellow Box */}
      <section className="h-screen flex items-center justify-center ">
        <div className="yellow-box w-20 h-20 bg-yellow-500"></div>
      </section>

      {/* Section 5 - Purple Box */}
      <section className="h-screen flex items-center justify-center ">
        <div className="purple-box w-20 h-20 bg-purple-500"></div>
      </section>
    </div>
  );
}
