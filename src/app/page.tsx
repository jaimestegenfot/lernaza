import CardCurso from '../components/CardCurso';
import BannerCursosRecientes from '../components/BannerCursosRecientes';
import { cursos } from '../data/mockData';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero principal */}
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
        {/* Imagen de fondo agregada */}
        <img 
          src="https://www.hazunaweb.com/imagenes/los-10-mejores-programas-de-diseno-web.jpg" 
          alt="Programas de diseño web" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 z-0" 
          style={{ pointerEvents: 'none' }}
        />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-pink-500/30 via-purple-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-300 via-pink-300 to-yellow-200 bg-clip-text text-transparent mb-6 drop-shadow-lg animate-fade-in">
            Aprende sin límites en <span className="underline decoration-wavy decoration-pink-400">Lernaza</span>
          </h1>
          <p className="text-lg sm:text-2xl text-blue-100 font-light mb-8 animate-fade-in delay-100">
            Descubre cursos de tecnología, matemáticas, idiomas, historia, negocios y mucho más. <br className="hidden sm:block" />
            ¡Explora, aprende y crece con la mejor experiencia educativa online!
          </p>
          <Link href="/cursos" className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:from-indigo-600 hover:to-pink-500 transition-all duration-300 animate-fade-in delay-200">
            Explorar cursos
          </Link>
        </div>
      </section>

      {/* Banner de cursos recientes */}
      <BannerCursosRecientes />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Listado de cursos */}
        <section>
          <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-12 text-center tracking-tight animate-fade-in">
            Cursos destacados
          </h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {cursos.slice(0, 6).map((curso) => (
              <CardCurso key={curso.id} curso={curso} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

// Animaciones personalizadas en globals.css:
// .animate-fade-in { animation: fadeIn 1s both; }
// .delay-100 { animation-delay: 0.1s; }
// .delay-200 { animation-delay: 0.2s; }
// @keyframes fadeIn { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: none; } }
