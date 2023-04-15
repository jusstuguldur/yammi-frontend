import { data } from "autoprefixer";
import Link from "next/link";

export default function Topcomment() {
  const comment = [
    {
      name: "Muunee",
      comment: "bla bla bla bla",
      rating: "5",
      food: "Pizza",
      profile: "../muune copy.jpg",
      time: "69 days ago",
    },
    {
      name: "Muunee",
      comment: "bla bla bla bla",
      rating: "4",
      food: "Pizza",
      profile: "../muune copy.jpg",
      time: "69 days ago",
    },
    {
      name: "Muunee",
      comment: "bla bla bla bla",
      rating: "3",
      food: "Pizza",
      profile: "../muune copy.jpg",
      time: "69 days ago",
    },
  ];
  return (
    <div className="w-full h-screen relative">
      <div className="w-[80%] h-8 bg-primary absolute top-[25%]"></div>
      <div className="flex gap-4 px-28">
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
            <div className=" text-gray-500 text-sm mt-4">{row.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
