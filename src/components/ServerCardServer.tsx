import React from 'react';

interface ServerProps {
    name: string;
    isOnline: boolean;
    type: string;
    ip: string;
    location: string;
    specs: {
        cpu: string;
        ram: string;
        storage: string;
    };
}

const ServerCard: React.FC<ServerProps> = ({ name, isOnline, type, ip, location, specs }) => {
    return (
        <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
                <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`} />
                    <span className="text-gray-600">{isOnline ? 'Online' : 'Offline'}</span>
                </div>
            </div>

            <div className="space-y-3 mb-8">
                <div className="flex justify-between">
                    <span className="text-gray-600">Typ:</span>
                    <span className="font-medium text-gray-900">{type}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">IP-Adresse:</span>
                    <span className="font-medium text-gray-900">{ip}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Standort:</span>
                    <span className="font-medium text-gray-900">{location}</span>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                    <div className="text-gray-600 mb-1">CPU</div>
                    <div className="font-medium text-gray-900">{specs.cpu}</div>
                </div>
                <div className="text-center">
                    <div className="text-gray-600 mb-1">RAM</div>
                    <div className="font-medium text-gray-900">{specs.ram}</div>
                </div>
                <div className="text-center">
                    <div className="text-gray-600 mb-1">Storage</div>
                    <div className="font-medium text-gray-900">{specs.storage}</div>
                </div>
            </div>

            <div className="flex gap-4">
                <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    Verwalten
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                    Neustart
                </button>
            </div>
        </div>
    );
};

export default ServerCard;