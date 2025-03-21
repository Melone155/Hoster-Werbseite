import { Shield, Cpu, Server, HardDrive, Wifi, CreditCard, ArrowRight, HeadsetIcon, Clock } from 'lucide-react';
import backgroundImage from '../assets/rootserver-mieten-backround.jpeg';
import {Link} from "react-router-dom";

function App() {
    return (
        <div className="min-h-screen bg-[#020230] text-white">
            {/* Hero Section */}
            <div className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 mix-blend-multiply"/>
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
                        Leistungsstarke Root-Server für höchste Ansprüche
                    </h1>
                    <p className="text-xl text-white/80 max-w-2xl mb-8">
                        Maximale Performance mit modernster Hardware, flexibler Konfiguration und 99,9% Verfügbarkeit.
                        Ihr verlässlicher Partner für professionelles Hosting.
                    </p>
                    <Link to="/shop/root-server">
                        <button
                            className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:opacity-90 transition-opacity">
                            Jetzt konfigurieren <ArrowRight className="w-5 h-5"/>
                        </button>
                    </Link>
                </div>
            </div>

            {/* Features Grid */}
            <div className="container mx-auto px-4 py-20">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                        <Cpu className="w-10 h-10 text-blue-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Hochperformante Hardware</h3>
                        <p className="text-white/70">
                            Neueste AMD EPYC und Intel Xeon CPUs für maximale Leistung und Effizienz.
                        </p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                        <HardDrive className="w-10 h-10 text-purple-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">NVMe-SSD Storage</h3>
                        <p className="text-white/70">
                            Blitzschnelle NVMe-SSDs für maximale I/O-Performance und minimale Latenz.
                        </p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                        <Shield className="w-10 h-10 text-blue-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">DDoS-Schutz inklusive</h3>
                        <p className="text-white/70">
                            Automatische Angriffserkennung und -abwehr für maximale Verfügbarkeit.
                        </p>
                    </div>
                </div>
            </div>

            {/* Technical Details */}
            <div className="bg-white/5">
                <div className="container mx-auto px-4 py-20">
                    <h2 className="text-3xl font-bold mb-12 text-center">Technische Details</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="flex items-start gap-4">
                            <Server className="w-6 h-6 text-purple-400 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold mb-2">Dedizierte Hardware</h3>
                                <p className="text-white/70">100% dedizierte Ressourcen ohne Überbuchung</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Wifi className="w-6 h-6 text-blue-400 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold mb-2">Netzwerk</h3>
                                <p className="text-white/70">Redundante 1 Gbit/s Anbindung</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Shield className="w-6 h-6 text-purple-400 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold mb-2">Sicherheit</h3>
                                <p className="text-white/70">Enterprise DDoS-Schutz & Firewall</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <CreditCard className="w-6 h-6 text-blue-400 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold mb-2">Flexible Zahlung</h3>
                                <p className="text-white/70">PayPal, SEPA, Kreditkarte & Crypto</p>
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
                        <HeadsetIcon className="w-12 h-12 text-blue-400 mb-6" />
                        <h3 className="text-2xl font-semibold mb-4">24/7 Expert Support</h3>
                        <p className="text-white/70 mb-6">
                            Unser erfahrenes Support-Team steht Ihnen rund um die Uhr zur Verfügung. Profitieren Sie von:
                        </p>
                        <ul className="space-y-3 text-white/70">
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                Technischer Support per Ticket-System
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                                Schnelle Reaktionszeiten
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                Kompetente Beratung
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                        <Clock className="w-12 h-12 text-purple-400 mb-6" />
                        <h3 className="text-2xl font-semibold mb-4">Garantierte Verfügbarkeit</h3>
                        <p className="text-white/70 mb-6">
                            Wir garantieren höchste Verfügbarkeit durch:
                        </p>
                        <ul className="space-y-3 text-white/70">
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                                Redundante Stromversorgung
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                Klimatisiertes Rechenzentrum
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                                99,9% Uptime-Garantie
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;