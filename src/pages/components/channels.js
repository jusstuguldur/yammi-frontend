import { Architects_Daughter, Rowdies } from "next/font/google";
import Star from "./star";

const channels = [
  {
    name: "Artger",
    rating: 3,
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    profile:
      "https://yt3.googleusercontent.com/ytc/AGIKgqPXhVvsrFYuGYL1Drs9zt0nQYuuMaM1NyL_rOJVTQ=s176-c-k-c0x00ffffff-no-rj-mo",
  },
  {
    name: "Artger",
    rating: 3,
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    profile:
      "https://yt3.googleusercontent.com/ytc/AGIKgqPXhVvsrFYuGYL1Drs9zt0nQYuuMaM1NyL_rOJVTQ=s176-c-k-c0x00ffffff-no-rj-mo",
  },
  {
    name: "Artger",
    rating: 3,
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    profile:
      "https://yt3.googleusercontent.com/ytc/AGIKgqPXhVvsrFYuGYL1Drs9zt0nQYuuMaM1NyL_rOJVTQ=s176-c-k-c0x00ffffff-no-rj-mo",
  },
];

export default function Channels() {
  return (
    <div className="w-full flex flex-col justify-center mt-28 ">
      <div className="w-full h-8 text-2xl pl-[7%] mb-4 uppercase">channels</div>

      <div className="grid grid-cols-3 gap-8 relative w-full mt-16 left-1/2 -translate-x-1/2 px-28">
        <div className="h-8 w-[60%] bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        {channels.map((row, i) => (
          <div
            key={i}
            className="w-full  bg-white rounded-[20%] drop-shadow-md p-6 text-center"
          >
            <img
              src={row.profile}
              className="w-24 rounded-full inline-block -translate-y-2/3 border-2 border-white drop-shadow-lg"
            />
            <div className="-mt-12 font-semibold">{row.name}</div>
            <Star disabled value={row.rating} className=""></Star>
            <div className="mt-8">{row.desc}</div>
            <div className="w-full py-4 bg-primary rounded-3xl text-white mt-8">
              Үргэлжлүүлэх
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
