import { Shield, Server, Wifi, CreditCard, ArrowRight, HeadsetIcon, Clock, Globe, Database, Lock } from 'lucide-react';
import {Link} from "react-router-dom";
import backgroundImage from '../assets/webhoster-backround.jpeg';
import Navbar from "../components/Navbar.tsx";

function App() {
    return (
        <>
        <Navbar />
        <div className="min-h-screen bg-[#020230] text-white">
            {/* Hero Section */}
            <div className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 mix-blend-multiply"/>
                <div className="absolute inset-0"
                     style={{
                         backgroundImage: `url(${backgroundImage})`,
                         backgroundPosition: 'center',
                         backgroundSize: 'cover',
                         opacity: 0.2
                     }}
                />
                <div className="relative container mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-6 max-w-3xl">
                        Professionelles Webhosting für Ihre Online-Präsenz
                    </h1>
                    <p className="text-xl text-white/80 max-w-2xl mb-8">
                        Schnelles, sicheres und zuverlässiges Hosting mit modernster Technologie.
                        Ideal für Websites, Online-Shops und Blogs.
                    </p>
                    <Link to="/shop/webhosting">
                        <button
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:opacity-90 transition-opacity">
                            Hosting bestellen <ArrowRight className="w-5 h-5"/>
                        </button>
                    </Link>
                </div>
            </div>

            {/* Features Grid */}
            <div className="container mx-auto px-4 py-20">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                        <Globe className="w-10 h-10 text-cyan-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Optimierte Performance</h3>
                        <p className="text-white/70">
                            Schnelle Hardware für optimale Ladezeiten Ihrer Website.
                        </p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                        <Database className="w-10 h-10 text-blue-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Schneller Speicher</h3>
                        <p className="text-white/70">
                            Schneller Speicherplatz für alle Ihre Webinhalte und Datenbanken.
                        </p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                        <Lock className="w-10 h-10 text-cyan-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">SSL-Zertifikate</h3>
                        <p className="text-white/70">
                            Kostenlose SSL-Zertifikate für die Sicherheit Ihrer Besucher.
                        </p>
                    </div>
                </div>
            </div>

            {/* Technical Details */}
            <div className="bg-white/5">
                <div className="container mx-auto px-4 py-20">
                    <h2 className="text-3xl font-bold mb-12 text-center">Hosting Features</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="flex items-start gap-4">
                            <Server className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold mb-2">PHP & MySQL</h3>
                                <p className="text-white/70">Neueste PHP-Versionen & MySQL-Datenbanken</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Wifi className="w-6 h-6 text-blue-400 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold mb-2">FTP-Zugang</h3>
                                <p className="text-white/70">Einfacher Dateizugriff via FTP/SFTP</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Shield className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold mb-2">Backup-Service</h3>
                                <p className="text-white/70">1-Click Backups Ihrer Daten</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <CreditCard className="w-6 h-6 text-blue-400 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold mb-2">1-Click Installer</h3>
                                <p className="text-white/70">WordPress, Joomla & mehr mit einem Klick</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Support & Service Section */}
            <div className="container mx-auto px-4 py-20">
                <h2 className="text-3xl font-bold mb-12 text-center">Service & Support</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                        <HeadsetIcon className="w-12 h-12 text-cyan-400 mb-6" />
                        <h3 className="text-2xl font-semibold mb-4">Persönlicher Support</h3>
                        <p className="text-white/70 mb-6">
                            Unser Support-Team hilft Ihnen bei allen Fragen rund um Ihr Hosting:
                        </p>
                        <ul className="space-y-3 text-white/70">
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                                24/7 Ticket-Support
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                Ausführliche Dokumentation
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                                Video-Tutorials
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                        <Clock className="w-12 h-12 text-blue-400 mb-6" />
                        <h3 className="text-2xl font-semibold mb-4">Hosting Features</h3>
                        <p className="text-white/70 mb-6">
                            Alle Vorteile unseres Webhostings auf einen Blick:
                        </p>
                        <ul className="space-y-3 text-white/70">
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                Kostenlose Sub-Domain
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                                99,9% Uptime-Garantie
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                30 Tage Geld-zurück-Garantie
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
       </>
    );
}

export default App;