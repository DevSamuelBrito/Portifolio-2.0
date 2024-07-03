import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Image
        src="https://github.com/DevSamuelBrito.png" // Caminho para a imagem
        alt="Descrição da Imagem"
        width={500} // Largura da imagem
        height={300} // Altura da imagem
      />
    </main>
  );
}
