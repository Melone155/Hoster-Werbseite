import React, { useState } from 'react';
import { Plus, ArrowUpDown, Search, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Sidebar';

interface PhysicalServer {
    id: string;
    name: string;
    cpu: string;
    ram: number;
    storage: number;
    ip: string;
    status: 'online' | 'offline' | 'maintenance';
}

const PhysicalServers: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showAddPhysicalServer, setShowAddPhysicalServer] = useState(false);
    const [newPhysicalServer, setNewPhysicalServer] = useState<Omit<PhysicalServer, 'id' | 'status'>>({
        name: '',
        cpu: '',
        ram: 0,
        storage: 0,
        ip: ''
    });

    const [physicalServers, setPhysicalServers] = useState<PhysicalServer[]>([
        {
            id: 'PS-001',
            name: 'Database Server',
            cpu: 'Intel Xeon E5-2680 v4',
            ram: 64,
            storage: 2048,
            ip: '192.168.1.100',
            status: 'online'
        },
        {
            id: 'PS-002',
            name: 'Application Server',
            cpu: 'AMD EPYC 7402P',
            ram: 128,
            storage: 4096,
            ip: '192.168.1.101',
            status: 'online'
        }
    ]);

    const handleAddPhysicalServer = (e: React.FormEvent) => {
        e.preventDefault();
        const newServer: PhysicalServer = {
            id: `PS-${String(physicalServers.length + 1).padStart(3, '0')}`,
            status: 'online',
            ...newPhysicalServer
        };
        setPhysicalServers([...physicalServers, newServer]);
        setShowAddPhysicalServer(false);
        setNewPhysicalServer({
            name: '',
            cpu: '',
            ram: 0,
            storage: 0,
            ip: ''
        });
    };

    const getStatusStyles = (status: 'online' | 'offline' | 'maintenance') => {
        switch (status) {
            case 'online':
                return 'bg-green-500/20 text-green-400';
            case 'offline':
                return 'bg-red-500/20 text-red-400';
            case 'maintenance':
                return 'bg-yellow-500/20 text-yellow-400';
            default:
                return 'bg-gray-500/20 text-gray-400';
        }
    };

    const filteredServers = physicalServers.filter(server =>
        server.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        server.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        server.cpu.toLowerCase().includes(searchTerm.toLowerCase()) ||
        server.ip.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-[#020230] text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-3xl font-bold mb-2">Physische Server</h1>
                            <p className="text-white/70">Übersicht aller physischen Server</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link
                                to="/dashboard/server"
                                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-lg transition-colors">
                                <ArrowLeft className="w-5 h-5" />
                                Zurück zu virtuellen Servern
                            </Link>
                            <button
                                onClick={() => setShowAddPhysicalServer(true)}
                                className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors">
                                <Plus className="w-5 h-5" />
                                Server hinzufügen
                            </button>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="mb-6">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Server suchen..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-cyan-500"
                            />
                        </div>
                    </div>

                    {/* Servers Table */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left p-4 font-semibold">
                                        <div className="flex items-center gap-2">
                                            ID
                                            <ArrowUpDown className="w-4 h-4" />
                                        </div>
                                    </th>
                                    <th className="text-left p-4 font-semibold">Status</th>
                                    <th className="text-left p-4 font-semibold">Name</th>
                                    <th className="text-left p-4 font-semibold">CPU</th>
                                    <th className="text-left p-4 font-semibold">RAM</th>
                                    <th className="text-left p-4 font-semibold">Speicher</th>
                                    <th className="text-left p-4 font-semibold">IP-Adresse</th>
                                    <th className="text-right p-4 font-semibold">Aktionen</th>
                                </tr>
                                </thead>
                                <tbody>
                                {filteredServers.map((server) => (
                                    <tr key={server.id} className="border-b border-white/10 hover:bg-white/5">
                                        <td className="p-4 font-medium">{server.id}</td>
                                        <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusStyles(server.status)}`}>
                          {server.status === 'online' ? 'Online' :
                              server.status === 'offline' ? 'Offline' : 'Wartung'}
                        </span>
                                        </td>
                                        <td className="p-4">{server.name}</td>
                                        <td className="p-4">{server.cpu}</td>
                                        <td className="p-4">{server.ram} GB</td>
                                        <td className="p-4">{server.storage} GB</td>
                                        <td className="p-4">{server.ip}</td>
                                        <td className="p-4 text-right">
                                            <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                                                Details
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Add Physical Server Modal */}
                    {showAddPhysicalServer && (
                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                            <div className="bg-[#040440] rounded-xl p-6 max-w-md w-full">
                                <h2 className="text-xl font-semibold mb-4">Physischen Server hinzufügen</h2>
                                <form onSubmit={handleAddPhysicalServer}>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Name</label>
                                            <input
                                                type="text"
                                                value={newPhysicalServer.name}
                                                onChange={(e) => setNewPhysicalServer(prev => ({ ...prev, name: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">CPU</label>
                                            <input
                                                type="text"
                                                value={newPhysicalServer.cpu}
                                                onChange={(e) => setNewPhysicalServer(prev => ({ ...prev, cpu: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">RAM (GB)</label>
                                            <input
                                                type="number"
                                                value={newPhysicalServer.ram}
                                                onChange={(e) => setNewPhysicalServer(prev => ({ ...prev, ram: Number(e.target.value) }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Speicher (GB)</label>
                                            <input
                                                type="number"
                                                value={newPhysicalServer.storage}
                                                onChange={(e) => setNewPhysicalServer(prev => ({ ...prev, storage: Number(e.target.value) }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">IP-Adresse</label>
                                            <input
                                                type="text"
                                                value={newPhysicalServer.ip}
                                                onChange={(e) => setNewPhysicalServer(prev => ({ ...prev, ip: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-3 mt-6">
                                        <button
                                            type="submit"
                                            className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
                                        >
                                            Server hinzufügen
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowAddPhysicalServer(false)}
                                            className="flex-1 bg-white/5 border border-white/10 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
                                        >
                                            Abbrechen
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default PhysicalServers;