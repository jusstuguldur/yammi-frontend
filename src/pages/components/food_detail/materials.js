const materials = [
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
  { name: "Кетчуп", color: "#FF6678" },
];

const benefits = [
  {
    desc: "iim ym bnle tym bnle",
  },
  {
    desc: "iim ym bnle tym bnle",
  },
  {
    desc: "gy ym bnle lovemble",
  },
];

export default function Materials() {
  return (
    <div className="w-full py-4 justify-center">
      <div className="bg-white py-6 rounded-3xl overflow-hidden drop-shadow-lg ml-40">
        <div className="h-8 w-full text-white bg-primary px-5 flex items-center">
          Материалууд:
        </div>
        <div className="w-full px-4 grid grid-cols-3 gap-4 mt-4">
          {materials.map((row, i) => (
            <div
              className="w-full py-2 text-white rounded-3xl flex justify-center px-4  drop-shadow-lg"
              style={{ backgroundColor: row.color }}
            >
              {row.name}
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 bg-white drop-shadow-lg ml-40 mt-12 rounded-3xl">
        <div className="text-3xl mb-4">Онцлог:</div>
        {benefits.map((ben, i) => (
          <div className="mb-4">-{ben.desc}</div>
        ))}
      </div>
    </div>
  );
}
