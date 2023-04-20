export default function Interest() {
  return (
    <div className="w-full">
      <div className="flex absolute justify-center w-full gap-[49rem]">
        <div className="w-8 h-48 bg-primary "></div>
        <div className="w-8 h-48 bg-primary"></div>
      </div>
      <div className="w-full flex justify-center absolute pt-96">
        <div className="w-8 h-48 bg-primary "></div>
      </div>
      <div className="w-full flex items-center justify-center py-16 ">
        <div className="w-96 h-96 rounded-full bg-white drop-shadow-lg z-10 border-4 border-gray-300 overflow-hidden object-cover object-center">
          <img
            src="https://cookieandkate.com/images/2020/12/rosemary-roasted-potatoes-recipe.jpg"
            alt=""
            className=""
          ></img>
        </div>
        <div className="w-[45rem] h-64 rounded-r-full bg-white drop-shadow-lg -ml-16 flex justify-center py-10">
          <div className="">
            <div className=" text-2xl font-bold text-center">Did you know?</div>
            <div className="text-2xl  px-12 text-center mt-4">
              Potatoes were the first food planted in space.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
