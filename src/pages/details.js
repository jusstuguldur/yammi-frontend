import Steps from "./components/food_details/steps2";
import Navbar from "./components/navbar";
import Comments from "./components/food_details/comments";

export default function Details2() {
  return (
    <div className="w-full bg-beige">
      <Navbar></Navbar>
      <Steps></Steps>
      <Comments></Comments>
    </div>
  );
}
