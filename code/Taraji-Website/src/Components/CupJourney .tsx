import { motion } from "framer-motion";

const cupPath = [
  {
    round: "Round of 16",
    matches: [
      { team1: "Espérance", team2: "Hammam-Lif", score: "4–0", win: true },
      { team1: "Monastir", team2: "Djelma", score: "5–0", win: true },
    ],
  },
  {
    round: "Semi-Finals",
    matches: [
      { team1: "Espérance", team2: "Ben Guerdane", score: "3–1", win: true },
      { team1: "Stade Tunisien", team2: "Monastir", score: "2–0", win: true },
    ],
  },
  {
    round: "Final",
    matches: [
      { team1: "Espérance", team2: "Stade Tunisien", score: "1–0", win: true },
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i:Number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: Number(i) * 0.3 },
  }),
};

const CupJourney = () => {
  return (
    <div className="mt-12">
      <motion.h2
        className="text-white font1 text-lg font-bold md:text-3xl text-center w-full md:px-6 py-3 rounded-lg bg-[#0c1324] w-max"
        initial="hidden"
        animate="show"
        variants={fadeInUp}
      >
        Espérance’s Journey – Tunisian Cup 🏆
      </motion.h2>

      <div className="flex flex-col md:flex-row justify-between gap-8">
        {cupPath.map((round, roundIndex) => (
          <motion.div
            key={round.round}
            className="bg-white/5 backdrop-blur-lg p-4 rounded-xl border border-white/10 w-full md:w-1/3 space-y-4"
            custom={roundIndex}
            initial="hidden"
            animate="show"
            variants={fadeInUp}
          >
            <h3 className="text-yellow-400 font-bold text-lg text-center">
              {round.round}
            </h3>
            {round.matches.map((match, matchIndex) => (
              <motion.div
                key={matchIndex}
                className={`rounded-lg p-3 text-white text-sm font-semibold shadow ${
                  match.team1 === "Espérance" || match.team2 === "Espérance"
                    ? "bg-red-600/60 border border-red-400"
                    : "bg-gray-700/40"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-center">
                  {match.team1} vs {match.team2}
                </p>
                <p className="text-center text-sm text-gray-300 mt-1">
                  {match.score}
                </p>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CupJourney;
