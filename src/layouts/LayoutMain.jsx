import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";

const LayoutMain = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-r from-[#5353ff] from-15% to-[#9fefff] to-90% w-full h-full pt-32 px-12">
        <main className="">
          <Outlet />
        </main>
      </section>
      <footer className="bg-gradient-to-r from-[#5353ff] from-15% to-[#9fefff] to-90% h-[20vh] w-full">
        <div className=" bottom-0 left-0 right-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[150px]"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
              fill="#FFFFFF"
              fillOpacity="1"
            ></path>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default LayoutMain;
