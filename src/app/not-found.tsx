import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-20">
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 rounded-3xl shadow-xl p-10 max-w-lg w-full text-center border-2 border-pink-200">
        <div className="flex flex-col items-center mb-6">
          <span className="text-6xl mb-2 animate-bounce">🔎</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-pink-600 mb-2">Página no encontrada</h1>
        </div>
        <p className="text-gray-700 text-lg mb-6">La página que buscas no existe o fue movida.<br/>Por favor, revisa la URL o vuelve al inicio.</p>
        <Link href="/" className="inline-block bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:from-blue-500 hover:to-pink-500 transition-all duration-300">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
} 