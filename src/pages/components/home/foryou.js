import Link from "next/link";

const foryou = [
  {
    value: 5,
    desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum lorem ipsum ",
    category: "Европ хоол",
    image:
      "https://admin.acceleratingscience.com/food/wp-content/uploads/sites/5/2020/10/istock-694177316_varietycookedmeats-1.jpg",
  },
];

export default function ForYou() {
  return (
    <div>
      <div className="w-full h-8 text-2xl pl-[7%] mb-4 uppercase">for you</div>
      <div className="w-full flex justify-center">
        <div className="w-8 h-[70vh] bg-primary absolute z-0 "></div>
        <div className="z-10 w-full pl-[15%]">
          {foryou.map((row, i) => (
            <Link
              href="http://localhost:3000/category/2ba056b9-cb23-4b69-803e-6f4ee4b6f3aa"
              key={i}
            >
              <div className=" w-[80%] h-96 bg-white rounded-3xl drop-shadow-lg overflow-hidden flex mb-8 justify-between">
                <img
                  src={row.image}
                  className={`w-1/2 h-full object-cover object-center ${
                    i % 2 == 1 ? "w-1/2" : ""
                  }`}
                />
                <div
                  className={`w-1/2 h-full px-8 py-4 ${
                    i % 2 == 0 ? "" : "-order-1 w-1/2"
                  }`}
                >
                  <div className="w-full uppercase">collection</div>
                  <div className="uppercase text-2xl mt-4 font-semibold">
                    Танд {row.value} шилдэг {row.category} санал болгож байна
                  </div>
                  <div className="mt-4">{row.desc}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
