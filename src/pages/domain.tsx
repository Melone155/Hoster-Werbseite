import { useState } from 'react';
import { Search, Globe, Shield, Settings, ArrowRight } from 'lucide-react';
import Navbar from "../components/Navbar.tsx";

function Domains() {
    const [domainName, setDomainName] = useState('');

    const features = [
        {
            title: "Kostenlose DNS-Verwaltung",
            description: "Verwalten Sie Ihre DNS-Einträge einfach über unser Control Panel",
            icon: Settings
        },
        {
            title: "Domain-Schutz inklusive",
            description: "WHOIS-Schutz und Transfer-Sperre für maximale Sicherheit",
            icon: Shield
        },
        {
            title: "Automatische Verlängerung",
            description: "Nie wieder eine Domain verlieren durch automatische Verlängerung",
            icon: Globe
        }
    ];

    const tlds = [
        { name: ".de", price: "0,90€", popular: true },
        { name: ".com", price: "1,20€", popular: true },
        { name: ".net", price: "1,20€", popular: false },
        { name: ".org", price: "1,20€", popular: false },
        { name: ".eu", price: "0,90€", popular: false },
        { name: ".info", price: "0,90€", popular: false }
    ];

    return (
        <>
        <Navbar />
        <div className="min-h-screen bg-[#020230] text-white">
            {/* Hero Section */}
            <div className="relative py-20">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10" />
                <div className="container mx-auto px-4 relative">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Finden Sie Ihre perfekte Domain
                        </h1>
                        <p className="text-xl text-white/80 mb-8">
                            Sichern Sie sich Ihre einzigartige Web-Adresse aus über 300 Domain-Endungen
                        </p>

                        {/* Domain Search */}
                        <div className="bg-white/5 p-2 rounded-lg backdrop-blur-sm border border-white/10">
                            <div className="flex">
                                <div className="flex-grow">
                                    <input
                                        type="text"
                                        placeholder="Ihre Wunschdomain..."
                                        value={domainName}
                                        onChange={(e) => setDomainName(e.target.value)}
                                        className="w-full bg-transparent px-4 py-3 text-white placeholder-white/50 focus:outline-none"
                                    />
                                </div>
                                <button className="bg-gradient-to-r from-purple-500 to-blue-600 px-6 py-3 rounded-md flex items-center gap-2 hover:opacity-90 transition-opacity">
                                    <Search className="w-5 h-5" />
                                    <span className="hidden md:inline">Domain suchen</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popular TLDs */}
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold mb-12 text-center">Beliebte Domain-Endungen</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {tlds.map((tld) => (
                        <div key={tld.name} className={`bg-white/5 backdrop-blur-sm border ${tld.popular ? 'border-purple-500/50' : 'border-white/10'} rounded-xl p-6 text-center relative group hover:border-purple-500/50 transition-colors`}>
                            {tld.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-500 text-xs px-2 py-1 rounded-full">
                                    Beliebt
                                </div>
                            )}
                            <h3 className="text-2xl font-bold mb-2">{tld.name}</h3>
                            <p className="text-white/70">ab {tld.price}/Monat</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Features */}
            <div className="bg-white/5 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Inklusive Services</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature) => (
                            <div key={feature.title} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-white/70">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="container mx-auto px-4 py-20">
                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl font-bold mb-4">Bereit für Ihre neue Domain?</h2>
                    <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                        Starten Sie jetzt mit einer professionellen Domain für Ihr Projekt
                    </p>
                    <button className="bg-gradient-to-r from-purple-500 to-blue-600 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:opacity-90 transition-opacity mx-auto">
                        Domain registrieren <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Domains;