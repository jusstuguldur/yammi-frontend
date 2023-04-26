import ReactPlayer from "react-player";

const video = [{ url: "https://www.youtube.com/watch?v=NUBjaJkNulM" }];

export default function Video() {
  return (
    <div className="w-full mt-8 py-16 flex justify-center">
      <div className="w-[65%] pt-4 pb-2 bg-white z-10 rounded-3xl flex justify-center">
        <div>
          <div className="rounded-3xl overflow-hidden w-fit">
            {video.map((vid) => (
              <ReactPlayer url={vid.url} className="w-full "></ReactPlayer>
            ))}
          </div>
          <div className="flex w-full justify-center mt-2 items-center">
            <div className="bg-gray-300 w-4 h-4 rounded-full mr-4"></div>
            <div className=" bg-gray-300 w-6 h-6 rounded-full mr-4"></div>
            <div className="bg-gray-300 w-4 h-4 rounded-full "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
