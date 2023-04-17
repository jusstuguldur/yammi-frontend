export default function Navbar() {
  return (
    <div className="w-full h-12 sticky z-20 top-0 flex items-center bg-beige">
      <div className="w-full h-8 bg-primary absolute"></div>
      <div className="w-full z-10 flex  items-center justify-between">
        <div className="flex w-[75%]">
          <div className="font-pacifico bg-white w-32 h-12 items-center justify-center text-3xl rounded-3xl ml-24 drop-shadow-lg hover:bg-slate-200 xl:flex hidden">
            <a href="../index.js">Yammi</a>
          </div>

          <div className="bg-white ml-1 h-12 grid-cols-6 w-[70%] rounded-3xl drop-shadow-lg gap-7 px-10 relative items-center justify-center xl:flex hidden ">
            <div className=" uppercase text-lg">recipes</div>
            <div className="  uppercase text-lg">popular</div>
            <div className=" uppercase text-lg">meat</div>
            <div className=" uppercase text-lg">healthy</div>
            <div className="uppercase text-lg">holidays</div>
            <div className=" uppercase text-lg">sharefood</div>
          </div>
          <div className="bg-white h-12 w-32 rounded-r-full drop-shadow-lg mr-1 flex justify-center items-center hover:bg-slate-200 xl:hidden grid-cols-2 gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <div className="font-pacifico ">Yammi</div>
          </div>
        </div>
        <div className="bg-white grid-cols-3 gap-8 w-72 h-12 drop-shadow-lg rounded-l-full items-center justify-center pl-2 xl:flex hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
          <div className="bg-primary w-28 h-10 rounded-full drop-shadow-lg flex items-center justify-center text-white">
            Нэвтрэх
          </div>
        </div>
        <div className=" w-60 h-12 drop-shadow-lg rounded-l-full items-center justify-center px-1 flex grid-cols-2 gap-6 bg-white xl:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <div className="bg-primary w-20 h-10 rounded-full drop-shadow-lg flex items-center justify-center text-white">
            Нэвтрэх
          </div>
        </div>
      </div>
    </div>
  );
}
