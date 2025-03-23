import { Shield, ArrowRight, HeadsetIcon, Clock, Database, Lock, Smartphone, Share2, FolderSync } from 'lucide-react';
import {Link} from "react-router-dom";

import backgroundImage from '../assets/cloud-backround.jpeg';

function App() {
    return (
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
                        Sicherer Cloud-Speicher für Ihre Daten
                    </h1>
                    <p className="text-xl text-white/80 max-w-2xl mb-8">
                        Speichern, synchronisieren und teilen Sie Ihre Daten sicher und einfach.
                        Zugriff von überall - über Browser, App oder Samba-Verbindung.
                    </p>
                    <Link to="/shop/cloud-storage">
                        <button
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:opacity-90 transition-opacity">
                            Cloud-Speicher einrichten <ArrowRight className="w-5 h-5"/>
                        </button>
                    </Link>
                </div>
            </div>

            {/* Features Grid */}
            <div className="container mx-auto px-4 py-20">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                        <Share2 className="w-10 h-10 text-cyan-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Flexibler Zugriff</h3>
                        <p className="text-white/70">
                            Greifen Sie über Browser, Mobile App oder Samba auf Ihre Daten zu.
                        </p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                        <Database className="w-10 h-10 text-blue-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Großer Speicherplatz</h3>
                        <p className="text-white/70">
                            Bis zu 10TB Speicherplatz für all Ihre wichtigen Daten und Dokumente.
                        </p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                        <Lock className="w-10 h-10 text-cyan-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Verschlüsselt & Sicher</h3>
                        <p className="text-white/70">
                            End-to-End Verschlüsselung für maximale Sicherheit Ihrer Daten.
                        </p>
                    </div>
                </div>
            </div>

            {/* Technical Details */}
            <div className="bg-white/5">
                <div className="container mx-auto px-4 py-20">
                    <h2 className="text-3xl font-bold mb-12 text-center">Cloud Features</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="flex items-start gap-4">
                            <FolderSync className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold mb-2">Automatische Synchronisation</h3>
                                <p className="text-white/70">Alle Geräte immer auf dem neuesten Stand</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Smartphone className="w-6 h-6 text-blue-400 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold mb-2">Mobile Apps</h3>
                                <p className="text-white/70">iOS und Android Apps verfügbar</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Shield className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold mb-2">Backup-Service</h3>
                                <p className="text-white/70">Automatische Backups Ihrer Daten</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Share2 className="w-6 h-6 text-blue-400 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold mb-2">Dateien teilen</h3>
                                <p className="text-white/70">Einfaches Teilen mit Freigabelinks</p>
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
                            Unser Support-Team hilft Ihnen bei allen Fragen zu Ihrem Cloud-Speicher:
                        </p>
                        <ul className="space-y-3 text-white/70">
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                                24/7 Ticket-Support
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                Setup-Hilfe
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                                Einrichtungsanleitungen
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                        <Clock className="w-12 h-12 text-blue-400 mb-6" />
                        <h3 className="text-2xl font-semibold mb-4">Cloud Features</h3>
                        <p className="text-white/70 mb-6">
                            Alle Vorteile unseres Cloud-Speichers auf einen Blick:
                        </p>
                        <ul className="space-y-3 text-white/70">
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                Verschlüsselte Übertragung
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                                99,9% Verfügbarkeit
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
    );
}

export default App;