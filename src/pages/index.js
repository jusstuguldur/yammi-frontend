import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className=" bg-beige w-screen h-[200vh]">
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
    </>
  );
}
