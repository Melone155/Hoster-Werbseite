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
    // Beispiel-Daten (später durch echte API-Daten ersetzen)
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
                return 'bg-green-500';
            case 'offline':
                return 'bg-red-500';
            case 'maintenance':
                return 'bg-yellow-500';
            default:
                return 'bg-gray-500';
        }
    };

    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Meine Server</h1>
                <p className="text-gray-600">Übersicht und Verwaltung Ihrer Server</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {servers.map((server) => (
                    <div key={server.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-semibold text-gray-900">{server.name}</h2>
                                <div className="flex items-center">
                                    <div className={`w-3 h-3 rounded-full ${getStatusColor(server.status)} mr-2`}></div>
                                    <span className="text-sm text-gray-600 capitalize">{server.status}</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Typ:</span>
                                    <span className="text-gray-900">{server.type}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">IP-Adresse:</span>
                                    <span className="text-gray-900">{server.ip}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Standort:</span>
                                    <span className="text-gray-900">{server.location}</span>
                                </div>

                                <div className="pt-3 border-t border-gray-200">
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div>
                                            <div className="text-xs text-gray-600">CPU</div>
                                            <div className="text-sm font-medium text-gray-900">{server.specs.cpu}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-600">RAM</div>
                                            <div className="text-sm font-medium text-gray-900">{server.specs.ram}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-600">Storage</div>
                                            <div className="text-sm font-medium text-gray-900">{server.specs.storage}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex space-x-3">
                                <button className="flex-1 bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-600 transition-colors">
                                    Verwalten
                                </button>
                                <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors">
                                    Neustart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyServers;