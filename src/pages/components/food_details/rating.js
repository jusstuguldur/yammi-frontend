import Star from "../star";

export default function Rating() {
  return (
    <div className="ml-[12%] w-[77%] py-4 flex justify-center mt-8 ">
      <div className="w-[33vw] py-4 bg-white drop-shadow-lg flex justify-center rounded-3xl">
        <div>
          <div className="text-2xl w-full text-center">Rate us:</div>
          <Star className="mt-4"></Star>
        </div>
      </div>
    </div>
  );
}
