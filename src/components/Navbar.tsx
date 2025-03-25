"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
      <header className="bg-[#020230] text-white">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center py-4">
            {/* Logo links */}
            <Link to="/" className="flex items-center">
              <img
                  src="../assets/logo.png"
                  alt="FuchsHost Logo"
                  className="h-10"
                  onError={(e) => {
                    // Fallback wenn das Logo nicht geladen werden kann
                    e.currentTarget.src = "LOGO"
                  }}
              />
            </Link>

            {/* Mobile Menu Button */}
            <button className="lg:hidden flex flex-col space-y-1.5" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
            </button>

            {/* Navigation Links */}
            <div
                className={`lg:flex items-center ${isMenuOpen ? "block absolute top-16 left-0 right-0 bg-blue-950 p-4 z-50" : "hidden"}`}
            >
              <ul className="lg:flex space-y-4 lg:space-y-0 lg:space-x-6">
                <li>
                  <Link
                      to="/"
                      className={`uppercase px-2 py-1 transition ${isActive("/") ? "text-cyan-400" : "hover:text-gray-300"}`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                      to="/root-server"
                      className={`uppercase px-2 py-1 transition ${isActive("/root-server") ? "text-cyan-400" : "hover:text-gray-300"}`}
                  >
                    Root Server
                  </Link>
                </li>
                <li>
                  <Link
                      to="/webhosting"
                      className={`uppercase px-2 py-1 transition ${isActive("/webhosting") ? "text-cyan-400" : "hover:text-gray-300"}`}
                  >
                    Web Server
                  </Link>
                </li>
                <li>
                  <Link
                      to="/cloud-speicher"
                      className={`uppercase px-2 py-1 transition ${isActive("/cloud-speicher") ? "text-cyan-400" : "hover:text-gray-300"}`}
                  >
                    Cloud Speicher
                  </Link>
                </li>
                <li>
                  <Link
                      to="/virtual-data-center"
                      className={`uppercase px-2 py-1 transition ${isActive("/virtual-data-center") ? "text-cyan-400" : "hover:text-gray-300"}`}
                  >
                    Virtual Data Center
                  </Link>
                </li>
                <li>
                  <Link
                      to="/domain"
                      className={`uppercase px-2 py-1 transition ${isActive("/domain") ? "text-cyan-400" : "hover:text-gray-300"}`}
                  >
                    Domain
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
  )
}

export default Navbar

