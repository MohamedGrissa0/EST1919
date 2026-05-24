// NextMatches.tsx

import { motion } from 'framer-motion';
import tarajilogo from '../assets/taraji.png';
import flamengo from '../assets/flamengo.png';

type MatchInstance = {
  teamA: string;
  teamB: string;
  logoA: string;
  logoB: string;
  competition: string;
  date: string;
  teamAres?: number;
  teamBres?: number;
};

const matches: MatchInstance[] = [
  {
    teamA: 'EST',
    teamB: 'Flamengo',
    logoA: tarajilogo,
    logoB: flamengo,
    competition: 'FIFA Club World Cup',
    date: '17/06/2025 02:00',
    teamAres: 0,
    teamBres: 2,
  },
  {
    teamA: 'EST',
    teamB: 'Los Angeles',
    logoA: tarajilogo,
    logoB:
      'https://e-s-tunis.com/images/logo/team/7bb199c8dda3d2949b0f97aa1e383b8a5f97c14e_thumb.png',
    competition: 'FIFA Club World Cup',
    date: '20/06/2025 23:00',
    teamAres: 1,
    teamBres: 0,
  },
  {
    teamA: 'EST',
    teamB: 'Chelsea',
    logoA: tarajilogo,
    logoB:
      'https://upload.wikimedia.org/wikipedia/hif/0/0d/Chelsea_FC.png?20150523181450',
    competition: 'FIFA Club World Cup',
    date: '25/06/2025 02:00',
  },
];

type MatchCardProps = {
  match: MatchInstance;
};

const MatchCard = ({ match }: MatchCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
    className="bg-[#0c1324] col-span-12 md:col-span-6 xl:col-span-4 rounded-xl p-6 flex justify-between items-center gap-6 shadow-xl hover:shadow-yellow-400/30 transition duration-300"
  >
    {/* Left Section */}
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <img
          src={match.logoA}
          alt={match.teamA}
          className="w-12 h-12 object-contain"
        />
        <img
          src={match.logoB}
          alt={match.teamB}
          className="w-12 h-12 object-contain"
        />
      </div>
      <div className="text-white text-sm md:text-base text-left">
        <p className="font-bold text-lg">{match.teamA}</p>
        <p className="font-bold text-lg uppercase">{match.teamB}</p>
        <p className="text-md text-gray-400">{match.date}</p>
        <p className="text-xs text-gray-400 mt-1">{match.competition}</p>
      </div>
    </div>

    {/* Right Section */}
    <div className="flex gap-2">
      <div className="bg-red-600 text-white text-xl font-bold px-5 py-2 rounded-lg shadow-md">
        {typeof match.teamAres === 'number' ? match.teamAres : '?'}
      </div>
      <div className="bg-red-600 text-white text-xl font-bold px-5 py-2 rounded-lg shadow-md">
        {typeof match.teamBres === 'number' ? match.teamBres : '?'}
      </div>
    </div>
  </motion.div>
);

const NextMatches = () => {
  return (
    <div className="py-12 px-6 md:px-12 flex flex-col gap-y-8">
      <p         className="text-white font1 text-lg font-bold md:text-3xl text-center w-full md:px-6 py-3 rounded-lg bg-[#0c1324] w-max">
        NEXT FIXTURES
      </p>
      <div className="grid grid-cols-12 gap-6">
        {matches.map((match, idx) => (
          <MatchCard key={idx} match={match} />
        ))}
      </div>
    </div>
  );
};

export default NextMatches;
