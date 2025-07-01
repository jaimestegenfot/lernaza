import React from 'react';
import Link from 'next/link';

export interface Curso {
  id: number;
  titulo: string;
  descripcion: string;
  instructor: string;
  duracion: string;
  categoria: string;
  nivel: string;
  imagen: string;
}

interface CardCursoProps {
  curso: Curso;
}

const CardCurso: React.FC<CardCursoProps> = ({ curso }) => (
  <div className="bg-white rounded-3xl border border-purple-200 shadow-xl overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
    <div className="relative">
      <img src={curso.imagen} alt={curso.titulo} className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3 leading-tight">
        {curso.titulo}
      </h3>
      <p className="text-gray-600 text-sm mb-4 flex-1 leading-relaxed">{curso.descripcion}</p>
      
      <div className="mb-4">
        <div className="text-sm font-medium">
          Instructor: <span className="text-violet-600 font-semibold">{curso.instructor}</span>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 justify-between text-xs mb-4">
        <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full px-3 py-1 font-medium shadow-lg">
          {curso.categoria}
        </span>
        <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full px-3 py-1 font-medium shadow-lg">
          {curso.nivel}
        </span>
        <span className="bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-full px-3 py-1 font-medium shadow-lg">
          {curso.duracion}
        </span>
      </div>
      
      <Link href={`/cursos/${curso.id}`}>
        <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 text-sm shadow-lg hover:shadow-xl transform hover:scale-105">
          Ver más detalles
        </button>
      </Link>
    </div>
  </div>
);

export default CardCurso; 