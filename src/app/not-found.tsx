import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-20 bg-green-100">
      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-lg w-full text-center border-4 border-green-300 relative overflow-hidden">
        {/* Efecto decorativo suave */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-green-200/40 rounded-full blur-2xl z-0" />
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-green-100/40 rounded-full blur-2xl z-0" />
        <div className="flex flex-col items-center mb-6 relative z-10">
          <span className="text-7xl mb-2 animate-bounce drop-shadow-[0_2px_12px_rgba(34,197,94,0.5)] text-green-500">
            🔎
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-green-600 mb-2 drop-shadow-[0_2px_8px_rgba(34,197,94,0.2)]">
            Página no encontrada
          </h1>
        </div>
        <p className="text-gray-700 text-lg mb-8 font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.10)]">
          La página que buscas no existe o fue movida.<br />Por favor, revisa la URL o vuelve al inicio.
        </p>
        <Link
          href="/"
          className="inline-block bg-green-500 hover:bg-green-700 text-white px-8 py-3 rounded-2xl font-bold shadow-xl transition-all duration-300 text-lg tracking-wide border-2 border-green-300 focus:outline-none focus:ring-4 focus:ring-green-300"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
} 