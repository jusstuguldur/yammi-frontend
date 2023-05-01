const foryou = [
  {
    value: 69,
    desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum lorem ipsum ",
    category: "meat",
    image:
      "https://admin.acceleratingscience.com/food/wp-content/uploads/sites/5/2020/10/istock-694177316_varietycookedmeats-1.jpg",
  },
  {
    value: 69,
    desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum lorem ipsum ",
    category: "healthy",
    image:
      "https://www.eatthis.com/wp-content/uploads/sites/4/2021/05/healthy-foods.jpg?quality=82&strip=",
  },
];

export default function ForYou() {
  return (
    <div>
      <div className="w-full h-8 text-2xl pl-[7%] mb-4 uppercase">for you</div>
      <div className="w-full flex justify-center">
        <div className="w-8 h-[1100px] bg-primary absolute z-0 "></div>
        <div className="z-10 w-full pl-[15%]">
          {foryou.map((row, i) => (
            <div className=" w-[80%] h-96 bg-white rounded-3xl drop-shadow-lg overflow-hidden flex mb-8 justify-between">
              <img
                src={row.image}
                className={`w-[49.85%] h-full object-cover object-center ${
                  i % 2 == 1 ? "w-[46.9%]" : ""
                }`}
              />
              <div
                className={`w-[50.15%] h-full px-8 py-4 ${
                  i % 2 == 0 ? "" : "-order-1"
                }`}
              >
                <div className="w-full uppercase">collection</div>
                <div className="uppercase text-2xl mt-4 font-semibold">
                  {row.value} best {row.category} foods recipes
                </div>
                <div className="mt-4">{row.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
