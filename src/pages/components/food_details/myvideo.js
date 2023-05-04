import ReactPlayer from "react-player";

export default function MyVideo() {
  // const videos = [{ url: "https://www.youtube.com/watch?v=NUBjaJkNulM" }];
  const videos = [
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/NUBjaJkNulM"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>,
  ];
  return (
    <div className="w-full py-16 flex justify-center items-center">
      <div className="h-16 w-[60%] right-0 absolute bg-primary"></div>
      <div className="w-[80%] pt-4 pb-2 bg-white z-10 rounded-3xl flex justify-center drop-shadow-lg">
        <div>
          <div className="rounded-3xl overflow-hidden w-fit">
            {/* {videos.map((vid) => (
              <ReactPlayer url={vid.url} className="w-full "></ReactPlayer>
            ))} */}
            {videos.map((row) => row)}
          </div>
          <div className="flex w-full justify-center mt-2 items-center">
            <div className="bg-gray-300 w-4 h-4 rounded-full mr-4"></div>
            <div className=" bg-gray-300 w-6 h-6 rounded-full mr-4"></div>
            <div className="bg-gray-300 w-4 h-4 rounded-full "></div>
          </div>
        </div>
      </div>
      <div className="w-[65%] h-full absolute flex justify-center mt-24">
        <div className="w-16 h-1/2 bg-primary absolute bottom-0"></div>
      </div>
    </div>
  );
}
