import Link from "next/link";
import { useEffect, useState } from "react";
import Star from "../star";

export default function Hero() {
  const [data, setData] = useState([]);

  function getData() {
    fetch(`${process.env.API_URL}/api/food`)
      .then((response) => response.json())
      .then((result) => setData(result.data));
  }

  useEffect(() => getData(), []);
  // const data = [
  //   {
  //     name: "Pizza",
  //     materials: [
  //       { name: "Гурил", color: "#FFB266" },
  //       { name: "Бяслаг", color: "#39dd00" },
  //       { name: "Хиам", color: "#FF5A50" },
  //       { name: "Давс", color: "#FF6678" },
  //       { name: "Кетчуп", color: "#FF6678" },
  //     ],
  //     duration: "40min",
  //     desc: "Lorem ipsum Lorem ipsum Lorem ipsum v Lorem ipsum Lorem ipsumLorem ipsum",
  //     background:
  //       "https://popmenucloud.com/acopktgy/a5e912c9-cf13-47c8-874c-91394bab4c5d",
  //   },
  //   {
  //     name: "Цуйван",
  //     materials: [
  //       { name: "Гурил", color: "#FFB266" },
  //       { name: "Бяслаг", color: "#39dd00" },
  //       { name: "Хиам", color: "#FF5A50" },
  //       { name: "Давс", color: "#FF6678" },
  //       { name: "Кетчуп", color: "#FF6678" },
  //     ],
  //     duration: "30m",
  //     desc: "Lorem ipsum",
  //     background:
  //       "https://upload.wikimedia.org/wikipedia/commons/2/2c/Cujwan.JPG",
  //   },
  //   {
  //     name: "Хуушуур",
  //     materials: [
  //       { name: "Гурил", color: "#FFB266" },
  //       { name: "Бяслаг", color: "#39dd00" },
  //       { name: "Хиам", color: "#FF5A50" },
  //       { name: "Давс", color: "#FF6678" },
  //       { name: "Кетчуп", color: "#FF6678" },
  //     ],
  //     duration: "40m",
  //     desc: "Lorem ipsum",
  //     background:
  //       "https://upload.wikimedia.org/wikipedia/commons/8/8d/MongoliaLastDay_153.JPG",
  //   },
  //   {
  //     name: "Жэюүг",
  //     materials: [
  //       { name: "Гурил", color: "#FFB266" },
  //       { name: "Бяслаг", color: "#39dd00" },
  //       { name: "Хиам", color: "#FF5A50" },
  //       { name: "Давс", color: "#FF6678" },
  //       { name: "Кетчуп", color: "#FF6678" },
  //     ],
  //     duration: "40m",
  //     desc: "Lorem ipsum",
  //     background:
  //       "https://carmyy.com/wp-content/uploads/2022/04/Spicy-Pork-Stir-Fry-6.jpg",
  //   },
  //   {
  //     name: "Шарсан төмс",
  //     materials: [
  //       { name: "Гурил", color: "#FFB266" },
  //       { name: "Бяслаг", color: "#39dd00" },
  //       { name: "Хиам", color: "#FF5A50" },
  //       { name: "Давс", color: "#FF6678" },
  //       { name: "Кетчуп", color: "#FF6678" },
  //     ],
  //     duration: "40m",
  //     desc: "Lorem ipsum",
  //     background:
  //       "https://img.taste.com.au/ol2Jq8ZQ/taste/2016/11/rachel-87711-2.jpeg",
  //   },
  // ];

  return (
    <div className="w-full pt-8 sticky mb-12">
      <div className="w-full h-8 text-2xl pl-[7%] mb-4 uppercase">
        Trendings
      </div>

      <div
        className="w-full justify-center items-center grid grid-cols-5 gap-2 px-24 relative"
        daa-carousel="slide"
      >
        <div className="w-full h-60 absolute top-1/2 -translate-y-1/2 bg-primary"></div>
        <div className="w-20 h-full flex justify-end items-center absolute">
          <button
            className="rounded-full w-10 h-10 bg-slate-300 z-10 flex justify-center items-center mr-2 hover:bg-slate-400"
            data-carousel-prev
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </div>

        {/* Goliin zuragnuud */}

        {data.slice(0, 5).map((row, i) => (
          <div
            key={i}
            className="w-[95%] h-full bg-white rounded-3xl drop-shadow-lg overflow-hidden py-4 px-4 relative duration-700 ease-in-out"
            data-carousel-item
          >
            <img
              src={row.img}
              alt="food"
              className="absolute h-32 object-cover object-center top-0 left-0 w-full drop-shadow-lg border-2 border-white -translate-y-4 rounded-b-full"
            />

            <div className="font-pacifico w-full h-10 text-3xl flex justify-center mt-32">
              {row.title}
            </div>
            <div className="w-full flex justify-center mt-4">
              {row.duration}mins
            </div>
            <div className="w-full grid grid-cols-3 gap-4 justify-center mt-8">
              {row.materials &&
                row.materials.map((mat, j) => (
                  <div
                    style={{ backgroundColor: mat.color }}
                    key={j}
                    className={
                      j >= 3
                        ? `px-1 h-6 rounded-full drop-shadow-md text-white flex justify-center translate-x-[65%] text-sm item-center`
                        : `px-1 h-6 rounded-full drop-shadow-md  text-white flex justify-center text-sm items-center`
                    }
                  >
                    {mat.name}
                  </div>
                ))}
            </div>
            <div className="w-full h-16 px-8 flex justify-center my-4 truncate ">
              {row.description}
            </div>

            <Link href={`/food/${row.id}`}>
              <div className="w-full py-2 bg-primary rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-red-500">
                Үргэлжлүүлэх
              </div>
            </Link>
          </div>
        ))}
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-0 -mb-8 left-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-slate-500"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-slate-500"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-slate-500"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-slate-500"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-slate-500"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>

        <div className="w-20 h-full flex justify-start items-center absolute right-0 ">
          <button
            className="rounded-full w-10 h-10 bg-slate-300 z-10 flex justify-center items-center ml-2 hover:bg-slate-400"
            data-carousel-next
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
