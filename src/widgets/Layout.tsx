import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../index.css';

const Layout = () => {
  return (
    <div className='flex flex-col bg-primary-black text-warm-white'>
       <nav className="fixed top-0 w-full z-50 bg-primary-black/80 backdrop-blur-md border-b border-charcoal/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-accent-orange" id="logo">
              Bekzhan
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/"
                className="hover:text-accent-orange transition-colors"
              >
                Home
              </Link>
              <Link to="/portfolio"
                className="hover:text-accent-orange transition-colors"
              >
                Portfolio
              </Link>
              <Link to="/about"
                className="hover:text-accent-orange transition-colors"
              >
                About
              </Link>
              <a
                href="https://t.me/temen0v"
                className="bg-accent-orange hover:bg-orange-600 px-6 py-2 rounded-lg transition-all glow-orange"
              >
                Write in Telegram
              </a>
            </div>
            <div className="md:hidden">
              <button className="text-accent-orange">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
      
      <footer className="py-12 border-t border-charcoal/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-accent-orange font-bold text-xl mb-4">
            Bekzhan
          </div>
          <p className="text-gray-400">
            © 2025 Bekzhan AI Automation. Crafting intelligent solutions for
            modern businesses.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
