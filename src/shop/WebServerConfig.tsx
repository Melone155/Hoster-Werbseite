import React, { useState } from 'react';
import { Database, Globe, Shield, Box, Check, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';

interface CMSOption {
    id: string;
    name: string;
    version: string;
    description: string;
    price: number;
}

const WebServerConfig: React.FC = () => {
    const [selectedCMS, setSelectedCMS] = useState<string>('');
    const [selectedDatabase, setSelectedDatabase] = useState<string>('mysql');
    const [sslEnabled, setSSLEnabled] = useState<boolean>(true);
    const [backupEnabled, setBackupEnabled] = useState<boolean>(true);
    const [storage, setStorage] = useState<number>(10);
    const [months, setMonths] = useState<number>(1);

    const cmsOptions: CMSOption[] = [
        {
            id: 'wordpress',
            name: 'WordPress',
            version: '6.4',
            description: 'Perfekt für Blogs, Websites und Online-Shops. Einfach zu bedienen mit vielen Themes und Plugins.',
            price: 5
        },
        {
            id: 'joomla',
            name: 'Joomla',
            version: '4.4',
            description: 'Vielseitiges CMS für Websites und Online-Shops mit umfangreichen Funktionen.',
            price: 5
        },
        {
            id: 'drupal',
            name: 'Drupal',
            version: '10.1',
            description: 'Professionelles CMS für große Websites und komplexe Anforderungen.',
            price: 7
        }
    ];

    const calculatePrice = () => {
        const basePrice = 10; // Grundpreis für den Server
        const cmsPrice = selectedCMS ? cmsOptions.find(cms => cms.id === selectedCMS)?.price || 0 : 0;
        const storagePrice = storage * 0.5; // 0.50€ pro GB
        const backupPrice = backupEnabled ? 5 : 0;

        const monthlyTotal = basePrice + cmsPrice + storagePrice + backupPrice;
        const total = monthlyTotal * months;

        // Rabatte basierend auf der Laufzeit
        const discount = getDiscount(months);
        return (total * (1 - discount)).toFixed(2);
    };

    const getDiscount = (months: number) => {
        if (months >= 12) return 0.20; // 20% Rabatt ab 12 Monaten
        if (months >= 6) return 0.10;  // 10% Rabatt ab 6 Monaten
        if (months >= 3) return 0.05;  // 5% Rabatt ab 3 Monaten
        return 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({
            cms: selectedCMS,
            database: selectedDatabase,
            ssl: sslEnabled,
            backup: backupEnabled,
            storage,
            months
        });
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-[#020230] text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold mb-2">Web Server Konfiguration</h1>
                        <p className="text-white/70">Erstellen Sie Ihren individuellen Web Server</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* CMS Selection */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <Globe className="w-5 h-5" />
                                Content Management System (CMS)
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {cmsOptions.map((cms) => (
                                    <div
                                        key={cms.id}
                                        className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                                            selectedCMS === cms.id
                                                ? 'border-cyan-500 bg-cyan-500/10'
                                                : 'border-white/10 hover:border-white/30'
                                        }`}
                                        onClick={() => setSelectedCMS(cms.id)}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="font-medium">{cms.name}</h3>
                                                <p className="text-sm text-white/70">Version {cms.version}</p>
                                            </div>
                                            {selectedCMS === cms.id && (
                                                <Check className="w-5 h-5 text-cyan-500" />
                                            )}
                                        </div>
                                        <p className="text-sm text-white/70 mb-3">{cms.description}</p>
                                        <p className="text-sm font-medium text-cyan-400">+{cms.price}€ / Monat</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Database Selection */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <Database className="w-5 h-5" />
                                Datenbank
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div
                                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                                        selectedDatabase === 'mysql'
                                            ? 'border-cyan-500 bg-cyan-500/10'
                                            : 'border-white/10 hover:border-white/30'
                                    }`}
                                    onClick={() => setSelectedDatabase('mysql')}
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-medium">MySQL</h3>
                                            <p className="text-sm text-white/70">Bewährte und weit verbreitete Datenbank</p>
                                        </div>
                                        {selectedDatabase === 'mysql' && (
                                            <Check className="w-5 h-5 text-cyan-500" />
                                        )}
                                    </div>
                                </div>
                                <div
                                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                                        selectedDatabase === 'mariadb'
                                            ? 'border-cyan-500 bg-cyan-500/10'
                                            : 'border-white/10 hover:border-white/30'
                                    }`}
                                    onClick={() => setSelectedDatabase('mariadb')}
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-medium">MariaDB</h3>
                                            <p className="text-sm text-white/70">MySQL-kompatible Alternative mit zusätzlichen Features</p>
                                        </div>
                                        {selectedDatabase === 'mariadb' && (
                                            <Check className="w-5 h-5 text-cyan-500" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional Options */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <Box className="w-5 h-5" />
                                Weitere Optionen
                            </h2>
                            <div className="space-y-6">
                                {/* SSL */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Shield className="w-5 h-5 text-cyan-400" />
                                        <div>
                                            <h3 className="font-medium">SSL-Verschlüsselung</h3>
                                            <p className="text-sm text-white/70">Kostenfreies SSL-Zertifikat für Ihre Domain</p>
                                        </div>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={sslEnabled}
                                            onChange={(e) => setSSLEnabled(e.target.checked)}
                                        />
                                        <div className="w-11 h-6 bg-white/10 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-500/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                                    </label>
                                </div>

                                {/* Backup */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Box className="w-5 h-5 text-cyan-400" />
                                        <div>
                                            <h3 className="font-medium">Tägliches Backup</h3>
                                            <p className="text-sm text-white/70">Automatische Sicherung Ihrer Daten (+5€ / Monat)</p>
                                        </div>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={backupEnabled}
                                            onChange={(e) => setBackupEnabled(e.target.checked)}
                                        />
                                        <div className="w-11 h-6 bg-white/10 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-500/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                                    </label>
                                </div>

                                {/* Storage */}
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <Database className="w-5 h-5 text-cyan-400" />
                                        <div>
                                            <h3 className="font-medium">Speicherplatz</h3>
                                            <p className="text-sm text-white/70">Wählen Sie den benötigten Speicherplatz (0,50€ pro GB)</p>
                                        </div>
                                    </div>
                                    <input
                                        type="range"
                                        min="10"
                                        max="100"
                                        step="10"
                                        value={storage}
                                        onChange={(e) => setStorage(Number(e.target.value))}
                                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                                    />
                                    <div className="flex justify-between text-sm mt-2">
                                        <span>{storage} GB</span>
                                        <span className="text-white/70">Max: 100 GB</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Duration Selection */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <Clock className="w-5 h-5" />
                                Laufzeit
                            </h2>
                            <select
                                className="w-full bg-[#020230] text-white border border-white/10 rounded-lg p-3 appearance-none focus:outline-none"
                                value={months}
                                onChange={(e) => setMonths(parseInt(e.target.value))}
                            >
                                <option value="1">1 Monat</option>
                                <option value="2">2 Monate</option>
                                <option value="3">3 Monate</option>
                                <option value="4">4 Monate</option>
                                <option value="5">5 Monate</option>
                                <option value="6">6 Monate</option>
                                <option value="7">7 Monate</option>
                                <option value="8">8 Monate</option>
                                <option value="9">9 Monate</option>
                                <option value="10">10 Monate</option>
                                <option value="11">11 Monate</option>
                                <option value="12">12 Monate</option>
                            </select>
                        </div>

                        {/* Summary and Submit */}
                        <div className="bg-blue-600 rounded-lg p-6">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Gesamtpreis (inkl. MwSt)</h3>
                                    <p className="text-white/70">
                                        Zahlung {months === 1 ? 'monatlich' : `alle ${months} Monate`}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <div className="text-3xl font-bold">€{calculatePrice()}</div>
                                    <button
                                        type="submit"
                                        className="mt-2 bg-white hover:bg-white/90 text-[#020230] px-6 py-2 rounded-lg font-semibold transition-colors"
                                    >
                                        Server bereitstellen
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default WebServerConfig;