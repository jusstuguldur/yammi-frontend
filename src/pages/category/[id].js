import Navbar from "../components/navbar";
import Food from "../components/menu/food";
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function category() {
  const [data, setData] = useState([]);

  const router = useRouter();
  const { id } = router.query;
  function getData() {
    console.log("Fetching data..");
    fetch(`${process.env.API_URL}/api/food${id ? `?category_id=${id}` : ""}`)
      .then((response) => response.json())
      .then((result) => setData(result.data));
  }

  useEffect(() => getData(), [id]);
  return (
    <div className="bg-beige w-screen pb-4">
      <Navbar></Navbar>
      <Food data={data}></Food>
      <Footer></Footer>
    </div>
  );
}
