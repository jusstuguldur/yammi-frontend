import Head from "next/head";
import Navbar from "./components/navbar";
import Star from "./components/star";
import Link from "next/link";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Search() {
  const [materialCategory, setMaterialCategory] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedIds, setSelectedIds] = useState([]);
  const [foods, setFoods] = useState([]);

  function getMaterialCat() {
    fetch(`${process.env.API_URL}/api/materialcategory`)
      .then((response) => response.json())
      .then((result) => {
        setMaterialCategory(result.data);
      });
  }

  function getMaterialList() {
    fetch(`${process.env.API_URL}/api/foodbymaterials`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        materials: selectedIds.map((a) => a.id),
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        setFoods(result.data);
      });
  }

  function getMaterials() {
    if (!selectedCategory) return;
    fetch(
      `${process.env.API_URL}/api/material?material_category_id=${selectedCategory}`
    )
      .then((response) => response.json())
      .then((result) => {
        setMaterials(result.data);
      });
  }
  const router = useRouter();

  useEffect(() => getMaterialCat(), []);

  useEffect(() => getMaterials(), [selectedCategory]);
  return (
    <div className="bg-beige">
      <Navbar></Navbar>
      <div className="mt-8 ml-24 flex items-center gap-x-4 justify-center">
        <input
          className="w-1/2 px-4 py-2 bg-slate-200 rounded-2xl drop-shadow-lg border-2 border-white"
          placeholder="Танд ямар материал байна?"
        ></input>
        <button
          onClick={() => getMaterialList()}
          className="w-12 h-12 bg-primary rounded-full drop-shadow-lg flex justify-center items-center  border-2 border-white hover:bg-red-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      <div className="w-full flex justify-center py-4 items-center px-24">
        <div className="absolute w-full h-8 bg-primary"></div>
        <div className="w-full bg-white drop-shadow-lg rounded-2xl overflow-hidden flex">
          <div className="w-2/3">
            <div className="flex px-12 gap-4 p-4 w-full">
              {materialCategory &&
                materialCategory.map((row, j) => (
                  <button
                    onClick={() => setSelectedCategory(row.id)}
                    key={j}
                    className={`w-full py-1 drop-shadow-lg text-center rounded-3xl text-white bg-primary ${
                      selectedCategory == row.id ? " mix-blend-luminosity" : ""
                    }`}
                  >
                    {row.name}
                  </button>
                ))}
            </div>
            <div className="w-full h-8 bg-amber-800 my-4 text-white pl-14 flex items-center">
              Материалууд:
            </div>
            <div className="grid grid-cols-6 px-12 gap-4 p-4">
              {materials &&
                materials.map((row, j) => (
                  <button
                    key={j}
                    onClick={() => {
                      if (selectedIds.map((a) => a.id).includes(row.id)) {
                        setSelectedIds(
                          selectedIds.filter((a) => a.id != row.id)
                        );
                      } else
                        setSelectedIds([
                          ...selectedIds,
                          { id: row.id, name: row.name, color: row.color },
                        ]);
                    }}
                    className="w-full py-1 drop-shadow-lg text-center rounded-3xl text-white"
                    style={{
                      backgroundColor: selectedIds
                        .map((a) => a.id)
                        .includes(row.id)
                        ? "#d9d9d9"
                        : row.color,
                    }}
                  >
                    {row.name}
                  </button>
                ))}
            </div>
          </div>
          <div className="w-1/3 border border-primary rounded m-2 relative flex flex-col-reverse">
            <div className="absolute top-2 left-1/2 -translate-x-1/2  text-sm">
              Таны сонгосон материалууд
            </div>
            <div className="grid grid-cols-4 w-full gap-2 p-2">
              {selectedIds.map((row, i) => (
                <div
                  key={i}
                  style={{ backgroundColor: row.color }}
                  className="flex items-center w-full justify-center rounded-full text-white"
                >
                  {row.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-3 gap-8 px-32 mt-16">
        {foods &&
          foods.map((row, i) => (
            <div
              key={i}
              className="w-full p-4 bg-white drop-shadow-lg rounded-3xl overflow-hidden relative"
            >
              <div className="rounded-full border-2 border-white drop-shadow-lg w-64 h-64 -translate-x-1/2 -translate-y-1/2 overflow-hidden absolute">
                <img src={row.img}></img>
              </div>
              <div className="w-full flex justify-center">
                <div className="ml-[40%]">
                  <div className="flex items-center  justify-center">
                    <img
                      src={row.profile}
                      className="w-12 rounded-full border-2 drop-shadow-sm mr-2 object-cover object-center"
                    ></img>
                    <div className="font-semibold text-xs">{row.channel}</div>
                  </div>
                  <div className=" w-1/2 flex mt-2 items-center">
                    <div className="font-pacifico mr-2 text-3xl first-letter:uppercase mb-2">
                      {row.title}
                    </div>
                  </div>
                  <div className="w-full flex justify-center">
                    <Star value={row.value}></Star>
                  </div>
                  <div className="w-full text-center mt-2">
                    {row.duration}mins
                  </div>
                </div>
              </div>
              <div className="w-full  text-center mt-4 break-all">
                {row.desc}
              </div>
              <Link href={`/food/${row.id}`}>
                <div className="w-[80%] py-2 bg-primary text-white text-center rounded-3xl ml-[10%] mt-8 hover:bg-red-600">
                  Үргэлжлүүлэх
                </div>
              </Link>
            </div>
          ))}
      </div>
      <Footer></Footer>
    </div>
  );
}
