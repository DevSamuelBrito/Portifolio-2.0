import NavBar from "./NavBar";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <NavBar />
      <main className="snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        <section className="!h-[calc(100vh-4rem)] snap-start flex items-center justify-center">
          <div className="px-4  ">
            <div className="flex flex-col md:flex-row items-center md:space-x-20 space-y-8 md:space-y-0 2xl:space-x-32">
              <div className="text-center md:text-left max-w-md break-words leading-relaxed text-white">
                <h1 className="text-3xl sm:text-4xl md:text-4xl 2xl:text-5xl font-semibold text-white">
                  Hi There,
                </h1>
                <span className="text-3xl sm:text-4xl md:text-4xl 2xl:text-5xl font-semibold bg-gradient-text bg-300% bg-clip-text text-transparent animate-gradient-once">
                  I'm Samuel Fava de Brito
                </span>
                <p className="text-lg sm:text-xl md:text-xl 2xl:text-2xl mt-4">
                  Welcome to my website! I am currently studying Analysis and
                  Systems Development at Fatec Rio Preto. I am preparing to
                  become a fullstack developer.
                </p>
              </div>
              <div>
                <Image
                  src="/photo.png"
                  width={300}
                  height={300}
                  alt="Picture of the author"
                  className="mx-auto md:mx-0"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="h-screen snap-start flex relative items-center justify-center text-white">
          <h1>Page 2</h1>
        </section>
        <section className="h-screen snap-start flex relative items-center justify-center text-white">
          <h1>Page 3</h1>
        </section>
        <section className="h-screen snap-start flex relative items-center justify-center text-white">
          <h1>Page 4</h1>
        </section>
        <section className="h-screen snap-start flex relative items-center justify-center text-white">
          <h1>Page 5</h1>
        </section>
      </main>
    </>
  );
};

export default Home;
