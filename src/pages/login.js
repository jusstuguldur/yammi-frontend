import styles from "../styles/Login.module.css";
import Link from "next/link";
export default function Login() {
  return (
    <div className="w-screen h-screen bg-beige flex justify-center items-center overflow-hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="-translate-y-full absolute"
      >
        <path
          fill="#492602"
          fill-opacity="1"
          d="M0,256L30,245.3C60,235,120,213,180,192C240,171,300,149,360,138.7C420,128,480,128,540,133.3C600,139,660,149,720,138.7C780,128,840,96,900,85.3C960,75,1020,85,1080,90.7C1140,96,1200,96,1260,80C1320,64,1380,32,1410,16L1440,0L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute translate-y-full"
      >
        <path
          fill="#492602"
          fill-opacity="1"
          d="M0,256L30,245.3C60,235,120,213,180,192C240,171,300,149,360,138.7C420,128,480,128,540,133.3C600,139,660,149,720,138.7C780,128,840,96,900,85.3C960,75,1020,85,1080,90.7C1140,96,1200,96,1260,80C1320,64,1380,32,1410,16L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>

      {/*Login section */}

      <div className="p-8 bg-white drop-shadow-lg rounded-3xl">
        <div className="font-pacifico text-5xl p-4 drop-shadow-lg rounded-3xl -translate-y-1/2 -mt-8 bg-white flex justify-center">
          Yammi
        </div>
        <div className="w-full justify-center flex text-3xl font-semibold mb-4">
          Нэвтрэх
        </div>
        <input
          className="w-full bg-gray-200 rounded-xl px-4 py-4 mb-4"
          placeholder="Username"
          type="mail"
        ></input>
        <input
          className="w-full bg-gray-200 rounded-xl px-4 py-4 mb-4"
          placeholder="Password"
          type="password"
        ></input>
        <div className="flex px-2 justify-between">
          <div className="flex">
            <input
              type="checkbox"
              className="mr-1 accent-primary bg-primary"
            ></input>
            <div className="">Сануулах</div>
          </div>
          <div className="">Forgot Password?</div>
        </div>
        <div className="flex justify-center mt-4">
          <Link href="/">
            <div className="flex justify-center items-center px-24 py-2 bg-primary rounded-2xl text-white w-fit text-lg mt-4 hover:bg-red-500">
              Нэвтрэх
            </div>
          </Link>
        </div>

        <div className="flex justify-center w-full mt-8 items-center">
          <div className="h-[2px] w-[20%] bg-gray-400 rounded-sm mr-2"></div>
          <div className="h-[2px] w-[20%] bg-gray-400 rounded-sm"></div>
        </div>

        <div className="flex justify-center gap-x-16 mt-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            id="facebook"
            className="w-10"
          >
            <path d="M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7H17.3c-1.26,0-1.5.6-1.5,1.47v1.93h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            id="instagram"
            className="w-10"
          >
            <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            id="gmail"
            className="w-10"
          >
            <path d="M14.5 2h-13A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm-1.766 1L8 6.738 3.266 3h9.468zM2 13V4.646l6 4.615 6-4.616V13H2z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
