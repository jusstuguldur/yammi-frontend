import Star from "../star";

const comments = [
  {
    name: "Muunee",
    rating: "4",
    comment:
      "Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu",
    profile: "../muune copy.jpg",
  },
  {
    name: "Muunee",
    rating: "4",
    comment:
      "Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu",
    profile: "../muune copy.jpg",
  },
  {
    name: "Muunee",
    rating: "4",
    comment:
      "Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu",
    profile: "../muune copy.jpg",
  },
  {
    name: "Muunee",
    rating: "4",
    comment:
      "Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu",
    profile: "../muune copy.jpg",
  },
  {
    name: "Muunee",
    rating: "4",
    comment:
      "Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu Hool dajgu shu",
    profile: "../muune copy.jpg",
  },
  {
    name: "Muunee",
    rating: "4",
    comment: "Hool dajgu shu",
    profile: "../muune copy.jpg",
  },
  {
    name: "Muunee",
    rating: "4",
    comment: "Hool dajgu shu",
    profile: "../muune copy.jpg",
  },
];

export default function Comments() {
  return (
    <div className="w-full py-8 flex justify-center">
      <div className="w-[75%] p-8 rounded-3xl drop-shadow-lg bg-white">
        <div className="w-full text-lg pl-4 mb-4">Total comments</div>
        <div className="w-full rounded-3xl max-h-[70vh] bg-gray-400 py-2 px-1 overflow-auto drop-shadow-md">
          {comments.map((row, i) => (
            <div
              key={i}
              className="w-full rounded-3xl py-2 bg-white mb-2 flex px-4 items-center drop-shadow-lg"
            >
              <img
                src={row.profile}
                className="object-center object-cover w-12 h-12 rounded-full drop-shadow-lg border-2 border-white mr-2"
              />

              <div className="w-full py-2 ">
                <div className="flex px-4">
                  <div className="mr-4 text-lg font-semibold">{row.name}</div>
                  <Star value={row.rating}></Star>
                </div>
                <div className="px-4">{row.comment}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex rounded-xl overflow-hidden mt-4">
          <input
            className="w-[93%] p-4 bg-gray-200 rounded-l-xl resize-none break-words"
            placeholder="Write comment..."
          ></input>
          <button className="bg-primary h-fill w-[7%] flex justify-center items-center hover:bg-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 -rotate-45 stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
