'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const pathname = usePathname();

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowUserMenu(false);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-blue-900/80 backdrop-blur-xl border-b border-white/10 shadow-lg transition-all duration-300">
      <div className="flex justify-between items-center py-3 px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="text-xl sm:text-2xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-300 via-pink-300 to-yellow-200 bg-clip-text text-transparent drop-shadow-lg">
          Aprendizaje Movil
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link 
                href="/"
                className={
                  pathname === '/'
                    ? 'transition-all duration-300 font-semibold hover:scale-105 hover:text-cyan-200 text-cyan-300 font-bold underline underline-offset-8 bg-white/10 rounded-lg px-2 py-1'
                    : 'transition-all duration-300 font-semibold hover:scale-105 hover:text-cyan-200 text-white/90'
                }
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link 
                href="/cursos"
                className={
                  pathname.startsWith('/cursos')
                    ? 'transition-all duration-300 font-semibold hover:scale-105 hover:text-cyan-200 text-cyan-300 font-bold underline underline-offset-8 bg-white/10 rounded-lg px-2 py-1'
                    : 'transition-all duration-300 font-semibold hover:scale-105 hover:text-cyan-200 text-white/90'
                }
              >
                Cursos
              </Link>
            </li>
            <li>
              <Link 
                href="/sobre-nosotros"
                className={
                  pathname.startsWith('/sobre-nosotros')
                    ? 'transition-all duration-300 font-semibold hover:scale-105 hover:text-cyan-200 text-cyan-300 font-bold underline underline-offset-8 bg-white/10 rounded-lg px-2 py-1'
                    : 'transition-all duration-300 font-semibold hover:scale-105 hover:text-cyan-200 text-white/90'
                }
              >
                Sobre nosotros
              </Link>
            </li>
            <li>
              <Link 
                href="/contacto"
                className={
                  pathname.startsWith('/contacto')
                    ? 'transition-all duration-300 font-semibold hover:scale-105 hover:text-cyan-200 text-cyan-300 font-bold underline underline-offset-8 bg-white/10 rounded-lg px-2 py-1'
                    : 'transition-all duration-300 font-semibold hover:scale-105 hover:text-cyan-200 text-white/90'
                }
              >
                Contacto
              </Link>
            </li>
          </ul>

          {/* Desktop Auth Section */}
          <div className="relative">
            {!isLoggedIn ? (
              <button
                onClick={handleLogin}
                className="bg-gradient-to-r from-cyan-600 via-cyan-600 to-cyan-600 hover:from-green-600 hover:to-green-600 text-white px-6 py-2 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-white/20"
              >
                Iniciar sesión
              </button>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-200 hover:from-pink-400 hover:to-cyan-400 text-gray-900 px-4 py-2 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20"
                >
                  <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center">
                    <span className="text-sm">👤</span>
                  </div>
                  <span className="hidden xl:block">Usuario Demo</span>
                  <svg className={`w-4 h-4 transition-transform ${showUserMenu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Desktop User Menu */}
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-semibold text-gray-800">Usuario Demo</p>
                      <p className="text-xs text-gray-500">demo@lernaza.com</p>
                    </div>
                    <Link href="/en-construccion" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Mi perfil
                    </Link>
                    <Link href="/en-construccion" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Mis cursos
                    </Link>
                    <Link href="/en-construccion" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Configuración
                    </Link>
                    <div className="border-t border-gray-100 mt-1">
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        Cerrar sesión
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-2">
          {/* Mobile Auth Button */}
          {!isLoggedIn ? (
            <button
              onClick={handleLogin}
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-pink-500 text-white px-3 py-1.5 rounded-full font-bold transition-all duration-300 shadow-lg text-sm border border-white/20"
            >
              Login
            </button>
          ) : (
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-200 hover:from-pink-400 hover:to-cyan-400 text-gray-900 p-2 rounded-full transition-all duration-300 shadow-lg border border-white/20"
            >
              <span className="text-sm">👤</span>
            </button>
          )}

          {/* Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-cyan-200 transition-colors p-2"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {showMobileMenu ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="lg:hidden mt-4 pb-4 border-t border-white/10 bg-gradient-to-r from-indigo-900/90 via-purple-900/90 to-blue-900/90 backdrop-blur-xl">
          <div className="pt-4 space-y-2">
            <Link 
              href="/" 
              onClick={closeMobileMenu}
              className={`block px-4 py-2 rounded-lg transition-all duration-300 font-semibold text-white/90 hover:text-cyan-200 hover:bg-white/10 ${pathname === '/' ? 'bg-white/10 text-cyan-300 font-bold' : ''}`}
            >
              Inicio
            </Link>
            <Link 
              href="/cursos" 
              onClick={closeMobileMenu}
              className={`block px-4 py-2 rounded-lg transition-all duration-300 font-semibold text-white/90 hover:text-cyan-200 hover:bg-white/10 ${pathname.startsWith('/cursos') ? 'bg-white/10 text-cyan-300 font-bold' : ''}`}
            >
              Cursos
            </Link>
            <Link 
              href="/sobre-nosotros" 
              onClick={closeMobileMenu}
              className={`block px-4 py-2 rounded-lg transition-all duration-300 font-semibold text-white/90 hover:text-cyan-200 hover:bg-white/10 ${pathname.startsWith('/sobre-nosotros') ? 'bg-white/10 text-cyan-300 font-bold' : ''}`}
            >
              Sobre nosotros
            </Link>
            <Link 
              href="/contacto" 
              onClick={closeMobileMenu}
              className={`block px-4 py-2 rounded-lg transition-all duration-300 font-semibold text-white/90 hover:text-cyan-200 hover:bg-white/10 ${pathname.startsWith('/contacto') ? 'bg-white/10 text-cyan-300 font-bold' : ''}`}
            >
              Contacto
            </Link>
            
            {/* Mobile User Menu (when logged in) */}
            {isLoggedIn && (
              <>
                <div className="border-t border-white/10 mt-4 pt-4">
                  <div className="px-4 py-2 text-white/70 text-sm">
                    Usuario Demo
                  </div>
                  <Link 
                    href="/en-construccion" 
                    onClick={closeMobileMenu}
                    className="block px-4 py-2 text-white/90 hover:text-cyan-200 hover:bg-white/10 rounded-lg transition-all duration-300"
                  >
                    Mi perfil
                  </Link>
                  <Link 
                    href="/en-construccion" 
                    onClick={closeMobileMenu}
                    className="block px-4 py-2 text-white/90 hover:text-cyan-200 hover:bg-white/10 rounded-lg transition-all duration-300"
                  >
                    Mis cursos
                  </Link>
                  <Link 
                    href="/en-construccion" 
                    onClick={closeMobileMenu}
                    className="block px-4 py-2 text-white/90 hover:text-cyan-200 hover:bg-white/10 rounded-lg transition-all duration-300"
                  >
                    Configuración
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      closeMobileMenu();
                    }}
                    className="block w-full text-left px-4 py-2 text-red-300 hover:text-red-200 hover:bg-red-500/20 rounded-lg transition-all duration-300"
                  >
                    Cerrar sesión
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Mobile User Dropdown (positioned separately) */}
      {isLoggedIn && showUserMenu && (
        <div className="lg:hidden absolute right-4 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50">
          <div className="px-4 py-2 border-b border-gray-100">
            <p className="text-sm font-semibold text-gray-800">Usuario Demo</p>
            <p className="text-xs text-gray-500">demo@lernaza.com</p>
          </div>
          <Link href="/en-construccion" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
            Mi perfil
          </Link>
          <Link href="/en-construccion" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
            Mis cursos
          </Link>
          <Link href="/en-construccion" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
            Configuración
          </Link>
          <div className="border-t border-gray-100 mt-1">
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 