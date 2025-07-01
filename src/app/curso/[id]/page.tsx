import { notFound } from 'next/navigation';
import { cursos } from '../../../data/mockData';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function getYouTubeEmbedUrl(url: string) {
  const match = url.match(/(?:youtu.be\/|youtube.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}

export default async function CursoDetallePage({ params }: { params: { id: string } }) {
  // Si params es una promesa, espera su resolución
  const resolvedParams = await params;
  const cursoId = parseInt(resolvedParams.id);
  const curso = cursos.find(c => c.id === cursoId);

  if (!curso) {
    notFound();
  }

  const precioSuscripcionAnual = 299.99;
  const descuentoSuscripcion = Math.round(((curso.precio * 12) - precioSuscripcionAnual) / (curso.precio * 12) * 100);
  const embedUrl = getYouTubeEmbedUrl(curso.videoIntro);

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600 transition-colors">Inicio</Link>
          <span>/</span>
          <Link href="/cursos" className="hover:text-purple-600 transition-colors">Cursos</Link>
          <span>/</span>
          <span className="text-purple-600 font-medium">{curso.titulo}</span>
        </div>
      </nav>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Contenido principal */}
        <div className="lg:col-span-2 space-y-8">
          {/* Header del curso */}
          <section className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 animate-pulse"></div>
            <div className="relative z-10">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-cyan-400/30 text-cyan-100 px-3 py-1 rounded-full text-sm font-medium">
                  {curso.categoria}
                </span>
                <span className="bg-emerald-400/30 text-emerald-100 px-3 py-1 rounded-full text-sm font-medium">
                  {curso.nivel}
                </span>
              </div>
              <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">
                {curso.titulo}
              </h1>
              <p className="text-xl text-purple-100 mb-6 leading-relaxed">{curso.descripcion}</p>
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-300">⭐</span>
                  <span className="font-semibold">{curso.rating}</span>
                  <span className="text-purple-200">({curso.totalEstudiantes} estudiantes)</span>
                </div>
                <div className="text-purple-200">
                  👨‍🏫 {curso.instructor}
                </div>
              </div>
              {/* Video Intro */}
              {embedUrl && (
                <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-xl border-4 border-white/20 mb-2">
                  <iframe
                    src={embedUrl}
                    title={`Video de introducción de ${curso.titulo}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              )}
            </div>
          </section>

          {/* Objetivos del curso */}
          <section className="bg-white rounded-3xl shadow-xl p-8 border border-purple-200">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              📋 Objetivos del curso
            </h2>
            <div className="grid gap-3">
              {curso.objetivos.map((objetivo, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{objetivo}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Temario */}
          <section className="bg-white rounded-3xl shadow-xl p-8 border border-purple-200">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              📚 Contenido del curso
            </h2>
            <div className="space-y-4">
              {curso.temario.map((modulo, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-800 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-sm mr-3">
                        {index + 1}
                      </span>
                      {modulo.modulo}
                    </h3>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-2">
                      {modulo.lecciones.map((leccion, leccionIndex) => (
                        <li key={leccionIndex} className="flex items-center space-x-3 text-gray-600">
                          <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                          <span>{leccion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Requisitos */}
          <section className="bg-white rounded-3xl shadow-xl p-8 border border-purple-200">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              ⚙️ Requisitos
            </h2>
            <div className="grid gap-3">
              {curso.requisitos.map((requisito, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">!</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{requisito}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Recursos incluidos */}
          <section className="bg-white rounded-3xl shadow-xl p-8 border border-purple-200">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              🎁 Recursos incluidos
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {curso.recursos.map((recurso, index) => (
                <div key={index} className="flex items-center space-x-3 bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-xl border border-green-200">
                  <span className="text-green-600">📋</span>
                  <span className="text-gray-700 font-medium">{recurso}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-4 space-y-6">
            {/* Opciones de compra */}
            <div className="bg-white rounded-3xl shadow-2xl border border-purple-200 overflow-hidden">
              <div className="p-6">
                <div className="text-center mb-6">
                  <img src={curso.imagen} alt={curso.titulo} className="w-full h-40 object-cover rounded-2xl mb-4" />
                </div>
                
                {/* Suscripción Anual */}
                <div className="mb-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border-2 border-yellow-300 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                      🔥 MEJOR OFERTA
                    </span>
                  </div>
                  <div className="text-center pt-2">
                    <h3 className="font-bold text-gray-800 mb-2">✨ Suscripción Anual</h3>
                    <p className="text-sm text-gray-600 mb-3">Acceso a TODOS los cursos</p>
                    <div className="mb-3">
                      <div className="text-3xl font-extrabold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                        ${precioSuscripcionAnual}
                      </div>
                      <p className="text-xs text-gray-500 line-through">${(curso.precio * 12).toFixed(2)}</p>
                      <p className="text-sm font-semibold text-green-600">¡Ahorra {descuentoSuscripcion}%!</p>
                    </div>
                    <ul className="text-xs text-gray-600 mb-4 space-y-1">
                      <li>✅ Acceso a todos los cursos</li>
                      <li>✅ Nuevos cursos incluidos</li>
                      <li>✅ Certificados ilimitados</li>
                      <li>✅ Soporte prioritario</li>
                    </ul>
                    <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-orange-500 hover:to-red-500 text-white py-3 px-6 rounded-xl font-bold text-sm transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                      🚀 Suscribirse Anualmente
                    </button>
                  </div>
                </div>

                {/* Compra Individual */}
                <div className="p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl border border-purple-200">
                  <div className="text-center">
                    <h3 className="font-bold text-gray-800 mb-2">💎 Compra Individual</h3>
                    <p className="text-sm text-gray-600 mb-3">Solo este curso</p>
                    <div className="mb-3">
                      <div className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                        ${curso.precio}
                      </div>
                      <p className="text-sm text-gray-500">Acceso de por vida</p>
                    </div>
                    <ul className="text-xs text-gray-600 mb-4 space-y-1">
                      <li>✅ Acceso permanente</li>
                      <li>✅ Actualizaciones incluidas</li>
                      <li>✅ Certificado al completar</li>
                      <li>✅ Recursos descargables</li>
                    </ul>
                    <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white py-3 px-6 rounded-xl font-bold text-sm transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 mb-3">
                      💳 Comprar Curso
                    </button>
                    <button className="w-full border-2 border-purple-300 text-purple-600 hover:bg-purple-50 py-2 px-6 rounded-xl font-semibold transition-all duration-300 text-sm">
                      🛒 Agregar al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Información adicional */}
            <div className="bg-white rounded-3xl shadow-xl p-6 border border-purple-200">
              <h3 className="font-bold text-gray-800 mb-4">📊 Información del curso</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duración:</span>
                  <span className="font-semibold text-gray-800">{curso.duracion}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Nivel:</span>
                  <span className="font-semibold text-gray-800">{curso.nivel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Certificado:</span>
                  <span className="font-semibold text-green-600">
                    {curso.certificado ? '✅ Incluido' : '❌ No incluido'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Estudiantes:</span>
                  <span className="font-semibold text-gray-800">{curso.totalEstudiantes.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Actualizado:</span>
                  <span className="font-semibold text-gray-800">
                    {new Date(curso.ultimaActualizacion).toLocaleDateString('es-ES')}
                  </span>
                </div>
              </div>
            </div>

            {/* Instructor */}
            <div className="bg-white rounded-3xl shadow-xl p-6 border border-purple-200">
              <h3 className="font-bold text-gray-800 mb-4">👨‍🏫 Instructor</h3>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {curso.instructor.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{curso.instructor}</p>
                  <p className="text-gray-500 text-sm">Instructor especializado</p>
                </div>
              </div>
            </div>

            {/* Garantía */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl shadow-xl p-6 border border-green-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Garantía de 30 días</h3>
                <p className="text-sm text-gray-600">
                  Si no estás satisfecho, te devolvemos tu dinero completo. Sin preguntas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 