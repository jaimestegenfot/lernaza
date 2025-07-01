'use client';
import React from 'react';
import Link from 'next/link';
import { cursosRecientes } from '../data/mockData';

const BannerCursosRecientes: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-r from-yellow-600 via-yellow-600 to-green-600 py-8 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 animate-pulse"></div>
      
      <div className="relative z-10 mb-6">
        <h2 className="text-3xl font-bold text-center text-white mb-2">
          🆕 Cursos Recientes
        </h2>
        <p className="text-center text-purple-100 text-sm">
          ¡Descubre los últimos cursos añadidos a nuestra plataforma!
        </p>
      </div>

      {/* Banner deslizante */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll space-x-6">
          {/* Primera repetición de cursos */}
          {cursosRecientes.map((curso) => (
            <Link
              key={`first-${curso.id}`}
              href={`/curso/${curso.id}`}
              className="flex-shrink-0 w-80 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <img 
                  src={curso.imagen} 
                  alt={curso.titulo}
                  className="w-16 h-16 rounded-xl object-cover border-2 border-white/30"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm truncate mb-1">
                    {curso.titulo}
                  </h3>
                  <p className="text-purple-200 text-xs mb-2 line-clamp-2">
                    {curso.descripcion}
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="bg-cyan-400/30 text-cyan-100 text-xs px-2 py-1 rounded-full">
                      {curso.categoria}
                    </span>
                    <span className="bg-pink-400/30 text-pink-100 text-xs px-2 py-1 rounded-full">
                      {curso.nivel}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          
          {/* Segunda repetición para el efecto infinito */}
          {cursosRecientes.map((curso) => (
            <Link
              key={`second-${curso.id}`}
              href={`/curso/${curso.id}`}
              className="flex-shrink-0 w-80 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <img 
                  src={curso.imagen} 
                  alt={curso.titulo}
                  className="w-16 h-16 rounded-xl object-cover border-2 border-white/30"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm truncate mb-1">
                    {curso.titulo}
                  </h3>
                  <p className="text-purple-200 text-xs mb-2 line-clamp-2">
                    {curso.descripcion}
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="bg-cyan-400/30 text-cyan-100 text-xs px-2 py-1 rounded-full">
                      {curso.categoria}
                    </span>
                    <span className="bg-pink-400/30 text-pink-100 text-xs px-2 py-1 rounded-full">
                      {curso.nivel}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerCursosRecientes; 