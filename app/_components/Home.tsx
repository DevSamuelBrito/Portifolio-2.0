import Image from "next/image";
const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center p-24">
      <Image
        src="/BR.png" // Caminho da imagem relativo à pasta `public`
        alt="Brasil"
        width={32} // Largura da imagem
        height={32} // Altura da imagem
      />
    </main>
  );
};

export default Home;
