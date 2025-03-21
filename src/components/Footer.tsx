import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
      <>
        {/* Haupt-Footer */}
        <footer className="bg-[#020230] text-white py-12 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

              {/* Über uns */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Über uns</h4>
                <ul className="space-y-2 text-white/70">
                  <li>Unternehmen</li>
                  <li>Team</li>
                  <li>Karriere</li>
                  <li>Blog</li>
                </ul>
              </div>

              {/* Produkte */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Produkte</h4>
                <ul className="space-y-2 text-white/70">
                  <li>Root Server</li>
                  <li>Dedicated Server</li>
                  <li>VPS</li>
                  <li>Domains</li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-white/70">
                  <li>Hilfe & FAQ</li>
                  <li>Status</li>
                  <li>Kontakt</li>
                  <li>Dokumentation</li>
                </ul>
              </div>

              {/* Rechtliches */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Rechtliches</h4>
                <ul className="space-y-2 text-white/70">
                  <li><Link to="/agb" className="hover:text-cyan-400 transition">AGB</Link></li>
                  <li><Link to="/datenschutz" className="hover:text-cyan-400 transition">Datenschutz</Link></li>
                  <li><Link to="/impressum" className="hover:text-cyan-400 transition">Impressum</Link></li>
                  <li>Cookie-Einstellungen</li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50">
              &copy; {currentYear} All Rights Reserved by FuchsHost.
            </div>
          </div>
        </footer>
      </>
  );
};

export default Footer;
