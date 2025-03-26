import { Shield, Cpu, HardDrive, Power, Settings, RefreshCw } from 'lucide-react';
import Navbar from '../components/Sidebar.tsx';

interface Server {
    id: string;
    name: string;
    status: 'online' | 'offline' | 'maintenance';
    type: string;
    ip: string;
    location: string;
    specs: {
        cpu: string;
        ram: string;
        storage: string;
    };
}

const MyServers = () => {
    const servers: Server[] = [
        {
            id: '1',
            name: 'Web Server Pro',
            status: 'online',
            type: 'VPS',
            ip: '192.168.1.1',
            location: 'Frankfurt',
            specs: {
                cpu: '4 vCPU',
                ram: '8 GB RAM',
                storage: '100 GB SSD'
            }
        },
        {
            id: '2',
            name: 'Database Server',
            status: 'online',
            type: 'Dedicated',
            ip: '192.168.1.2',
            location: 'Berlin',
            specs: {
                cpu: '8 vCPU',
                ram: '16 GB RAM',
                storage: '500 GB SSD'
            }
        },
        {
            id: '3',
            name: 'Test Environment',
            status: 'maintenance',
            type: 'VPS',
            ip: '192.168.1.3',
            location: 'München',
            specs: {
                cpu: '2 vCPU',
                ram: '4 GB RAM',
                storage: '50 GB SSD'
            }
        }
    ];

    const getStatusColor = (status: Server['status']) => {
        switch (status) {
            case 'online':
                return 'text-green-400';
            case 'offline':
                return 'text-red-400';
            case 'maintenance':
                return 'text-yellow-400';
            default:
                return 'text-gray-400';
        }
    };

    const getStatusBg = (status: Server['status']) => {
        switch (status) {
            case 'online':
                return 'bg-green-400/10';
            case 'offline':
                return 'bg-red-400/10';
            case 'maintenance':
                return 'bg-yellow-400/10';
            default:
                return 'bg-gray-400/10';
        }
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-[#020230] text-white">
                {/* Hero Section */}
                <div className="relative py-12">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 mix-blend-multiply"/>
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-bold mb-4">Meine Server</h1>
                        <p className="text-white/70 max-w-2xl">
                            Verwalten Sie Ihre Server und behalten Sie die Performance im Blick
                        </p>
                    </div>
                </div>

                {/* Server Grid */}
                <div className="container mx-auto px-4 py-12">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {servers.map((server) => (
                            <div key={server.id} className="group relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"/>
                                <div className="relative bg-[#040440] rounded-xl overflow-hidden">
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <h2 className="text-xl font-semibold">{server.name}</h2>
                                            <div className={`px-3 py-1 rounded-full text-sm ${getStatusBg(server.status)} ${getStatusColor(server.status)}`}>
                                                {server.status}
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="flex items-center gap-2">
                                                    <Cpu className="w-5 h-5 text-cyan-400" />
                                                    <span className="text-white/70">{server.specs.cpu}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <HardDrive className="w-5 h-5 text-cyan-400" />
                                                    <span className="text-white/70">{server.specs.ram}</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <Shield className="w-5 h-5 text-cyan-400" />
                                                <span className="text-white/70">{server.ip}</span>
                                            </div>

                                            <div className="pt-4 border-t border-white/10">
                                                <div className="grid grid-cols-3 gap-2">
                                                    <button className="flex items-center justify-center gap-2 px-3 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors">
                                                        <Settings className="w-4 h-4" />
                                                        <span>Verwalten</span>
                                                    </button>
                                                    <button className="flex items-center justify-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                                                        <Power className="w-4 h-4" />
                                                        <span>Start</span>
                                                    </button>
                                                    <button className="flex items-center justify-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                                                        <RefreshCw className="w-4 h-4" />
                                                        <span>Neustart</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyServers;