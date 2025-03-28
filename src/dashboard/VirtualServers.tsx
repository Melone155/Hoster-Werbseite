import React, { useState } from 'react';
import { Plus, ArrowUpDown, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Sidebar';

interface VirtualServer {
    id: string;
    vCPU: number;
    ram: number;
    storage: number;
    os: string;
    owner: string;
    status: 'online' | 'offline' | 'maintenance';
}

const VirtualServers: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showAddVirtualServer, setShowAddVirtualServer] = useState(false);
    const [newVirtualServer, setNewVirtualServer] = useState<Omit<VirtualServer, 'id' | 'status'>>({
        vCPU: 1,
        ram: 1,
        storage: 10,
        os: '',
        owner: ''
    });

    const [virtualServers, setVirtualServers] = useState<VirtualServer[]>([
        {
            id: 'VS-001',
            vCPU: 4,
            ram: 8,
            storage: 256,
            os: 'Ubuntu 22.04 LTS',
            owner: 'Max Mustermann',
            status: 'online'
        },
        {
            id: 'VS-002',
            vCPU: 2,
            ram: 4,
            storage: 128,
            os: 'Windows Server 2022',
            owner: 'Anna Schmidt',
            status: 'maintenance'
        },
        {
            id: 'VS-003',
            vCPU: 8,
            ram: 16,
            storage: 512,
            os: 'Debian 11',
            owner: 'Peter Weber',
            status: 'online'
        }
    ]);

    const handleAddVirtualServer = (e: React.FormEvent) => {
        e.preventDefault();
        const newServer: VirtualServer = {
            id: `VS-${String(virtualServers.length + 1).padStart(3, '0')}`,
            status: 'online',
            ...newVirtualServer
        };
        setVirtualServers([...virtualServers, newServer]);
        setShowAddVirtualServer(false);
        setNewVirtualServer({
            vCPU: 1,
            ram: 1,
            storage: 10,
            os: '',
            owner: ''
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

    const filteredServers = virtualServers.filter(server =>
        server.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        server.os.toLowerCase().includes(searchTerm.toLowerCase()) ||
        server.owner.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-[#020230] text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-3xl font-bold mb-2">Virtuelle Server</h1>
                            <p className="text-white/70">Übersicht aller gemieteten virtuellen Server</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link
                                to="/dashboard/physical-servers"
                                className="bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-lg transition-colors"
                            >
                                Physische Server
                            </Link>
                            <button
                                onClick={() => setShowAddVirtualServer(true)}
                                className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
                            >
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
                                    <th className="text-left p-4 font-semibold">vCPU</th>
                                    <th className="text-left p-4 font-semibold">RAM</th>
                                    <th className="text-left p-4 font-semibold">Speicher</th>
                                    <th className="text-left p-4 font-semibold">Betriebssystem</th>
                                    <th className="text-left p-4 font-semibold">Besitzer</th>
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
                                        <td className="p-4">{server.vCPU} vCPU</td>
                                        <td className="p-4">{server.ram} GB</td>
                                        <td className="p-4">{server.storage} GB</td>
                                        <td className="p-4">{server.os}</td>
                                        <td className="p-4">{server.owner}</td>
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

                    {/* Add Virtual Server Modal */}
                    {showAddVirtualServer && (
                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                            <div className="bg-[#040440] rounded-xl p-6 max-w-md w-full">
                                <h2 className="text-xl font-semibold mb-4">Virtuellen Server hinzufügen</h2>
                                <form onSubmit={handleAddVirtualServer}>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-1">vCPU</label>
                                            <input
                                                type="number"
                                                min="1"
                                                value={newVirtualServer.vCPU}
                                                onChange={(e) => setNewVirtualServer(prev => ({ ...prev, vCPU: Number(e.target.value) }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">RAM (GB)</label>
                                            <input
                                                type="number"
                                                min="1"
                                                value={newVirtualServer.ram}
                                                onChange={(e) => setNewVirtualServer(prev => ({ ...prev, ram: Number(e.target.value) }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Speicher (GB)</label>
                                            <input
                                                type="number"
                                                min="10"
                                                value={newVirtualServer.storage}
                                                onChange={(e) => setNewVirtualServer(prev => ({ ...prev, storage: Number(e.target.value) }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Betriebssystem</label>
                                            <input
                                                type="text"
                                                value={newVirtualServer.os}
                                                onChange={(e) => setNewVirtualServer(prev => ({ ...prev, os: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Besitzer</label>
                                            <input
                                                type="text"
                                                value={newVirtualServer.owner}
                                                onChange={(e) => setNewVirtualServer(prev => ({ ...prev, owner: e.target.value }))}
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
                                            onClick={() => setShowAddVirtualServer(false)}
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

export default VirtualServers;