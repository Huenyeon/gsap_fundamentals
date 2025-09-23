"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Tween() {
    useEffect(() => {
    
    // --- Seek ---
    const seekAnim = gsap.fromTo(
      ".seek-text",
      { x: -400, opacity: 0 },   
      {
        x: 0,                    
        opacity: 1,
        duration: 4,             
        ease: "power2.out",
        paused: true,
      }
    );

    ScrollTrigger.create({
      trigger: ".seek-section",
      start: "top 80%",
      onEnter: () => seekAnim.seek(2).play(),
      onLeaveBack: () => seekAnim.reverse(),
    });


    // --- Yoyo ---
    gsap.to(".yoyo-box", {
      y: -50,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".yoyo-section",
        start: "top 80%",
        toggleActions: "play pause resume reset",
      },
    });

    // --- Progress ---
    gsap.fromTo(
      ".progress-text",
      { scale: 0.5, opacity: 0.3 },
      {
        scale: 1.5,
        opacity: 1,
        ease: "elastic.out(1,0.3)",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".progress-section",
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );

    // --- TimeScale ---
    const fast = gsap.timeline({
      scrollTrigger: {
        trigger: ".timescale-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
    fast.to(".timescale-box", { rotation: 360, duration: 2 }).timeScale(3);

    // --- Reverse ---
    gsap.fromTo(
      ".reverse-box",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: ".reverse-section",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <div className="text-white bg-gray-900 min-h-[500vh] py-20 space-y-32">

    <section className="seek-section text-center">
    <h2 className="seek-text text-3xl font-extrabold mb-6">
        Welcome to <span className="text-orange-500">TWEEN</span>
    </h2>
    </section>

      {/* Yoyo Section */}
      <section className="yoyo-section text-center">
        <h2 className=" yoyo-box text-xl mb-12 font-bold">Yoyo</h2>
        <div className="flex gap-6 justify-center">
          <div className="yoyo-box w-20 h-20 bg-orange-500 rounded-lg" />
          <div className="yoyo-box w-20 h-20 bg-cyan-500 rounded-lg" />
        </div>
      </section>

      {/* Progress Section */}
      <section className="progress-section text-center">
        <h2 className="text-lg mb-6 font-bold">Progress</h2>
        <p className="progress-text text-lg mb-2">WOW</p>
        <p className="progress-text text-lg mb-2">SO AMAZING</p>
        <p className="progress-text text-lg">GSAP IS SO COOL 👍</p>
      </section>

      {/* TimeScale Section */}
      <section className="timescale-section text-center">
        <h2 className="timescale-box text-xl mb-6">TimeScale</h2>
        <div className="flex gap-6 justify-center">
          <div className="timescale-box w-20 h-20 bg-yellow-500 rounded-lg" />
          <div className="timescale-box w-20 h-20 bg-lime-500 rounded-lg" />
        </div>
      </section>

      {/* Reverse Section */}
      <section className="reverse-section text-center">
        <h2 className="reverse-box text-xl mb-6">Reverse</h2>
        <div className="flex gap-6 justify-center">
          <div className="reverse-box w-20 h-20 bg-red-500 rounded-lg" />
          <div className="reverse-box w-20 h-20 bg-blue-500 rounded-lg" />
          <div className="reverse-box w-20 h-20 bg-green-500 rounded-lg" />
        </div>
      </section>
    </div>
  );
}
