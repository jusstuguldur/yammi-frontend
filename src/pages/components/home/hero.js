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
        data-carousel="slide"
      >
        <div className="w-full h-60 absolute top-1/2 -translate-y-1/2 bg-primary"></div>
        <div className="w-20 h-full flex justify-end items-center absolute">
          <button
            type="button"
            className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span className="hidden">Previous</span>
            </span>
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
        <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
        </div>

        <div className="w-20 h-full flex justify-start items-center absolute right-0 ">
          <button
            type="button"
            className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span className="hidden">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
