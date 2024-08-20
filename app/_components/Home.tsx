import Image from "next/image";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <main className=" snap-y snap-mandatory overflow-y-scroll">
        <section className="h-screen snap-start flex relative items-center justify-center text-white">
          <h1>Page 1</h1>
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
        </section>{" "}
      </main>
    </>
  );
};

export default Home;
