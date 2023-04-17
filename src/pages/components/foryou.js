const foryou = [{}];

export default function ForYou() {
  return (
    <div>
      <div className="w-full h-8 text-2xl pl-[7%] mb-4 uppercase">for you</div>
      <div className="w-full flex justify-center">
        <div className="w-8 h-[1100px] bg-primary absolute z-0 "></div>
        <div className="z-10 w-full pl-[15%]">
          <div className=" w-[80%] h-96 bg-white rounded-3xl drop-shadow-lg overflow-hidden flex">
            <img
              src="https://admin.acceleratingscience.com/food/wp-content/uploads/sites/5/2020/10/istock-694177316_varietycookedmeats-1.jpg"
              className="w-[49.85%] h-full object-cover object-center"
            />
            <div className="w-[50.15%] h-full"></div>
          </div>
          <div className=" w-[80%] h-96 bg-white rounded-3xl mt-8 drop-shadow-lg justify-end flex overflow-hidden">
            <div className="w-[53.1%] h-full "></div>
            <img
              src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/05/healthy-foods.jpg?quality=82&strip=1"
              className="w-[46.9%] h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
