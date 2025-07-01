import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => (
  <footer className="bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-gray-200 pt-12 pb-8 px-4 mt-16 border-t border-white/10 shadow-2xl">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8">
      {/* Logo y slogan */}
      <div className="mb-8 md:mb-0 flex-1">
        <Link href="/" className="text-2xl font-extrabold bg-gradient-to-r from-cyan-300 via-pink-300 to-yellow-200 bg-clip-text text-transparent drop-shadow-lg">Lernaza</Link>
        <p className="mt-3 text-sm text-gray-300 max-w-xs">Aprende sin límites. Inspira tu futuro con la mejor experiencia educativa online.</p>
      </div>
      {/* Navegación */}
      <div className="mb-8 md:mb-0 flex-1">
        <h4 className="text-lg font-bold mb-3 text-cyan-200">Navegación</h4>
        <ul className="space-y-2">
          <li><Link href="/" className="hover:text-cyan-300 transition-colors">Inicio</Link></li>
          <li><Link href="/cursos" className="hover:text-cyan-300 transition-colors">Cursos</Link></li>
          <li><Link href="/sobre-nosotros" className="hover:text-cyan-300 transition-colors">Sobre nosotros</Link></li>
          <li><Link href="/contacto" className="hover:text-cyan-300 transition-colors">Contacto</Link></li>
        </ul>
      </div>
      {/* Redes sociales */}
      <div className="flex-1">
        <h4 className="text-lg font-bold mb-3 text-cyan-200">Síguenos</h4>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-400 transition-colors text-2xl">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-cyan-400 transition-colors text-2xl">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.496 14.009-13.986 0-.21 0-.423-.016-.634A9.936 9.936 0 0 0 24 4.557z"/></svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-400 transition-colors text-2xl">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.775.13 4.602.414 3.635 1.381 2.668 2.348 2.384 3.521 2.326 4.798 2.268 6.078 2.254 6.487 2.254 12c0 5.513.014 5.922.072 7.202.058 1.277.342 2.45 1.309 3.417.967.967 2.14 1.251 3.417 1.309 1.28.058 1.689.072 7.202.072s5.922-.014 7.202-.072c1.277-.058 2.45-.342 3.417-1.309.967-.967 1.251-2.14 1.309-3.417.058-1.28.072-1.689.072-7.202s-.014-5.922-.072-7.202c-.058-1.277-.342-2.45-1.309-3.417C19.45.414 18.277.13 17 .072 15.719.014 15.309 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </a>
        </div>
      </div>
    </div>
    <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
      © {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">Lernaza</span>. Todos los derechos reservados.
    </div>
  </footer>
);

export default Footer; 