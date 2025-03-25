import { useState } from "react";
import { Server, Link as Linux, AppWindow as Windows, Cpu, MemoryStick as Memory, HardDrive, Clock } from 'lucide-react';

type OS = 'linux' | 'windows';
type LinuxDistro = 'debian12' | 'debian11' | 'ubuntu';
type WindowsVersion = 'server2022' | 'server2019';

interface ServerConfig {
    os: OS;
    distro?: LinuxDistro;
    windowsVersion?: WindowsVersion;
    cpu: number;
    ram: number;
    storage: number;
    months: number;
}

function App() {
    const [config, setConfig] = useState<ServerConfig>({
        os: 'linux',
        distro: 'debian12',
        cpu: 1,
        ram: 2,
        storage: 25,
        months: 1
    });

    const calculatePrice = () => {
        const basePrice = config.os === 'windows' ? 30 : 0; //<- Price for OS [Windows : Linux]
        const cpuPrice = config.cpu * 10; //<- Price per CPU Core
        const ramPrice = config.ram * 5; //<- Price per Ram
        const storagePrice = config.storage * 0.5; //<- Price for Storage

        const totalPrice = (basePrice + cpuPrice + ramPrice + storagePrice) * config.months;
        const discount = getDiscount(config.months);

        return (totalPrice * (1 - discount)).toFixed(2);
    };

    const getDiscount = (months: number) => {
        if (months >= 9) return 0.15; // from 9 Month 15% Rabatt
        if (months >= 6) return 0.10; // from 6 Month 10% Rabatt
        if (months >= 3) return 0.05; // from 3 Month 5% Rabatt
        if (months >= 2) return 0.00;
        return 0.00;
    };


    return (
        <div className="min-h-screen bg-[#020230] text-white p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <Server className="w-8 h-8 text-white" />
                    <h1 className="text-3xl font-bold">Root-Server Configuration</h1>
                </div>

                {/* Operating System Selection */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        {config.os === 'linux' ? <Linux className="w-5 h-5" /> : <Windows className="w-5 h-5" />}
                        Betriebssystem
                    </h2>
                    <div className="flex gap-4 mb-4">
                        <button
                            onClick={() => setConfig(prev => ({ ...prev, os: 'linux', distro: 'debian12' }))}
                            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                                config.os === 'linux' ? 'bg-white/20' : 'bg-white/10 hover:bg-white/15'
                            }`}
                        >
                            <Linux className="w-4 h-4" /> Linux
                        </button>
                        <button
                            onClick={() => setConfig(prev => ({ ...prev, os: 'windows', windowsVersion: 'server2022' }))}
                            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                                config.os === 'windows' ? 'bg-white/20' : 'bg-white/10 hover:bg-white/15'
                            }`}
                        >
                            <Windows className="w-4 h-4" /> Windows
                        </button>
                    </div>

                    <select
                        className="w-full bg-[#020230] text-white border border-white/10 rounded-lg p-3 appearance-none focus:outline-none"
                        value={config.os === 'linux' ? config.distro : config.windowsVersion}
                        onChange={(e) => {
                            if (config.os === 'linux') {
                                setConfig(prev => ({ ...prev, distro: e.target.value as LinuxDistro }));
                            } else {
                                setConfig(prev => ({ ...prev, windowsVersion: e.target.value as WindowsVersion }));
                            }
                        }}
                    >
                        {config.os === 'linux' ? (
                            <>
                                <option value="debian12">Debian 12</option>
                                <option value="debian11">Debian 11</option>
                                <option value="ubuntu">Ubuntu Server</option>
                            </>
                        ) : (
                            <>
                                <option value="server2022">Windows Server 2022</option>
                                <option value="server2019">Windows Server 2019</option>
                            </>
                        )}
                    </select>
                </div>

                {/* Hardware Configuration */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Cpu className="w-5 h-5" />
                        Hardware Configuration
                    </h2>

                    <div className="space-y-6">
                        {/* CPU Cores */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="flex items-center gap-2">
                                    <Cpu className="w-4 h-4" />
                                    CPU Cores
                                </label>
                                <span className="text-white/90">{config.cpu} Cores</span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="32"
                                value={config.cpu}
                                onChange={(e) => setConfig(prev => ({ ...prev, cpu: parseInt(e.target.value) }))}
                                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>

                        {/* RAM */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="flex items-center gap-2">
                                    <Memory className="w-4 h-4" />
                                    RAM
                                </label>
                                <span className="text-white/90">{config.ram} GB</span>
                            </div>
                            <input
                                type="range"
                                min="2"
                                max="128"
                                step="2"
                                value={config.ram}
                                onChange={(e) => setConfig(prev => ({ ...prev, ram: parseInt(e.target.value) }))}
                                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>

                        {/* Storage */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="flex items-center gap-2">
                                    <HardDrive className="w-4 h-4" />
                                    Speicher
                                </label>
                                <span className="text-white/90">{config.storage} GB</span>
                            </div>
                            <input
                                type="range"
                                min="25"
                                max="2000"
                                step="25"
                                value={config.storage}
                                onChange={(e) => setConfig(prev => ({ ...prev, storage: parseInt(e.target.value) }))}
                                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>
                    </div>
                </div>

                {/* Runtime Selection */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Clock className="w-5 h-5"/>
                        Mietdauer
                    </h2>
                    <select
                        className="w-full bg-[#020230] text-white border border-white/10 rounded-lg p-3 appearance-none focus:outline-none"
                        value={config.months}
                        onChange={(e) => setConfig(prev => ({...prev, months: parseInt(e.target.value)}))}>

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

                {/* Summary */}
                <div className="bg-blue-600 rounded-lg p-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Gesamtpreis (inkl. MwSt)</h3>
                            <p className="text-white/70">Zahlung {config.months === 1 ? 'Abrechnung' : `alle  ${config.months} Monate`}</p>
                        </div>
                        <div className="text-right">
                            <div className="text-3xl font-bold">€{calculatePrice()}</div>
                            <button
                                className="mt-2 bg-white hover:bg-white/90 text-[#020230] px-6 py-2 rounded-lg font-semibold transition-colors">
                                Server bereitstellen
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;