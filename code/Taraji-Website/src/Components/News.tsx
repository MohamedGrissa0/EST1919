// News.tsx

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import tarajilogo from "../assets/taraji.png";
import benhmida from "../assets/benhmida.jpg";

type CountdownUnitProps = {
  value: number;
  label: string;
};

const CountdownUnit = ({ value, label }: CountdownUnitProps) => (
  <motion.div
    key={label + value}
    initial={{ y: -10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.3, type: "spring" }}
    className="flex flex-col items-center px-4"
  >
    <div className="bg-[#0c1324] text-white text-2xl md:text-3xl font-bold px-4 py-2 rounded-xl shadow-md w-16 md:w-20 text-center">
      {value < 10 ? `0${value}` : value}
    </div>
    <span className="mt-2 text-sm text-gray-300 uppercase tracking-wide">
      {label}
    </span>
  </motion.div>
);

type CountdownProps = {
  targetDate: string;
};

const Countdown = ({ targetDate }: CountdownProps) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center py-6  text-white"
    >
      <div className="flex justify-center -gap-2 md:gap-8">
        <CountdownUnit value={timeLeft.days} label="Days" />
        <CountdownUnit value={timeLeft.hours} label="Hours" />
        <CountdownUnit value={timeLeft.minutes} label="Minutes" />
        <CountdownUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </motion.div>
  );
};

const News = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 lg:h-[calc(100vh-90px)] md:py-0">
      {/* Left Section */}
      <div className="col-span-1 lg:col-span-3 overflow-hidden">
        <img
          src={benhmida}
          alt="EST vs Flamengo"
          className="h-[700px] md:h-max w-full object-cover shadow-md"
        />
      </div>

      {/* Right Section */}
      <div className="col-span-1 lg:col-span-2 h-full relative overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${benhmida})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-indigo-900/60 backdrop-blur-3xl"></div>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col justify-center h-full p-5 md:p-12 space-y-6">
          <p className="text-red-500 text-xs font-bold uppercase tracking-wide">
            First Team
          </p>

          <h2 className="text-4xl uppercase md:text-5xl font-extrabold text-white leading-tight">
            Blood & Gold : EST
            <br />
            Ready to make
            <br />
            history
          </h2>

          <span className="text-red-500 text-4xl cursor-pointer hover:translate-x-1 transition">
            →
          </span>

          <div className="bg-[#0c1324] rounded-xl p-6 flex flex-col md:flex-row justify-between items-center shadow-lg w-full gap-y-6 md:gap-y-0">
            {/* Teams Info */}
            <div className="flex items-center gap-4">
              <div className="flex items-center -space-x-2">
                <img
                  src={tarajilogo}
                  alt="EST Logo"
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/hif/0/0d/Chelsea_FC.png?20150523181450"
                  alt="Flamengo Logo"
                  className="w-10 h-10 md:w-11 md:h-11 object-contain"
                />
              </div>
              <div className="text-white text-center md:text-left">
                <p className="font-bold text-lg tracking-wide">EST</p>
                <p className="font-bold text-lg tracking-wide uppercase">flamengo</p>
                <p className="text-xs text-gray-400 mt-1">FIFA Club World Cup</p>
              </div>
            </div>

            {/* Scores */}
            <div className="flex items-center gap-2">
              <div className="bg-red-600 text-white text-xl font-bold px-5 py-2 rounded-lg shadow-md">
                ?
              </div>
              <div className="bg-red-600 text-white text-xl font-bold px-5 py-2 rounded-lg shadow-md">
                ?
              </div>
            </div>
          </div>

          {/* Countdown */}
          <Countdown  targetDate="2025-06-25T02:00:00" />
        </div>
      </div>
    </div>
  );
};

export default News;
