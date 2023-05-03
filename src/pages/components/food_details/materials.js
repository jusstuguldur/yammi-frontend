const materials = [
  { name: "Гурил", color: "#FFB266" },
  { name: "Бяслаг", color: "#39dd00" },
  { name: "Хиам", color: "#FF5A50" },
  { name: "Давс", color: "#FF6678" },
  { name: "Кетчуп", color: "#FF6678" },
  { name: "Будаа", color: "#FFB266" },
  { name: "Бяслаг", color: "#39dd00" },
  { name: "Хиам", color: "#FF5A50" },
  { name: "Давс", color: "#FF6678" },
  { name: "Кетчуп", color: "#FF6678" },
  { name: "Гоймон", color: "#FFB266" },
  { name: "Бяслаг", color: "#39dd00" },
  { name: "Хиам", color: "#FF5A50" },
  { name: "Давс", color: "#FF6678" },
  { name: "Кетчуп", color: "#FF6678" },
  { name: "Кетчуп", color: "#FF6678" },
];

const benefits = [
  {
    desc: "ci nmg uyraana nudeere ",
  },
  {
    desc: "cmg bi hairlana zurheere",
  },
  {
    desc: "cny tald bi biyereee ",
  },

  {
    desc: "bodoj muruuddg setgeleeree",
  },
  {
    desc: "tiim ym bnle",
  },
  {
    desc: "iim ym bnle ",
  },
  {
    desc: "tiim ym bnle",
  },
  {
    desc: "iim ym bnle ",
  },
  {
    desc: "tiim ym bnle",
  },
  {
    desc: "iim ym bnle ",
  },
  {
    desc: "goymble lovemble",
  },
  {
    desc: "tiim ym bnle",
  },
  {
    desc: "iim ym bnle ",
  },
];

export default function Materials() {
  return (
    <div className="w-full py-4 justify-center px-12">
      <div className="bg-white py-6 rounded-3xl overflow-hidden drop-shadow-lg">
        <div className="h-8 w-full text-white bg-primary px-5 flex items-center text-lg">
          Материалууд:
        </div>
        <div className="w-full px-4 grid grid-cols-3 gap-4 mt-4">
          {materials
            .sort((a, b) => (a.name < b.name ? 1 : -1))
            .map((row, i) => (
              <div
                key={i}
                className="w-full py-2 text-white rounded-3xl flex justify-center px-4  drop-shadow-lg"
                style={{ backgroundColor: row.color }}
              >
                {row.name}
              </div>
            ))}
        </div>
      </div>
      <div className="p-4 bg-white drop-shadow-lg mt-12 rounded-3xl overflow-hidden">
        <div className="text-3xl mb-4">Онцлог:</div>
        <div className="absolute right-1 -top-1 rotate-90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="currentColor"
            class="bi bi-star"
            viewBox="0 0 16 16"
            className="absolute left-[90%] -top-1 rotate-45"
          >
            {" "}
            <path
              d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
              fill="#f3da35"
            ></path>{" "}
          </svg>
        </div>
        {benefits.map((ben, i) => (
          <div className="mb-4">-{ben.desc}</div>
        ))}
      </div>
    </div>
  );
}
