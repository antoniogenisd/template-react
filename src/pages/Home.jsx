import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <>
      <div className=" text-white sm:px-12 flex justify-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl text-center sm:text-5xl sm:text-left font-extrabold">
              WELCOME TEXT
            </h1>
            <p className="w-full text-sm text-center sm:w-[70%] sm:text-left lg:w-[70%] justify-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus quasi enim consequatur perferendis modi id totam,
              exercitationem sint quae autem quo beatae. Nemo maxime blanditiis
              aperiam odit dolorem dicta totam?
            </p>
          </div>
          <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-white my-12">
            <div className="px-6 py-4">
              <div className="font-bold text-center sm:text-left lg:text-left text-xl mb-2 text-gray-700">
                The Coldest Sunset
              </div>
              <p className="text-gray-700 text-base text-center sm:text-left lg:text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
              <div className="flex justify-center align-middle sm:justify-start">
                <button className="bg-[#5353ff] hover:bg-[#2da6be] mt-4 text-white font-bold py-2 px-4 rounded-xl">
                  Prueba
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="py-12">
        <Carousel></Carousel>
      </section>
    </>
  );
};
export default Home;
