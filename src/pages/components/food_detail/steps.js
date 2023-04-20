import Star from "../star";

const details = [
  {
    name: "steak",
    duration: "50 minutes",
    materials: [
      { name: "Гурил", color: "#FFB266" },
      { name: "Бяслаг", color: "#39dd00" },
      { name: "Хиам", color: "#FF5A50" },
      { name: "Давс", color: "#FF6678" },
      { name: "Кетчуп", color: "#FF6678" },
      { name: "Гурил", color: "#FFB266" },
      { name: "Бяслаг", color: "#39dd00" },
      { name: "Хиам", color: "#FF5A50" },
      { name: "Давс", color: "#FF6678" },
      { name: "Кетчуп", color: "#FF6678" },
      { name: "Гурил", color: "#FFB266" },
      { name: "Бяслаг", color: "#39dd00" },
      { name: "Хиам", color: "#FF5A50" },
      { name: "Давс", color: "#FF6678" },
      { name: "Кетчуп", color: "#FF6678" },
    ],
    image:
      "https://www.seriouseats.com/thmb/WzQz05gt5witRGeOYKTcTqfe1gs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/butter-basted-pan-seared-steaks-recipe-hero-06-03b1131c58524be2bd6c9851a2fbdbc3.jpg",
    rating: "3",
    status: "medium rare",
    steps: [
      { step: "Muuneeg zodon" },
      { step: "Muuneeg zodon" },
      { step: "Muuneeg zodon" },
      { step: "Muuneeg zodon" },
      { step: "Muuneeg zodon" },
      { step: "Muuneeg zodon" },
      { step: "Muuneeg zodon" },
    ],
  },
];

export default function Steps() {
  return details.map((row, i) => (
    <div className="w-full py-6 flex">
      <div className="w-[35%] py-10 flex items-center">
        <img
          src={row.image}
          className="rounded-full border-4 border-white h-[30rem] w-[30rem] -ml-16 drop-shadow-lg object-cover object-center  "
        />
      </div>
      <div className="w-[65%] h-fit flex justify-center">
        <div className="w-[75%] py-2 bg-black"></div>
      </div>
    </div>
  ));
}
