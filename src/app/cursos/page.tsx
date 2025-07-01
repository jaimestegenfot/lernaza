'use client';
import React, { useState } from 'react';
import CardCurso from '../../components/CardCurso';
import { cursos } from '../../data/mockData';

const categorias = [
  'Todos',
  ...Array.from(new Set(cursos.map((c) => c.categoria)))
];
const niveles = [
  'Todos',
  ...Array.from(new Set(cursos.map((c) => c.nivel)))
];

export default function CursosPage() {
  const [categoria, setCategoria] = useState('Todos');
  const [nivel, setNivel] = useState('Todos');
  const [search, setSearch] = useState('');

  const cursosFiltrados = cursos.filter((curso) => {
    const matchCategoria = categoria === 'Todos' || curso.categoria === categoria;
    const matchNivel = nivel === 'Todos' || curso.nivel === nivel;
    const matchSearch =
      curso.titulo.toLowerCase().includes(search.toLowerCase()) ||
      curso.descripcion.toLowerCase().includes(search.toLowerCase());
    return matchCategoria && matchNivel && matchSearch;
  });

  return (
    <main className="max-w-6xl mx-auto w-full px-2 sm:px-4 py-6 sm:py-12">
      {/* Header de la página */}
      <section className="text-center mb-10 sm:mb-16">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 sm:mb-6 tracking-tight leading-tight">
          Todos nuestros cursos
        </h1>
        <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Explora nuestra completa selección de cursos en tecnología, matemáticas, física, historia, idiomas, negocios y más. Aprende a tu ritmo con los mejores instructores del sector.
        </p>
      </section>

      {/* Buscador y filtros */}
      <section className="mb-8 sm:mb-12 flex flex-col gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between">
        {/* Buscador */}
        <div className="flex-1 flex items-center gap-2">
          <input
            type="text"
            placeholder="Buscar cursos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-80 px-4 py-2 sm:py-3 rounded-xl border-2 border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 transition text-gray-700 bg-white/80 shadow text-sm sm:text-base"
          />
        </div>
        {/* Filtros */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center md:justify-end">
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl px-4 py-2 font-medium text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition shadow text-sm sm:text-base"
          >
            {categorias.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <select
            value={nivel}
            onChange={(e) => setNivel(e.target.value)}
            className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-xl px-4 py-2 font-medium text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition shadow text-sm sm:text-base"
          >
            {niveles.map((niv) => (
              <option key={niv} value={niv}>{niv}</option>
            ))}
          </select>
        </div>
      </section>
      
      {/* Grid de cursos */}
      <section>
        {cursosFiltrados.length === 0 ? (
          <div className="text-center text-gray-500 py-20 text-lg sm:text-xl">No se encontraron cursos.</div>
        ) : (
          <div className="grid gap-6 sm:gap-8 grid-cols-1 xs:grid-cols-2 md:grid-cols-3">
            {cursosFiltrados.map((curso) => (
              <CardCurso key={curso.id} curso={curso} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
} 