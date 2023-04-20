import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "./components/navbar";
import Hero from "./components/home/hero";
import Topcomment from "./components/home/topcomm";
import Link from "next/link";
import Interest from "./components/home/interest";
import Footer from "./components/footer";
import ForYou from "./components/home/foryou";
import Channels from "./components/home/channels";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className=" bg-beige w-screen ">
        <Navbar></Navbar>
        <Hero></Hero>
        <div className="w-full h-8 text-2xl pl-[7%] mb-4 uppercase">
          Commentors
        </div>
        <Topcomment></Topcomment>
        <Interest></Interest>
        <ForYou></ForYou>
        <Channels></Channels>
        <Footer></Footer>
      </div>
    </>
  );
}
