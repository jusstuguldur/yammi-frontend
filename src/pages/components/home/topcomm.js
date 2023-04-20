import { data } from "autoprefixer";
import Link from "next/link";
import Star from "../star";

export default function Topcomment() {
  const comment = [
    {
      name: "Muunee",
      comment: "bla bla bla bla",
      rating: "2",
      food: "Pizza",
      profile: "../muune copy.jpg",
      time: "69",
    },
    {
      name: "Muunee",
      comment: "bla bla bla bla",
      rating: "1",
      food: "Pizza",
      profile: "../muune copy.jpg",
      time: "69",
    },
    {
      name: "Muunee",
      comment: "bla bla bla bla",
      rating: "5",
      food: "Pizza",
      profile: "../muune copy.jpg",
      time: "69",
    },
  ];
  return (
    <div className="w-full mb-24 relative">
      <div className="w-[80%] h-8 bg-primary absolute top-[12rem]"></div>
      <div className="flex absolute justify-center w-full gap-[49rem]">
        <div className="w-8 h-60 bg-primary translate-y-[90%]"></div>
        <div className="w-8 h-60 bg-primary translate-y-[90%]"></div>
      </div>
      <div className="grid grid-cols-3 gap-4 px-28">
        {comment.map((row, i) => (
          <div
            key={i}
            className="w-full h-[350px] bg-white rounded-t-[20%] relative rounded-br-[20%] drop-shadow-md p-6"
          >
            <div className="flex w-full">
              <img
                src={row.profile}
                alt="profile"
                className="rounded-full h-12 w-12 drop-shadow-md object-cover object-center bg-black"
              />
              <div>
                <div className="flex pl-4">
                  <div className="mr-1 text-primary">{row.name}</div>
                  <div className="mr-1">reviewed</div>
                  <div className="text-primary">{row.food}</div>
                </div>
                <Star value={row.rating} disabled />
                {/* {row.rating.map((star, j<=5) => (
                  <div className="h-2 w-2 bg-black"></div>
                ))} */}
              </div>
            </div>
            <div className="w-full mt-8 h-28">{row.comment}</div>
            <div className="w-full flex justify-center">
              <div className="bg-primary text-white w-40 h-10 rounded-3xl flex items-center justify-center">
                Try
              </div>
            </div>
            <div className=" text-gray-500 text-sm mt-4">
              {row.time} days ago
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
