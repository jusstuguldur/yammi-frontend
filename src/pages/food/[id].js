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
  const [materials, setMaterials] = useState([]);

  function getData() {
    if (!id) return;
    fetch(`${process.env.API_URL}/api/food?id=${id}`)
      .then((response) => response.json())
      .then((result) => {
        setFood(result.data);
        setSteps(result.steps);
        setMaterials(result.materials);
      });
  }

  useEffect(() => getData(), [id]);

  return (
    <div className="w-full bg-beige">
      <Navbar></Navbar>
      <Steps food={food} steps={steps} materials={materials}></Steps>
      <Comments></Comments>
      <Footer></Footer>
    </div>
  );
}
