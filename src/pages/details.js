import Navbar from "./components/navbar";
import Steps from "./components/food_detail/steps";
import Rating from "./components/food_detail/rating";
import Comments from "./components/food_detail/comments";

export default function Details() {
  return (
    <>
      <div className="w-screen bg-beige">
        <Navbar></Navbar>
        <Steps></Steps>
        <Rating></Rating>
        <Comments></Comments>
      </div>
    </>
  );
}
