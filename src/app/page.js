export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold mb-6 text-center">
        Caballero Moderno
      </h1>

      <p className="text-gray-300 text-center max-w-2xl text-lg mb-8">
        Bienvenido a Caballero Moderno.
        Estilo moderno, elegancia y presencia digital profesional.
      </p>

      <a
        href="https://caballeromoderno.online"
        className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
      >
        Entrar
      </a>
    </main>
  )
}
