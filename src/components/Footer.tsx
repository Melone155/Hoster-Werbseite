import { Link } from "react-router-dom"
import { DiscIcon as Discord, Instagram, Youtube, MessageCircle, CreditCard } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
      <>
        <section className="bg-blue-950 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Rechtliches Section */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Rechtliches</h4>
                <div className="flex flex-col space-y-3">
                  <Link to="/impressum" className="hover:text-cyan-400 transition">
                    Impressum
                  </Link>
                  <Link to="/datenschutz" className="hover:text-cyan-400 transition">
                    Datenschutz
                  </Link>
                  <Link to="/agb" className="hover:text-cyan-400 transition">
                    AGB
                  </Link>
                  <Link to="/widerruf" className="hover:text-cyan-400 transition">
                    Widerrufsbelehrung
                  </Link>
                </div>
              </div>

              {/* FuchsHost Section */}
              <div>
                <h4 className="text-lg font-semibold mb-4">FuchsHost</h4>
                <div className="flex flex-col space-y-3">
                  <Link to="/about" className="hover:text-cyan-400 transition">
                    Über Uns
                  </Link>
                  <Link to="/changelog" className="hover:text-cyan-400 transition">
                    Changelog
                  </Link>
                </div>
              </div>

              {/* Social Media Section */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Social Media</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-cyan-400 transition" aria-label="Discord">
                    <Discord size={24} />
                  </a>
                  <a href="#" className="text-white hover:text-cyan-400 transition" aria-label="Instagram">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="text-white hover:text-cyan-400 transition" aria-label="YouTube">
                    <Youtube size={24} />
                  </a>
                  <a href="#" className="text-white hover:text-cyan-400 transition" aria-label="TikTok">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide"
                    >
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-cyan-400 transition" aria-label="Reddit">
                    <MessageCircle size={24} />
                  </a>
                </div>
              </div>

              {/* Zahlungsmittel Section */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Zahlungsmittel</h4>
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                    >
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      <rect width="18" height="12" x="3" y="11" rx="2" />
                      <path d="M12 17v.01" />
                    </svg>
                    <span>PayPal</span>
                  </div>
                  <div className="flex items-center">
                    <CreditCard className="mr-2" size={24} />
                    <span>MasterCard</span>
                  </div>
                  <div className="flex items-center">
                    <CreditCard className="mr-2" size={24} />
                    <span>Visa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Copyright Section */}
        <footer className="bg-blue-950 text-white py-4 border-t border-white/20">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {currentYear} All Rights Reserved By FuchsHost</p>
          </div>
        </footer>
      </>
  )
}

export default Footer

