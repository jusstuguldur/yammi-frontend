const details = [
  {
    name: "Steak",
    duration: "50 minutes",
    materials: [
      { name: "Гурил", color: "#FFB266" },
      { name: "Бяслаг", color: "#39dd00" },
      { name: "Хиам", color: "#FF5A50" },
      { name: "Давс", color: "#FF6678" },
      { name: "Гурил", color: "#FFB266" },
      { name: "Бяслаг", color: "#39dd00" },
      { name: "Хиам", color: "#FF5A50" },
      { name: "Давс", color: "#FF6678" },
    ],
    image:
      "https://natashaskitchen.com/wp-content/uploads/2020/03/Pan-Seared-Steak-4.jpg",
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
      { step: "Muuneeg zodon" },

      { step: "Muuneeg zodon" },
      { step: "Muuneeg zodon" },

      { step: "Muuneeg zodon" },
      { step: "Muuneeg zodon" },
      { step: "Muuneeg zodon" },
      { step: "Muuneeg zodon" },
    ],
    profile:
      "https://yt3.googleusercontent.com/ytc/AGIKgqPXhVvsrFYuGYL1Drs9zt0nQYuuMaM1NyL_rOJVTQ=s176-c-k-c0x00ffffff-no-rj-mo",
  },
];

export default function Steps2() {
  return details.map((row, i) => <div></div>);
}
