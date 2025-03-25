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
          <nav className="flex justify-between items-center py-4 relative">
            {/* Logo links */}
            <Link to="/" className="flex items-center">
              <img
                  src="../assets/logo.png"
                  alt="FuchsHost Logo"
                  className="h-10"
                  onError={(e) => {
                    e.currentTarget.src = "LOGO"
                  }}
              />
            </Link>

            {/* Mobile Menu Button */}
            <button
                className="lg:hidden flex flex-col space-y-1.5 relative z-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <ul className="flex space-x-6">
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
              {/* Desktop Login Button */}
              <Link
                  to="/login"
                  className="ml-6 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md transition"
              >
                Login
              </Link>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-0 right-0 w-64 h-screen bg-[#020230] shadow-lg z-40 pt-20">
                  <div className="flex flex-col h-full">
                    <ul className="flex flex-col space-y-4 p-4">
                      <li>
                        <Link
                            to="/"
                            className={`block text-right uppercase px-2 py-1 transition ${isActive("/") ? "text-cyan-400" : "hover:text-gray-300"}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                            to="/root-server"
                            className={`block text-right uppercase px-2 py-1 transition ${isActive("/root-server") ? "text-cyan-400" : "hover:text-gray-300"}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                          Root Server
                        </Link>
                      </li>
                      <li>
                        <Link
                            to="/webhosting"
                            className={`block text-right uppercase px-2 py-1 transition ${isActive("/webhosting") ? "text-cyan-400" : "hover:text-gray-300"}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                          Web Server
                        </Link>
                      </li>
                      <li>
                        <Link
                            to="/cloud-speicher"
                            className={`block text-right uppercase px-2 py-1 transition ${isActive("/cloud-speicher") ? "text-cyan-400" : "hover:text-gray-300"}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                          Cloud Speicher
                        </Link>
                      </li>
                      <li>
                        <Link
                            to="/virtual-data-center"
                            className={`block text-right uppercase px-2 py-1 transition ${isActive("/virtual-data-center") ? "text-cyan-400" : "hover:text-gray-300"}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                          Virtual Data Center
                        </Link>
                      </li>
                      <li>
                        <Link
                            to="/domain"
                            className={`block text-right uppercase px-2 py-1 transition ${isActive("/domain") ? "text-cyan-400" : "hover:text-gray-300"}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                          Domain
                        </Link>
                      </li>
                      <li className="mt-4 flex justify-end">
                        <Link
                            to="/login"
                            className="inline-block text-right bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md transition"
                            onClick={() => setIsMenuOpen(false)}
                        >
                          Login
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
            )}
          </nav>
        </div>
      </header>
  )
}

export default Navbar