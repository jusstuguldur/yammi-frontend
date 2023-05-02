import Navbar from "./components/navbar";
import Food from "./components/menu/food";
import Footer from "./components/footer";

export default function Menu() {
  return (
    <div className="bg-beige w-screen pb-4">
      <Navbar></Navbar>
      <Food></Food>
      <Footer></Footer>
    </div>
  );
}
