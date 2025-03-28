import React from 'react';
import { Cpu, MemoryStick as Memory, HardDrive, MessageSquare, TrendingUp, TrendingDown } from 'lucide-react';
import Navbar from "../components/Sidebar.tsx";

const Statistics: React.FC = () => {
    // Beispieldaten für die Statistiken
    const serverStats = {
        cpu: {
            total: 256,
            used: 180,
            free: 76
        },
        ram: {
            total: 1024,
            used: 768,
            free: 256,
        },
        storage: {
            total: 10240,
            used: 7168,
            free: 3072
        }
    };

    const supportStats = {
        openTickets: 12,
        criticalTickets: 3,
        avgResponseTime: '2.5h'
    };

    const financialStats = {
        income: {
            monthly: 25000,
            yearly: 300000,
            trend: '+15%'
        },
        expenses: {
            monthly: 15000,
            yearly: 180000,
            trend: '+5%'
        }
    };

    const formatBytes = (gb: number): string => {
        if (gb >= 1024) {
            return `${(gb / 1024).toFixed(1)} TB`;
        }
        return `${gb} GB`;
    };

    const formatCurrency = (amount: number): string => {
        return new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(amount);
    };

    return (
        <>
        <Navbar />
        <div className="min-h-screen bg-[#020230] text-white py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8">Statistik Übersicht</h1>

                {/* Server Resources */}
                <div className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Physikalische Server Ressourcen</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* CPU Stats */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Cpu className="w-6 h-6 text-cyan-400" />
                                <h3 className="text-lg font-semibold">CPU Kerne</h3>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-white/70">Gesamt:</span>
                                    <span className="font-medium">{serverStats.cpu.total} Kerne</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-white/70">Verwendet:</span>
                                    <span className="font-medium">{serverStats.cpu.used} Kerne</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-white/70">Frei:</span>
                                    <span className="font-medium text-green-400">{serverStats.cpu.free} Kerne</span>
                                </div>
                                <div className="w-full bg-white/10 rounded-full h-2 mt-4">
                                    <div
                                        className="bg-gradient-to-r from-cyan-400 to-blue-600 h-2 rounded-full"
                                        style={{ width: `${(serverStats.cpu.used / serverStats.cpu.total) * 100}%` }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* RAM Stats */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Memory className="w-6 h-6 text-purple-400" />
                                <h3 className="text-lg font-semibold">RAM</h3>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-white/70">Gesamt:</span>
                                    <span className="font-medium">{formatBytes(serverStats.ram.total)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-white/70">Verwendet:</span>
                                    <span className="font-medium">{formatBytes(serverStats.ram.used)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-white/70">Frei:</span>
                                    <span className="font-medium text-green-400">{formatBytes(serverStats.ram.free)}</span>
                                </div>
                                <div className="w-full bg-white/10 rounded-full h-2 mt-4">
                                    <div
                                        className="bg-gradient-to-r from-purple-400 to-pink-600 h-2 rounded-full"
                                        style={{ width: `${(serverStats.ram.used / serverStats.ram.total) * 100}%` }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Storage Stats */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <HardDrive className="w-6 h-6 text-blue-400" />
                                <h3 className="text-lg font-semibold">Speicher</h3>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-white/70">Gesamt:</span>
                                    <span className="font-medium">{formatBytes(serverStats.storage.total)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-white/70">Verwendet:</span>
                                    <span className="font-medium">{formatBytes(serverStats.storage.used)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-white/70">Frei:</span>
                                    <span className="font-medium text-green-400">{formatBytes(serverStats.storage.free)}</span>
                                </div>
                                <div className="w-full bg-white/10 rounded-full h-2 mt-4">
                                    <div
                                        className="bg-gradient-to-r from-blue-400 to-indigo-600 h-2 rounded-full"
                                        style={{ width: `${(serverStats.storage.used / serverStats.storage.total) * 100}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Support Stats */}
                <div className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Support Übersicht</h2>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-4">
                                <MessageSquare className="w-8 h-8 text-cyan-400" />
                                <div>
                                    <div className="text-2xl font-bold">{supportStats.openTickets}</div>
                                    <div className="text-white/70">Offene Tickets</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <MessageSquare className="w-8 h-8 text-red-400" />
                                <div>
                                    <div className="text-2xl font-bold">{supportStats.criticalTickets}</div>
                                    <div className="text-white/70">Kritische Tickets</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <MessageSquare className="w-8 h-8 text-purple-400" />
                                <div>
                                    <div className="text-2xl font-bold">{supportStats.avgResponseTime}</div>
                                    <div className="text-white/70">Durchschn. Antwortzeit</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Financial Stats */}
                <div>
                    <h2 className="text-2xl font-semibold mb-6">Finanzen</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Income */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <TrendingUp className="w-6 h-6 text-green-400" />
                                <h3 className="text-lg font-semibold">Einnahmen</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <div className="text-white/70 mb-1">Monatlich</div>
                                        <div className="text-2xl font-bold">{formatCurrency(financialStats.income.monthly)}</div>
                                    </div>
                                    <div className="text-green-400 flex items-center">
                                        <TrendingUp className="w-4 h-4 mr-1" />
                                        {financialStats.income.trend}
                                    </div>
                                </div>
                                <div className="flex justify-between items-end">
                                    <div>
                                        <div className="text-white/70 mb-1">Jährlich</div>
                                        <div className="text-2xl font-bold">{formatCurrency(financialStats.income.yearly)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Expenses */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <TrendingDown className="w-6 h-6 text-red-400" />
                                <h3 className="text-lg font-semibold">Ausgaben</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <div className="text-white/70 mb-1">Monatlich</div>
                                        <div className="text-2xl font-bold">{formatCurrency(financialStats.expenses.monthly)}</div>
                                    </div>
                                    <div className="text-red-400 flex items-center">
                                        <TrendingUp className="w-4 h-4 mr-1" />
                                        {financialStats.expenses.trend}
                                    </div>
                                </div>
                                <div className="flex justify-between items-end">
                                    <div>
                                        <div className="text-white/70 mb-1">Jährlich</div>
                                        <div className="text-2xl font-bold">{formatCurrency(financialStats.expenses.yearly)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Statistics;