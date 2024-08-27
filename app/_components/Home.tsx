import NavBar from "./NavBar";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <NavBar />
      <main className="snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        <section className="h-screen snap-start flex items-center justify-center">
          <div className="flex items-center space-x-44">
            <div className="max-w-md break-words leading-relaxed text-white">
              <h1 className="text-5xl font-semibold">
                Hi There I'm Samuel Fava de Brito
              </h1>
              <p>
                Hello, welcome to my website! I am currently studying Analysis
                and Systems Development at Fatec Rio Preto. I am preparing to
                become a fullstack developer. I am currently looking for job
                opportunities so that I can gain experience and knowledge to
                evolve in the area. If you are interested, contact me on one of
                my social networks, and be sure to check out my GITHUB to see my
                projects.
              </p>
            </div>

            <div className="ml-10">
              <Image
                src="/photo.png"
                width={300}
                height={300}
                alt="Picture of the author"
              />
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
