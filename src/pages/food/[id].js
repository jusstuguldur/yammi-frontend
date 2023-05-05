import Steps from "../components/food_details/steps2";
import Navbar from "../components/navbar";
import Comments from "../components/food_details/comments";
import Footer from "../components/footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Details2() {
  const router = useRouter();
  const { id } = router.query;

  const [food, setFood] = useState({});
  const [steps, setSteps] = useState([]);
  const [materials, setMaterial] = useState([]);

  function getData() {
    if (!id) return;
    fetch(`${process.env.API_URL}/api/food?id=${id}`)
      .then((response) => response.json())
      .then((result) => {
        setFood(result.data);
        setSteps(result.steps);
      });
  }

  function getData() {
    if (!id) return;
    fetch(`${process.env.API_URL}/api.food?id=${id}`)
      .then((response) => response.json())
      .then((result) => {
        setMaterial(result.material);
      });
  }

  useEffect(() => getData(), [id]);

  return (
    <div className="w-full bg-beige">
      <Navbar></Navbar>
      <Steps food={food} steps={steps}></Steps>
      <Comments></Comments>
      <Footer></Footer>
    </div>
  );
}
