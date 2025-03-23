import { Shield, Cpu, HardDrive, Wifi, ArrowRight, HeadsetIcon, Clock, Cloud, Settings, Upload } from 'lucide-react';
import {Link} from "react-router-dom";

import backgroundImage from '../assets/virtual-data-center-backround.jpg';

function App() {
    return (
        <div className="min-h-screen bg-[#020230] text-white">
            {/* Hero Section */}
            <div className="relative h-[600px] flex items-center">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 mix-blend-multiply"/>
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
                        Virtual Data Center - Ihre Cloud-Infrastruktur
                    </h1>
                    <p className="text-xl text-white/80 max-w-2xl mb-8">
                        Erstellen Sie Ihre eigene Cloud-Infrastruktur. Volle Kontrolle über VMs,
                        Ressourcen und ISO-Images. Flexibel skalierbar nach Ihren Bedürfnissen.
                    </p>
                    <Link to="/shop/vdc">
                        <button
                            className="bg-gradient-to-r from-purple-500 to-blue-600 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:opacity-90 transition-opacity">
                            Virtual Data Center Anfragen <ArrowRight className="w-5 h-5"/>
                        </button>
                    </Link>
                </div>
            </div>

            {/* Features Grid */}
            <div className="container mx-auto px-4 py-20">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                        <Cloud className="w-10 h-10 text-purple-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Flexible Virtualisierung</h3>
                        <p className="text-white/70">
                            Erstellen Sie beliebig viele VMs mit individueller Ressourcenzuweisung.
                        </p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                        <Settings className="w-10 h-10 text-blue-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Volle Kontrolle</h3>
                        <p className="text-white/70">
                            Root-Zugriff und komplette Verwaltungsrechte über Ihre VMs.
                        </p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                        <Upload className="w-10 h-10 text-purple-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">ISO-Upload</h3>
                        <p className="text-white/70">
                            Laden Sie eigene ISO-Images hoch und installieren Sie beliebige Betriebssysteme.
                        </p>
                    </div>
                </div>
            </div>

            {/* Technical Details */}
            <div className="bg-white/5">
                <div className="container mx-auto px-4 py-20">
                    <h2 className="text-3xl font-bold mb-12 text-center">Virtual Data Center Features</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="flex items-start gap-4">
                            <Cpu className="w-6 h-6 text-purple-400 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold mb-2">Flexible Ressourcen</h3>
                                <p className="text-white/70">CPU, RAM und Storage nach Bedarf</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <HardDrive className="w-6 h-6 text-blue-400 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold mb-2">Schneller Storage</h3>
                                <p className="text-white/70">NVMe-SSDs für maximale Performance</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Shield className="w-6 h-6 text-purple-400 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold mb-2">Sicherheit</h3>
                                <p className="text-white/70">Integrierte Firewall & Backup</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Wifi className="w-6 h-6 text-blue-400 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold mb-2">Netzwerk</h3>
                                <p className="text-white/70">1 Gbit/s Anbindung inklusive</p>
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
                        <HeadsetIcon className="w-12 h-12 text-purple-400 mb-6" />
                        <h3 className="text-2xl font-semibold mb-4">Experten-Support</h3>
                        <p className="text-white/70 mb-6">
                            Unser technisches Team unterstützt Sie bei der VDC-Verwaltung:
                        </p>
                        <ul className="space-y-3 text-white/70">
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                                24/7 Technischer Support
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                Initiale Setup-Hilfe
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                                Umfangreiche Dokumentation
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                        <Clock className="w-12 h-12 text-blue-400 mb-6" />
                        <h3 className="text-2xl font-semibold mb-4">Virtual Data Center Vorteile</h3>
                        <p className="text-white/70 mb-6">
                            Ihr Virtual Data Center bietet Ihnen:
                        </p>
                        <ul className="space-y-3 text-white/70">
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                Hochverfügbare Infrastruktur
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                                99,9% Uptime-Garantie
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                Flexible Skalierung
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;