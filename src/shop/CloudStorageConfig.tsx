import React, { useState } from 'react';
import { HardDrive, Shield, Clock, Database, Check } from 'lucide-react';
import Navbar from '../components/Navbar';

const CloudStorageConfig: React.FC = () => {
    const [storage, setStorage] = useState<number>(100);
    const [months, setMonths] = useState<number>(1);
    const [backupEnabled, setBackupEnabled] = useState<boolean>(true);

    const calculatePrice = () => {
        const storagePrice = storage * 0.15; // 0.15€ pro GB
        const backupPrice = backupEnabled ? Math.ceil(storage * 0.05) : 0; // 5% vom Speicherpreis für Backup

        const monthlyTotal = storagePrice + backupPrice;
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
            storage,
            backup: backupEnabled,
            months
        });
    };

    const storageOptions = [
        { size: 100, label: '100 GB' },
        { size: 250, label: '250 GB' },
        { size: 500, label: '500 GB' },
        { size: 1000, label: '1 TB' },
        { size: 2000, label: '2 TB' },
        { size: 5000, label: '5 TB' }
    ];

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-[#020230] text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold mb-2">Cloud Speicher</h1>
                        <p className="text-white/70">Sicherer und schneller Cloud-Speicher für Ihre Daten</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Storage Selection */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <HardDrive className="w-5 h-5" />
                                Speicherplatz
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {storageOptions.map((option) => (
                                    <div
                                        key={option.size}
                                        className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                                            storage === option.size
                                                ? 'border-cyan-500 bg-cyan-500/10'
                                                : 'border-white/10 hover:border-white/30'
                                        }`}
                                        onClick={() => setStorage(option.size)}
                                    >
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-medium">{option.label}</h3>
                                                <p className="text-sm text-white/70">{(option.size * 0.15).toFixed(2)}€ / Monat</p>
                                            </div>
                                            {storage === option.size && (
                                                <Check className="w-5 h-5 text-cyan-500" />
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Features */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <Shield className="w-5 h-5" />
                                Features
                            </h2>
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-3 p-4 border border-white/10 rounded-lg">
                                        <Shield className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-medium">Ende-zu-Ende Verschlüsselung</h3>
                                            <p className="text-sm text-white/70">Ihre Daten sind sicher verschlüsselt</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 p-4 border border-white/10 rounded-lg">
                                        <Database className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-medium">Redundante Speicherung</h3>
                                            <p className="text-sm text-white/70">Ihre Daten werden mehrfach gesichert</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Backup Option */}
                                <div className="flex items-center justify-between p-4 border border-white/10 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <Database className="w-5 h-5 text-cyan-400" />
                                        <div>
                                            <h3 className="font-medium">Tägliches Backup</h3>
                                            <p className="text-sm text-white/70">Zusätzliche Sicherung Ihrer Daten (+5% vom Speicherpreis)</p>
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
                                onChange={(e) => setMonths(parseInt(e.target.value))}>
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
                                        Jetzt bestellen
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

export default CloudStorageConfig;