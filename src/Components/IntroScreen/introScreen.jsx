import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function IntroScreen({ onFinish }) {
  const containerRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onFinish, 
      defaults: { ease: "power3.out" }
    });

    // Fade In
    tl.from(containerRef.current, {
      opacity: 0,
      duration: 0.8,
    });

    // Circle pulse animation
    tl.fromTo(
      circleRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1.4,
        opacity: 1,
        duration: 1.1,
        ease: "elastic.out(1, 0.4)",
      }
    );

    // Logo text animation
    tl.fromTo(
      textRef.current,
      { scale: 0.4, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
      },
      "-=0.5"
    );

    // Glow effect
    tl.to(textRef.current, {
      textShadow: "0 0 25px #00f6ff, 0 0 50px #00f6ff",
      duration: 1,
      yoyo: true,
      repeat: 1,
    });

    // Fade out splash
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 1,
      delay: 0.4,
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen bg-black flex items-center justify-center"
    >
      <div className="relative flex flex-col items-center">
        {/* Pulsing Background Circle */}
        <div
          ref={circleRef}
          className="w-40 h-40 rounded-full bg-[#00f6ff]/20 blur-lg"
        ></div>

        {/* Logo / Initials */}
        <h1
          ref={textRef}
          className="absolute text-5xl font-bold text-white tracking-widest"
        >
          RT
        </h1>
      </div>
    </div>
  );
}
