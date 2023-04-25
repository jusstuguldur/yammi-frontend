import Star from "../star";

const details = [
  {
    name: "Steak",
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
      {
        step: "Muuneeg zodon Muuneeg zodon",
      },
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
    <div className="w-full">
      {/* tutorial*/}
      <div className="w-[23%] flex justify-center py-4 fixed h-screen">
        <div className="absolute w-8 h-[30%] bg-primary -mt-8"></div>
        <div className="w-[85%] bg-white p-8 rounded-[40px] z-10 flex drop-shadow-lg h-fit">
          <div className="h-[80%] w-2 bg-gradient-to-b from-transparent via-primary to-transparent ml-2  absolute top-1/2 -translate-y-1/2"></div>
          <div>
            {row.steps.map((alh, j) => (
              <div className="flex mb-2 items-center">
                <div className=" mr-4 rounded-full bg-[#f2aa62] px-2 text-white z-10">
                  {j + 1}
                </div>
                <div className="text-lg">{alh.step}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*name videos and others */}
      <div className="w-[77%] py-4"></div>
    </div>
  ));
}
