import { Architects_Daughter } from "next/font/google";

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
    <div className="w-full flex justify-center mt-40">
      <div className="w-full h-8 text-2xl pl-[7%] mb-4 uppercase">channels</div>
      <div className="h-8 w-[60%] bg-primary absolute mt-40"></div>
      <div className="grid grid-cols-3 gap-8 absolute">
        {channels.map((row, i) => (
          <div key={i} className="bg-white w-80 py-4 rounded-3xl mt-40">
            <img
              src={row.profile}
              className="w-24 rounded-full left-1/2 translate-x-1/2 tr"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
