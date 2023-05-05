import Head from "next/head";
import Navbar from "./components/navbar";
import Star from "./components/star";
import Link from "next/link";
import Footer from "./components/footer";

const menu = [
  {
    name: "Pizza",
    value: "4",
    image:
      "https://www.simplyrecipes.com/thmb/I4razizFmeF8ua2jwuD0Pq4XpP8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-4-82c60893fcad4ade906a8a9f59b8da9d.jpg",
    channel: "ARTGER",
    profile:
      "https://yt3.googleusercontent.com/ytc/AGIKgqPXhVvsrFYuGYL1Drs9zt0nQYuuMaM1NyL_rOJVTQ=s176-c-k-c0x00ffffff-no-rj-mo",
    status: "pepperoni",
    duration: "40mins",
    desc: "a;sldkfjdsa;lkfjsal;kfjoilgbrw;naeoivdfjba;dshlasldkfjsaldk;fjkljsaflkasdjflknv",
  },
  {
    name: "Pizza",
    value: "4",
    image:
      "https://www.simplyrecipes.com/thmb/I4razizFmeF8ua2jwuD0Pq4XpP8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-4-82c60893fcad4ade906a8a9f59b8da9d.jpg",
    channel: "ARTGER",
    profile:
      "https://yt3.googleusercontent.com/ytc/AGIKgqPXhVvsrFYuGYL1Drs9zt0nQYuuMaM1NyL_rOJVTQ=s176-c-k-c0x00ffffff-no-rj-mo",
    status: "pepperoni",
    duration: "40mins",
    desc: "a;sldkfjdsa;lkfjsal;kfjoilgbrw;naeoivdfjba;dshlasldkfjsaldk;fjkljsaflkasdjflknv",
  },
  {
    name: "Pizza",
    value: "4",
    image:
      "https://www.simplyrecipes.com/thmb/I4razizFmeF8ua2jwuD0Pq4XpP8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-4-82c60893fcad4ade906a8a9f59b8da9d.jpg",
    channel: "ARTGER",
    profile:
      "https://yt3.googleusercontent.com/ytc/AGIKgqPXhVvsrFYuGYL1Drs9zt0nQYuuMaM1NyL_rOJVTQ=s176-c-k-c0x00ffffff-no-rj-mo",
    status: "pepperoni",
    duration: "40mins",
    desc: "a;sldkfjdsa;lkfjsal;kfjoilgbrw;naeoivdfjba;dshlasldkfjsaldk;fjkljsaflkasdjflknv",
  },

  {
    name: "Pizza",
    value: "4",
    image:
      "https://www.simplyrecipes.com/thmb/I4razizFmeF8ua2jwuD0Pq4XpP8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-4-82c60893fcad4ade906a8a9f59b8da9d.jpg",
    channel: "ARTGER",
    profile:
      "https://yt3.googleusercontent.com/ytc/AGIKgqPXhVvsrFYuGYL1Drs9zt0nQYuuMaM1NyL_rOJVTQ=s176-c-k-c0x00ffffff-no-rj-mo",
    status: "pepperoni",
    duration: "40mins",
    desc: "a;sldkfjdsa;lkfjsal;kfjoilgbrw;naeoivdfjba;dshlasldkfjsaldk;fjkljsaflkasdjflknv",
  },
  {
    name: "Pizza",
    value: "4",
    image:
      "https://www.simplyrecipes.com/thmb/I4razizFmeF8ua2jwuD0Pq4XpP8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-4-82c60893fcad4ade906a8a9f59b8da9d.jpg",
    channel: "ARTGER",
    profile:
      "https://yt3.googleusercontent.com/ytc/AGIKgqPXhVvsrFYuGYL1Drs9zt0nQYuuMaM1NyL_rOJVTQ=s176-c-k-c0x00ffffff-no-rj-mo",
    status: "pepperoni",
    duration: "40mins",
    desc: "a;sldkfjdsa;lkfjsal;kfjoilgbrw;naeoivdfjba;dshlasldkfjsaldk;fjkljsaflkasdjflknv",
  },
  {
    name: "Pizza",
    value: "4",
    image:
      "https://www.simplyrecipes.com/thmb/I4razizFmeF8ua2jwuD0Pq4XpP8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-4-82c60893fcad4ade906a8a9f59b8da9d.jpg",
    channel: "ARTGER",
    profile:
      "https://yt3.googleusercontent.com/ytc/AGIKgqPXhVvsrFYuGYL1Drs9zt0nQYuuMaM1NyL_rOJVTQ=s176-c-k-c0x00ffffff-no-rj-mo",
    status: "pepperoni",
    duration: "40mins",
    desc: "a;sldkfjdsa;lkfjsal;kfjoilgbrw;naeoivdfjba;dshlasldkfjsaldk;fjkljsaflkasdjflknv",
  },
  {
    name: "Pizza",
    value: "4",
    image:
      "https://www.simplyrecipes.com/thmb/I4razizFmeF8ua2jwuD0Pq4XpP8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-4-82c60893fcad4ade906a8a9f59b8da9d.jpg",
    channel: "ARTGER",
    profile:
      "https://yt3.googleusercontent.com/ytc/AGIKgqPXhVvsrFYuGYL1Drs9zt0nQYuuMaM1NyL_rOJVTQ=s176-c-k-c0x00ffffff-no-rj-mo",
    status: "pepperoni",
    duration: "40mins",
    desc: "a;sldkfjdsa;lkfjsal;kfjoilgbrw;naeoivdfjba;dshlasldkfjsaldk;fjkljsaflkasdjflknv",
  },
  {
    name: "Pizza",
    value: "4",
    image:
      "https://www.simplyrecipes.com/thmb/I4razizFmeF8ua2jwuD0Pq4XpP8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-4-82c60893fcad4ade906a8a9f59b8da9d.jpg",
    channel: "ARTGER",
    profile:
      "https://yt3.googleusercontent.com/ytc/AGIKgqPXhVvsrFYuGYL1Drs9zt0nQYuuMaM1NyL_rOJVTQ=s176-c-k-c0x00ffffff-no-rj-mo",
    status: "pepperoni",
    duration: "40mins",
    desc: "a;sldkfjdsa;lkfjsal;kfjoilgbrw;naeoivdfjba;dshlasldkfjsaldk;fjkljsaflkasdjflknv",
  },
];

