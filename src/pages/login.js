import styles from "../styles/Login.module.css";
export default function Login() {
  return (
    <div className="w-screen h-screen bg-beige flex justify-center items-center">
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
      <div className="bg-white w-[50%] h-[65%] drop-shadow-lg rounded-3xl">
        <div className={styles.container}>
          <form className={styles.form}>
            <h1 className={styles.title}>Login</h1>
            <div className={styles.input}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.input}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button className={styles.button} type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
