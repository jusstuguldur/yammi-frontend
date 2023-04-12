export default function Hero() {
  const data = [
    {
      name: "Pizza",
      materials: [
        { name: "Гурил", color: "beige" },
        { name: "Сонгино", color: "nogoo" },
        { name: "Гурил", color: "#ff8877" },
        { name: "Гурил", color: "#ff8877" },
        { name: "Гурил", color: "#ff8877" },
      ],
      duration: "40min",
      desc: "Lorem ipsum",
      background:
        "https://popmenucloud.com/acopktgy/a5e912c9-cf13-47c8-874c-91394bab4c5d",
    },
    {
      name: "Цуйван",
      materials: [
        { name: "Гурил", color: "#ff8877" },
        { name: "Гурил", color: "#ff8877" },
        { name: "Гурил", color: "#ff8877" },
        { name: "Гурил", color: "#ff8877" },
        { name: "Гурил", color: "#ff8877" },
      ],
      duration: "30m",
      desc: "Lorem ipsum",
      background:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftarasmulticulturaltable.com%2Ftsuivan-mongolian-noodles%2F&psig=AOvVaw07KVYqpEZpILRNhmP8IwJK&ust=1681258845037000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCexbPHoP4CFQAAAAAdAAAAABAL",
    },
    {
      name: "Pizza",
      materials: [
        { name: "Гурил", color: "#ff8877" },
        { name: "Гурил", color: "#ff8877" },
        { name: "Гурил", color: "#ff8877" },
        { name: "Гурил", color: "#ff8877" },
        { name: "Гурил", color: "#ff8877" },
      ],
      duration: "40m",
      desc: "Lorem ipsum",
      background: "",
    },
    {
      name: "Pizza",
      materials: [
        { name: "Гурил", color: "#ff8877" },
        { name: "Гурил", color: "#ff8877" },
        { name: "Гурил", color: "#ff8877" },
        { name: "Гурил", color: "#ff8877" },
        { name: "Гурил", color: "#ff8877" },
      ],
      duration: "40m",
      desc: "Lorem ipsum",
      background: "",
    },
    {
      name: "Pizza",
      materials: [
        { name: "Гурил", color: "#ff8877" },
        { name: "Гурил", color: "#ff8877" },
        { name: "Гурил", color: "#ff8877" },
        { name: "Гурил", color: "#ff8877" },
        { name: "Гурил", color: "#ff8877" },
      ],
      duration: "40m",
      desc: "Lorem ipsum",
      background: "",
    },
  ];

  return (
    <div className="w-full h-[95vh] pt-8 sticky">
      <div className="w-full h-8 text-2xl pl-[7%] mb-4 uppercase">
        Trendings
      </div>

      <div className="w-full justify-center items-center grid grid-cols-5 gap-2 px-24 relative">
        <div className="w-full h-60 absolute top-1/2 -translate-y-1/2 bg-primary"></div>
        <div className="w-20 h-full flex justify-end items-center absolute">
          <div className="rounded-full w-10 h-10 bg-slate-300 z-10 flex justify-center items-center mr-2">
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
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
        </div>

        {/* Goliin zuragnuud */}

        {data.map((row, i) => (
          <div
            key={i}
            className="w-[95%] h-full bg-white rounded-3xl drop-shadow-lg overflow-hidden py-4 px-4 relative"
          >
            {/* <div className="w-full  h-96 rounded-full -mt-48 drop-shadow-lg border-2 border-white bg-[url('https://popmenucloud.com/acopktgy/a5e912c9-cf13-47c8-874c-91394bab4c5d')] bg-contain bg-bottom bg-no-repeat"></div> */}
            <img
              src={row.background}
              alt="food"
              className="absolute h-32 object-cover object-center top-0 left-0 w-full drop-shadow-lg border-2 border-white -translate-y-4 rounded-b-full"
            />

            <div className="font-pacifico w-full h-10 text-5xl flex justify-center mt-32">
              {row.name}
            </div>
            <div className="w-full flex justify-center mt-4">
              {row.duration}
            </div>
            <div className="w-full grid grid-cols-3 gap-4 justify-center mt-8">
              {row.materials.map((mat, j) => (
                <div
                  style={{ backgroundColor: mat.color }}
                  key={j}
                  className={
                    j >= 3
                      ? `px-1 h-6 rounded-full drop-shadow-md text-white flex justify-center translate-x-[65%]`
                      : `px-1 h-6 rounded-full drop-shadow-md  text-white flex justify-center`
                  }
                >
                  {mat.name}
                </div>
              ))}
            </div>
            <div className="w-full px-8 flex justify-center my-4">
              {row.desc}
            </div>

            <div className="w-full py-2 bg-primary rounded-full drop-shadow-lg flex justify-center items-center text-white">
              Үргэлжлүүлэх
            </div>
          </div>
        ))}

        <div className="w-20 h-full flex justify-start items-center absolute right-0 ">
          <div className="rounded-full w-10 h-10 bg-slate-300 z-10 flex justify-center items-center ml-2">
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
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
