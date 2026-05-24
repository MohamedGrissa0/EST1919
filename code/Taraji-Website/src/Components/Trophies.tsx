import botola from "../assets/botola-removebg-preview.png";
import caf from "../assets/caf1.png";
import cafsupercup from "../assets/afc-supercup.png";
import arab from "../assets/arab.png";
import tunsiansupercup from "../assets/zazaza.png"
import arabcup from "../assets/arabcup.png"

const trophies = [
  {
    title: "Tunisian Ligue 1",
    image: botola,
    count: 34,
  },
  {
    title: "CAF Champions League",
    image: caf,
    count: 4,
  },
  {
    title: "Tunisian Cup",
    image: tunsiansupercup,
    count: 16,
  },
  {
    title: "CAF Super Cup",
    image: cafsupercup,
    count: 1,
  },
  {
    title: "Arab Club Championship",
    image: arabcup,
    count: 3,
  },
  {
    title: "Tunisian Super Cup",
    image: arab,
    count: 7,
  },
];

const Trophies = () => {
  return (
    <div className="py-12 px-4 md:px-12 bg-[#] h-max">
      <p         className="text-white font1 text-lg font-bold md:text-3xl text-center w-full md:px-6 py-3 rounded-lg bg-[#0c1324] w-max">

         Club Achievements 🏆
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 py-10 md:grid-cols-3 xl:grid-cols-4 gap-10 place-items-center">
        {trophies.map((trophy, idx) => (
          <div
            key={idx}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 w-72 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-yellow-500/30 shadow-xl hover:shadow-yellow-400/30 transition duration-300"
          >
            <img
              src={trophy.image}
              alt={trophy.title}
              className="w-24 h-24 object-contain mb-4"
            />
            <p className="text-white text-xl font-semibold text-center mb-2">
              {trophy.title}
            </p>
            <span className="text-red-500 text-4xl font-extrabold transition-transform duration-300 hover:scale-125">
              {trophy.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trophies;
