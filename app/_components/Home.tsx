import NavBar from "./NavBar";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <NavBar />
      <main className="snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        <section className="h-screen snap-start flex justify-center">
          <div className="mt-28">
            <div className="flex items-center space-x-48">
              <div className="max-w-md break-words leading-relaxed text-white">
                <h1 className="text-4xl font-semibold text-white">Hi There,</h1>
                <span className="text-4xl font-semibold bg-gradient-text bg-300% bg-clip-text text-transparent animate-gradient-once">
                  I'm Samuel Fava de Brito
                </span>
                <p className="text-xl mt-4">
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
