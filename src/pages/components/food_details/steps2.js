import Star from "../star";
import Materials from "./materials";
import MyVideo from "./myvideo";
import Rating from "./rating";

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
      { step: "Muuneeg zodon" },
      { step: "Muuneeg zodon" },
      { step: "Muuneeg zodon" },
      { step: "Muuneeg zodon" },
    ],
    profile:
      "https://yt3.googleusercontent.com/ytc/AGIKgqPXhVvsrFYuGYL1Drs9zt0nQYuuMaM1NyL_rOJVTQ=s176-c-k-c0x00ffffff-no-rj-mo",
  },
];

export default function Steps() {
  return details.map((row, i) => (
    <div className="w-full  flex px-12 relative py-4">
      <div className="w-[20%] flex justify-center">
        <div className="bg-white w-full rounded-3xl py-4 sticky top-16 mb-10 h-fit max-h-[85vh] overflow-auto px-2 drop-shadow-lg">
          {row.steps.map((alh, j) => (
            <div className="flex mb-4 items-center ml-4">
              <div
                className={
                  j >= 9
                    ? ` mr-4 rounded-full bg-[#f2aa62] px-2 text-white z-10 -ml-1`
                    : ` mr-4 rounded-full bg-[#f2aa62] px-2 text-white z-10`
                }
              >
                {j + 1}
              </div>
              <div className="">{alh.step}</div>
            </div>
          ))}
        </div>
      </div>
      {/*name status */}
      <div className="w-[77%] py-4 h-fit ml-4 flex justify-center">
        <div className="w-[80%]">
          <div className="w-full py-4 rounded-3xl bg-white drop-shadow-lg flex items-center px-4 justify-center">
            <div className="w-20 h-20 rounded-full border-2 border-white drop-shadow-lg overflow-hidden absolute left-0 translate-x-1/2">
              <img src={row.profile} className="object-center object-cover" />
            </div>
            <div className="font-pacifico text-4xl ml-28">{row.name}</div>
            <div className="mx-8 mt-4">{row.status}</div>
            <Star value={row.rating} className="mt-4 mx-8"></Star>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.2"
              stroke="currentColor"
              class="w-6 h-6 mt-4 ml-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
          <div className="w-full flex mt-8">
            <div className="w-1/2 p-4 ">
              <div className="w-full rounded-full h-[60vh] border-4 border-white drop-shadow-lg overflow-hidden">
                <img src={row.image} />
              </div>
              <div className="px-8">
                <div className="bg-white py-6 rounded-3xl overflow-hidden drop-shadow-lg mt-8 ">
                  <div className="h-8 w-full text-white bg-primary px-5 flex items-center text-base">
                    Илүү амттай болгоё гэвэл:
                  </div>
                  <div className="w-full px-4 grid grid-cols-3 gap-4 mt-4">
                    {row.materials.map((mat, j) => (
                      <div
                        className="w-full py-2 text-white rounded-3xl flex justify-center px-4  drop-shadow-lg"
                        style={{ backgroundColor: mat.color }}
                      >
                        {mat.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 py-4 ">
              <Materials></Materials>
            </div>
          </div>
          <div className="flex-col justify-center w-full">
            <MyVideo></MyVideo>
            <Rating></Rating>
          </div>
        </div>
      </div>
    </div>
  ));
}