const ingeredients = [
  {
    name: "Гурил",
    color: "#FFB266",
  },
];
const searches = [
  {
    name: "Гурил",
    color: "#FFB266",
  },
  {
    name: "Бяслаг",
    color: "#39dd00",
  },
  { name: "Хиам", color: "#FF5A50" },
  { name: "Давс", color: "#FF6678" },
  {
    name: "Гурил",
    color: "#FFB266",
  },
  {
    name: "Бяслаг",
    color: "#39dd00",
  },
  { name: "Хиам", color: "#FF5A50" },
  { name: "Давс", color: "#FF6678" },
  {
    name: "Гурил",
    color: "#FFB266",
  },
  {
    name: "Бяслаг",
    color: "#39dd00",
  },
  { name: "Хиам", color: "#FF5A50" },
  { name: "Давс", color: "#FF6678" },
  {
    name: "Гурил",
    color: "#FFB266",
  },
  {
    name: "Бяслаг",
    color: "#39dd00",
  },
  { name: "Хиам", color: "#FF5A50" },
  { name: "Давс", color: "#FF6678" },
  {
    name: "Бяслаг",
    color: "#39dd00",
  },
  { name: "Хиам", color: "#FF5A50" },
  { name: "Давс", color: "#FF6678" },
  {
    name: "Гурил",
    color: "#FFB266",
  },
  {
    name: "Бяслаг",
    color: "#39dd00",
  },
  { name: "Хиам", color: "#FF5A50" },
  { name: "Давс", color: "#FF6678" },
];

export default function Search() {
  return (
    <div className="bg-beige">
      <Navbar></Navbar>
      <div className="mt-8 ml-24 flex items-center gap-x-4 justify-center">
        <input
          className="w-1/2 px-4 py-2 bg-slate-200 rounded-2xl drop-shadow-lg border-2 border-white"
          placeholder="Танд ямар материал байна?"
        ></input>
        <button className="w-12 h-12 bg-primary rounded-full drop-shadow-lg flex justify-center items-center  border-2 border-white hover:bg-red-600">
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
        <div className="w-full bg-white drop-shadow-lg rounded-2xl overflow-hidden">
          <div className="w-full h-8 bg-primary my-4 text-white pl-12 flex items-center">
            Таны сонгосон:
          </div>
          <div className="grid grid-cols-10 px-12 gap-4 p-4">
            {ingeredients.map((mat, j) => (
              <div
                key={j}
                className="w-full py-1 drop-shadow-lg text-center rounded-3xl text-white"
                style={{ backgroundColor: mat.color }}
              >
                {mat.name}
              </div>
            ))}
          </div>
          <div className="w-full h-8 bg-amber-300 my-4 text-white pl-12 flex items-center">
            Танд:
          </div>
          <div className="grid grid-cols-10 px-12 gap-4 p-4">
            {searches.map((ser, j) => (
              <div
                key={j}
                className="w-full py-1 drop-shadow-lg text-center rounded-3xl text-white"
                style={{ backgroundColor: ser.color }}
              >
                {ser.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-3 gap-8 px-32 mt-16">
        {menu.map((row, i) => (
          <div
            key={i}
            className="w-full p-4 bg-white drop-shadow-lg rounded-3xl overflow-hidden relative"
          >
            <div className="rounded-full border-2 border-white drop-shadow-lg w-64 h-64 -translate-x-1/2 -translate-y-1/2 overflow-hidden absolute">
              <img src={row.image}></img>
            </div>
            <div className="w-full flex justify-center">
              <div className="ml-[40%]">
                <div className="flex items-center  justify-center">
                  <img
                    src={row.profile}
                    className="w-12 rounded-full border-2 drop-shadow-sm mr-2"
                  ></img>
                  <div className="font-semibold text-xs">{row.channel}</div>
                </div>
                <div className=" w-1/2 flex mt-2 items-center">
                  <div className="font-pacifico mr-2 text-3xl first-letter:uppercase">
                    {row.name}
                  </div>
                  <div className="mt-3">({row.status})</div>
                </div>
                <div className="w-full flex justify-center">
                  <Star value={row.value}></Star>
                </div>
                <div className="w-full text-center mt-2">{row.duration}</div>
              </div>
            </div>
            <div className="w-full  text-center mt-4 break-all">{row.desc}</div>
            <Link href="/details">
              <div className="w-[80%] py-2 bg-primary text-white text-center rounded-3xl ml-[10%] mt-4 hover:bg-red-600">
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
