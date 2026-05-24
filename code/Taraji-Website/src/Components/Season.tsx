// Season.tsx

import React from 'react';
import { BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { IoIosArrowRoundForward } from 'react-icons/io';

// ---------- Types ----------
type Standing = {
  pos: number;
  team: string;
  pts: number;
};

type CupStage = {
  round: string;
  match: string;
  score: string;
};

// ---------- Data ----------
const standings: Standing[] = [
  { pos: 1, team: 'Espérance de Tunis', pts: 66 },
  { pos: 2, team: 'US Monastirienne', pts: 62 },
  { pos: 3, team: 'Étoile du Sahel', pts: 61 },
  { pos: 4, team: 'Club Africain', pts: 54 },
  { pos: 5, team: 'ES Zarzis', pts: 54 },
];

const cupPath: CupStage[] = [
  { round: 'Round of 16', match: 'Espérance 🆚 Kasserine', score: '6–0' },
  { round: 'Round of 16', match: 'Espérance 🆚 Hammam-Lif', score: '4–0' },
  { round: 'Quarter-Final', match: 'Espérance 🆚 Zarzis', score: '3–1' },
  { round: 'Semi-Final', match: 'Espérance 🆚 Ben Gerden', score: '3–0' },
  { round: 'Final', match: 'Espérance 🆚 Stade Tunisien', score: '1–0' },
];

// ---------- Animation Variant ----------
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.2 },
  }),
};

// ---------- Component ----------
export default function Season() {
  return (
    <div className="w-full px-4 py-10 space-y-12">
      {/* Header */}
      <motion.h1
        className="text-white font1 text-lg font-bold md:text-3xl text-center w-full md:px-6 py-3 rounded-lg bg-[#0c1324] w-max"
        initial="hidden"
        animate="show"
        variants={fadeInUp}
        custom={0}
      >
        Tunisian Football Season 2024–2025 🏆
      </motion.h1>

      {/* Standings Table */}
      <motion.div
        className="shadow-lg rounded-xl p-6 overflow-x-auto max-w-xl mx-auto"
        initial="hidden"
        animate="show"
        variants={fadeInUp}
        custom={1}
      >
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
          <BarChart2 className="w-5 h-5" /> Standings
        </h2>
        <table className="table w-full h-[300px] text-white">
          <thead>
            <tr className="text-sm text-gray-500">
              <th>#</th>
              <th>Team</th>
              <th className="text-right">Points</th>
            </tr>
          </thead>
          <tbody>
            {standings.map(({ pos, team, pts }) => (
              <tr
                key={pos}
                className={`hover ${
                  pos === 1 ? 'bg-red-500 text-white font-bold' : ''
                }`}
              >
                <td>{pos}</td>
                <td>{team}</td>
                <td className="text-right">{pts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Espérance Cup Journey */}
      <motion.div initial="hidden" animate="show" variants={fadeInUp} custom={2}>
        <h2 
className="text-white font1 text-lg font-bold md:text-3xl text-center w-full md:px-6 py-3 rounded-lg bg-[#0c1324] w-max">
  
            Espérance’s Journey – Tunisian Cup 🏆
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative px-4 md:px-24">
          {cupPath.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 w-full md:w-60 text-center shadow-lg hover:scale-105 hover:shadow-yellow-500/30 transition duration-300"
                custom={index}
                initial="hidden"
                animate="show"
                variants={fadeInUp}
              >
                <p className="text-yellow-400 text-sm font-semibold">{step.round}</p>
                <p className="text-white font-semibold mt-2">{step.match}</p>
                <p className="text-red-400 text-lg mt-1">{step.score}</p>
              </motion.div>

              {/* Arrow */}
              {index < cupPath.length - 1 && (
                <div className="hidden md:flex items-center justify-center">
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 * index }}
                    className="text-white text-3xl"
                  >
                    <IoIosArrowRoundForward />
                  </motion.span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
