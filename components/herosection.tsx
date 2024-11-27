import { useState, useEffect } from "react";
import {BackgroundBeamsWithCollision} from '../components/ui/background-beams-with-collision'

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2024-12-15T10:00:00"); // Replace with your event date
    const timer = setInterval(() => {
      const now = new Date();
    //   @ts-ignore
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <BackgroundBeamsWithCollision>
    <div className="relative min-h-screen w-full text-white flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="bg-gradient-to-r from-indigo-800 via-purple-600 to-pink-600 opacity-30 animate-gradient" />
        <canvas id="particleCanvas" className="absolute inset-0 z-[-1]" />
      </div>

      {/* Content */}
      <h1 className="text-6xl font-extrabold neon-text mb-4">
        🚀 Unleash Creativity at the UI/UX Hackathon!
      </h1>
      <p className="text-lg mb-6 text-gray-300 max-w-2xl">
        Join Mozilla Firefox Club's exciting event to showcase your design skills and collaborate with the best minds in a futuristic challenge. Be part of the revolution!
      </p>
      <div className="flex gap-4">
        <button className="bg-transparent border border-indigo-500 hover:bg-indigo-500 text-indigo-500 hover:text-white px-6 py-3 rounded-lg shadow-lg font-bold transition-all">
          Register Now
        </button>
        <button className="bg-indigo-700 px-6 py-3 rounded-lg shadow-lg font-bold hover:bg-indigo-800 transition-all">
          Event Details
        </button>
      </div>
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-gray-300">Event Starts In:</h3>
        <div className="flex justify-center space-x-4 text-3xl mt-4">
          <div>
            <p className="font-bold">{timeLeft.days}</p>
            <p className="text-sm text-gray-400">Days</p>
          </div>
          <div>
            <p className="font-bold">{timeLeft.hours}</p>
            <p className="text-sm text-gray-400">Hours</p>
          </div>
          <div>
            <p className="font-bold">{timeLeft.minutes}</p>
            <p className="text-sm text-gray-400">Minutes</p>
          </div>
          <div>
            <p className="font-bold">{timeLeft.seconds}</p>
            <p className="text-sm text-gray-400">Seconds</p>
          </div>
        </div>
      </div>

      {/* Illustration or graphic */}
      <img
        src="/path-to-hackathon-illustration.png"
        alt="Hackathon Illustration"
        className="absolute bottom-0 w-1/3 pointer-events-none opacity-80"
      />
    </div>
    </BackgroundBeamsWithCollision>
    </>
  );
};
