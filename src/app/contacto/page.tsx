export default function ContactoPage() {
  return (
    <main className="max-w-4xl mx-auto w-full px-4 py-12">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 tracking-tight leading-tight">
          Contáctanos
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          ¿Tienes alguna pregunta o necesitas ayuda? Estamos aquí para apoyarte en tu proceso de aprendizaje.
        </p>
      </section>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Formulario */}
        <section className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-8 border border-blue-200">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Envíanos un mensaje
          </h2>
          <form className="flex flex-col gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
              <input 
                type="text" 
                placeholder="Tu nombre" 
                className="w-full border-2 border-blue-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-700 bg-white/80"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico</label>
              <input 
                type="email" 
                placeholder="tu@email.com" 
                className="w-full border-2 border-blue-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-700 bg-white/80"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Asunto</label>
              <select className="w-full border-2 border-blue-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-700 bg-white/80">
                <option>Información general</option>
                <option>Soporte técnico</option>
                <option>Sugerencias</option>
                <option>Colaboraciones</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
              <textarea 
                placeholder="Cuéntanos cómo podemos ayudarte..." 
                rows={5} 
                className="w-full border-2 border-blue-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-700 resize-none bg-white/80"
              />
            </div>
            <button 
              type="button" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl px-6 py-3 font-semibold transition-all duration-300 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Enviar mensaje
            </button>
          </form>
        </section>

        {/* Información de contacto */}
        <section className="space-y-6">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl shadow-xl p-6 border border-cyan-200 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                <span className="text-2xl">📧</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Email</h3>
                <p className="text-gray-600 font-medium">contacto@lernaza.com</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl shadow-xl p-6 border border-emerald-200 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                <span className="text-2xl">📞</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Teléfono</h3>
                <p className="text-gray-600 font-medium">+34 600 123 456</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-xl p-6 border border-purple-200 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                <span className="text-2xl">🕒</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Horario de atención</h3>
                <p className="text-gray-600 font-medium">Lunes a Viernes</p>
                <p className="text-gray-600 font-medium">9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 rounded-3xl p-6 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
            <div className="relative z-10">
              <h3 className="text-lg font-semibold mb-3 bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">
                ¿Necesitas ayuda inmediata?
              </h3>
              <p className="text-purple-100 text-sm leading-relaxed">
                Consulta nuestras preguntas frecuentes o únete a nuestra comunidad en redes sociales para obtener respuestas rápidas.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 