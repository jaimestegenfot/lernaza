export default function SobreNosotrosPage() {
  return (
    <main className="max-w-4xl mx-auto w-full px-4 py-12">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 tracking-tight leading-tight">
          Sobre nosotros
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Conoce más sobre Lernaza y nuestro compromiso con la educación de calidad.
        </p>
      </section>

      {/* Contenido principal */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Misión */}
        <section className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-blue-200">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
              <span className="text-2xl">🎯</span>
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Nuestra misión</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">En Lernaza, buscamos democratizar el acceso a la educación de calidad, brindando cursos actualizados y relevantes para el desarrollo profesional y personal de nuestros estudiantes.</p>
        </section>

        {/* Visión */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-purple-200">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
              <span className="text-2xl">🔮</span>
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Nuestra visión</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">Ser la plataforma educativa de referencia en habla hispana, reconocida por la excelencia de sus contenidos y la satisfacción de sus usuarios.</p>
        </section>
      </div>

      {/* Valores */}
      <section className="mt-12 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl shadow-xl p-8 border border-emerald-200">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
            <span className="text-2xl">⭐</span>
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Nuestros valores</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3 shadow-md"></div>
            <span className="text-gray-700 font-medium">Innovación educativa</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mr-3 shadow-md"></div>
            <span className="text-gray-700 font-medium">Accesibilidad</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3 shadow-md"></div>
            <span className="text-gray-700 font-medium">Calidad y compromiso</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mr-3 shadow-md"></div>
            <span className="text-gray-700 font-medium">Aprendizaje continuo</span>
          </div>
        </div>
      </section>

      {/* Estadísticas simuladas */}
      <section className="mt-12 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white text-center shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
        <div className="relative z-10">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">Nuestros números</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">500+</div>
              <div className="text-cyan-200">Estudiantes activos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">25+</div>
              <div className="text-pink-200">Cursos disponibles</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">98%</div>
              <div className="text-green-200">Satisfacción</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 