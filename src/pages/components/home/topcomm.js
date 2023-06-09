import { data } from "autoprefixer";
import Link from "next/link";
import Star from "../star";

export default function Topcomment() {
  const comment = [
    {
      name: "Muunee",
      comment: "Хоол таалагдлаа. Амттай байлаа",
      rating: "4.5",
      food: "Pizza",
      profile: "../muune copy.jpg",
      time: "7",
    },
    {
      name: "Muunee",
      comment: "ямар гоё юм бэ",
      rating: "4",
      food: "Pizza",
      profile: "../muune copy.jpg",
      time: "6",
    },
    {
      name: "Muunee",
      comment: "Хэрэгтэй меню байлаа баярлалаа",
      rating: "5",
      food: "Pizza",
      profile: "../muune copy.jpg",
      time: "3",
    },
    {
      name: "Muunee",
      comment: "Баярлаааааа.",
      rating: "5",
      food: "Pizza",
      profile: "../muune copy.jpg",
      time: "2",
    },
  ];
  return (
    <div className="w-full mb-24 relative">
      <div className="w-[80%] h-8 bg-primary absolute top-[12rem]"></div>
      <div className="flex absolute justify-center w-full gap-[49rem]">
        <div className="w-8 h-60 bg-primary translate-y-[90%]"></div>
        <div className="w-8 h-60 bg-primary translate-y-[90%]"></div>
      </div>
      <div className="grid grid-cols-4 gap-4 px-20">
        {comment.map((row, i) => (
          <div
            key={i}
            className="w-full h-[350px] bg-white rounded-t-[40px] relative rounded-br-[40px] drop-shadow-md p-6"
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
                <div className="pl-4">
                  <Star value={row.rating} disabled />
                </div>
              </div>
            </div>
            <div className="w-full mt-8 h-28">{row.comment}</div>
            <div className="w-full flex justify-center">
              <Link href="http://localhost:3000/food/49e5d7ce-b902-47bc-b2a3-9101cd7be2c2">
                <div className="bg-primary text-white w-40 h-10 rounded-3xl flex items-center justify-center hover:bg-red-600">
                  Try
                </div>
              </Link>
            </div>
            <div className=" text-gray-500 text-sm mt-8">
              {row.time} days ago
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
