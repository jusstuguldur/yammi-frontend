import Star from "../star";
import Materials from "./materials";
import MyVideo from "./myvideo";
import Rating from "./rating";

export default function Steps({ food, steps }) {
  return (
    <div className="w-full  flex px-12 relative py-4">
      {food ? (
        <>
          <div className="w-[20%] flex justify-center">
            <div className="bg-white w-full rounded-3xl py-4 sticky top-16 mb-10 h-fit max-h-[85vh] overflow-auto px-2 drop-shadow-lg">
              {steps &&
                steps.map((row, j) => (
                  <div key={j} className="flex mb-4 items-center ml-4 z-10">
                    <div
                      className={
                        j >= 9
                          ? ` mr-4 rounded-full bg-[#f2aa62] px-2 text-white z-10 -ml-1`
                          : ` mr-4 rounded-full bg-[#f2aa62] px-2 text-white z-10`
                      }
                    >
                      {j + 1}
                    </div>
                    <div className="">{row.name}</div>
                  </div>
                ))}
            </div>
          </div>
          {/*name status */}
          <div className="w-[77%] py-4 h-fit ml-4 flex justify-center">
            <div className="w-[80%]">
              <div className="w-full py-4 rounded-3xl bg-white drop-shadow-lg flex items-center px-4 justify-center">
                <div className="w-20 h-20 rounded-full border-2 border-white drop-shadow-lg overflow-hidden absolute left-0 translate-x-1/2">
                  <img
                    src="https://yt3.googleusercontent.com/ytc/AGIKgqPXhVvsrFYuGYL1Drs9zt0nQYuuMaM1NyL_rOJVTQ=s176-c-k-c0x00ffffff-no-rj-mo"
                    className="object-center object-cover"
                  />
                </div>
                <div className="font-pacifico text-4xl ml-28">{food.title}</div>
                <Star value={food.rating} className="mt-4 mx-8"></Star>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.2"
                  stroke="currentColor"
                  className={`w-6 h-6 mt-4 ml-8`}
                  onClick="strokeColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
              <div className="w-full flex mt-8">
                <div className="w-1/2 p-4 relative">
                  <div className="w-full h-full absolute flex justify-center">
                    <div className="w-8 h-[30%] bg-primary -mt-12"></div>
                  </div>
                  <div className="w-full rounded-full h-[60vh] border-4 border-white drop-shadow-lg overflow-hidden">
                    <img
                      src={food.img}
                      className="object-center object-cover"
                    />
                  </div>
                </div>
                <div className="w-1/2 py-4 relative">
                  <div className="w-full h-full absolute flex justify-center">
                    <div className="w-8 h-1/2 bg-primary -mt-12"></div>
                  </div>
                  <Materials></Materials>
                </div>
              </div>
              <div className="flex-col justify-center w-full">
                <MyVideo></MyVideo>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>Not found</>
      )}
    </div>
  );
}
