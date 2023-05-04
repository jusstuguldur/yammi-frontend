import Star from "../star";
import Link from "next/link";
import { Londrina_Sketch } from "next/font/google";

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

export default function Food() {
  return (
    <div className="w-full grid grid-cols-3 gap-8 px-32 mt-16">
      {menu.map((row, i) => (
        <div className="w-full p-4 bg-white drop-shadow-lg rounded-3xl overflow-hidden relative">
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
            <div className="w-[80%] py-2 bg-primary text-white text-center rounded-3xl ml-[10%] mt-4">
              Үргэлжлүүлэх
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
