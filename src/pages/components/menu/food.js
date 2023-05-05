import Star from "../star";
import Link from "next/link";
import { Londrina_Sketch } from "next/font/google";
import { useState, useEffect } from "react";

export default function Food({ data }) {
  return (
    <div className="w-full grid grid-cols-3 gap-8 px-32 mt-16">
      {data &&
        data.map((row, i) => (
          <div
            key={i}
            className="w-full p-4 bg-white drop-shadow-lg rounded-3xl overflow-hidden relative"
          >
            <div className="rounded-full border-2 border-white drop-shadow-lg w-64 h-64 -translate-x-1/2 -translate-y-1/2 overflow-hidden absolute">
              <img
                src={row.img}
                className="object-cover object-right-bottom"
              ></img>
            </div>
            <div className="w-full flex justify-center">
              <div className="ml-[40%]">
                <div className=" w-1/2 flex mt-2 items-center">
                  <div className="font-pacifico mr-2 text-3xl first-letter:uppercase">
                    {row.title}
                  </div>
                </div>
                <div className="w-full flex justify-center">
                  <Star value={row.rating} className="mt-2"></Star>
                </div>
                <div className="w-full text-center mt-2">
                  {row.duration}mins
                </div>
              </div>
            </div>
            <div className="bottom-0 w-full">
              <div className="w-full  text-center mt-4 break-all">
                {row.description}
              </div>
              <Link href={`/food/${row.id}`}>
                <div className="w-[80%] py-2 bg-primary text-white text-center rounded-3xl ml-[10%] mt-4 hover:bg-red-600">
                  Үргэлжлүүлэх
                </div>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}
