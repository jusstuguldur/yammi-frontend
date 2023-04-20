import Navbar from "./components/navbar";
import Steps from "./components/food_detail/steps";

export default function Details() {
  return (
    <>
      <div className="w-screen bg-beige">
        <Navbar></Navbar>
        <Steps></Steps>
      </div>
    </>
  );
}
