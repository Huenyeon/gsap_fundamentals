"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { CustomBounce } from "gsap/CustomBounce";
import { CustomWiggle } from "gsap/CustomWiggle";
import { RoughEase, SlowMo, ExpoScaleEase } from "gsap/EasePack";
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

    const wiggles = 8;

    //easeout, easeinout, uniform, random, anticipate
    CustomWiggle.create("anticipateWiggle", {wiggles, type: "anticipate"})
    CustomWiggle.create("easeInOutWiggle", {wiggles, type: "easeInOut"})
    CustomWiggle.create("easeOutWiggle", {wiggles, type: "easeOut"})
    CustomWiggle.create("randomWiggle", {wiggles, type: "random"})
    CustomWiggle.create("uniformWiggle", {wiggles, type: "uniform"})

    //custome bounce

    CustomBounce.create("bouncingSquare", {
      strength: 0.6,
      squash: 3,
      squashID: "bouncingSquare-squash",
    });
  }, []);


  return (
    <div className="font-sans">
      <section className="h-screen flex flex-col items-center justify-center gap-4">
        <h1>Rough Ease</h1>
        <div className="red-box w-20 h-20 rounded-xl bg-red-500"></div>
        <div className="flex flex-row gap-2">
          <button
            className="bg-amber-500 px-4 py-2 rounded text-white"
            onClick={()=> {
              gsap.from(".red-box", {
                duration: 1,
                opacity: 0,
                ease: RoughEase,
                repeat: 1,
              })
            }}
          >
            Rough Ease
          </button>
          <button
            className="bg-amber-500 px-4 py-2 rounded text-white"
            onClick={() => {
              gsap.from(".red-box", {
                duration: 1,
                opacity: 0,
                ease: RoughEase.ease.config({
                  template: "strong.inOut",
                  strength: 3,
                  points: 50,
                  taper: "both",
                  randomize: false,
                  clamp: false,
                }),
                repeat: 1
              });
            }}
          >
            Config
          </button>
        </div>
      </section>

      <section className="h-screen flex flex-col items-center justify-center gap-4">
        <h1>SlowMo</h1>
        <div className="purple-box w-20 h-20 rounded-xl bg-purple-500"></div>
        <div className="flex flex-row gap-2">
          <button
            className="bg-amber-500 px-4 py-2 rounded text-white"
            onClick ={
              ()=> {
                gsap.to(".purple-box", {
                  x:200,
                  // y:100,
                  opacity:0,
                  duration: 2,
                  rotation:27,
                  ease: SlowMo,
                  repeat: 1,
                  yoyo: true,
                })
              }
            }
            
          >
            SlowMo
          </button>
          <button
            className="bg-amber-500 px-4 py-2 rounded text-white"
            onClick= {
              ()=> {
                gsap.to(".purple-box", {
                  duration:3,
                  opacity:0,
                  x:200,
                  ease : SlowMo.ease.config(0.5, 0.8, true)
                })
              }
            }
          >
            Config
          </button>
        </div>
      </section>


      <section className="h-screen flex flex-col items-center justify-center gap-4 ">
        <h1>Wiggles</h1>
        <div className="blue-box w-20 h-20 rounded-xl bg-blue-500"></div>
        <div className="flex flex-row gap-2">
          <button
            className="bg-amber-500 px-4 py-2 rounded text-white"
            onClick={
              ()=> {
                gsap.to(".blue-box", {
                  x: 100,
                  duration: 2,

                  ease: "anticipateWiggle",
                  repeat: 1,
                  yoyo: true,
                })
              }
            }
          >
            Anticipate
          </button>

          <button
            className="bg-amber-500 px-4 py-2 rounded text-white"
            onClick={
              ()=> {
                gsap.to(".blue-box", {
                  x: 100,
                  duration: 2,

                  ease: "easeOutWiggle",
                  repeat: 1,
                  yoyo: true,
                })
              }
            }
          >
            easeOut
          </button>

          <button
            className="bg-amber-500 px-4 py-2 rounded text-white"
            onClick={
              ()=> {
                gsap.to(".blue-box", {
                  x: 100,
                  duration: 2,

                  ease: "easeInOutWiggle",
                  repeat: 1,
                  yoyo: true,
                })
              }
            }
          >
            easeInOut
          </button>

          <button
            className="bg-amber-500 px-4 py-2 rounded text-white"
            onClick={
              ()=> {
                gsap.to(".blue-box", {
                  x: 100,
                  duration: 2,

                  ease: "randomWiggle",
                  repeat: 1,
                  yoyo: true,
                })
              }
            }
          >
            random
          </button>

          <button
            className="bg-amber-500 px-4 py-2 rounded text-white"
            onClick={
              ()=> {
                gsap.to(".blue-box", {
                  x: 100,
                  duration: 2,

                  ease: "uniformWiggle",
                  repeat: 1,
                  yoyo: true,
                })
              }
            }
          >
            uniform
          </button>


        </div>
      </section>


      <section className="h-screen flex flex-col items-center justify-center gap-4 ">
        <h1>CustomBounce</h1>
        <div className="pink-box w-20 h-20 bg-pink-600 rounded-xl"></div>
        <button
            className="bg-amber-500 px-4 py-2 rounded text-white"
            onClick={
              ()=> {
                gsap.from(".pink-box", { duration: 2, y: -200, ease: "bouncingSquare" });
                gsap.to(".pink-box", {
                  duration: 2,
                  scaleX: 1.4,
                  scaleY: 0.6,
                  ease: "bouncingSquare-squash",
                  transformOrigin: "center bottom",
                });
              }
            }
          >
            bounce
          </button>
      </section>


    </div>
  );
}
