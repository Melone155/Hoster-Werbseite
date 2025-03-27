import React, { useState } from 'react';
import { Search, Filter, ArrowUpDown, Mail, Phone } from 'lucide-react';
import Navbar from "../components/Sidebar";

interface Customer {
    id: string;
    name: string;
    email: string;
    phone: string;
    company?: string;
    created_at: string;
    tickets_count: number;
    status: 'active' | 'inactive';
}

const Customeroverview: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive'>('all');
    const [sortBy, setSortBy] = useState<'name' | 'created' | 'tickets'>('created');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

    const [customers] = useState<Customer[]>([
        {
            id: 'CUS001',
            name: 'Max Mustermann',
            email: 'max@example.com',
            phone: '+49 123 456789',
            company: 'Musterfirma GmbH',
            created_at: '2024-01-15',
            tickets_count: 3,
            status: 'active'
        },
        {
            id: 'CUS002',
            name: 'Anna Schmidt',
            email: 'anna@example.com',
            phone: '+49 987 654321',
            created_at: '2024-02-01',
            tickets_count: 1,
            status: 'active'
        },
        {
            id: 'CUS003',
            name: 'Peter Weber',
            email: 'peter@example.com',
            phone: '+49 456 789123',
            company: 'Weber & Co. KG',
            created_at: '2024-02-10',
            tickets_count: 2,
            status: 'inactive'
        }
    ]);

    const getStatusStyles = (status: 'active' | 'inactive'): string => {
        return status === 'active'
            ? 'bg-green-500/20 text-green-200'
            : 'bg-red-500/20 text-red-200';
    };

    const filteredCustomers = customers
        .filter(customer => {
            const matchesSearch =
                customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                customer.id.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesStatus = statusFilter === 'all' || customer.status === statusFilter;
            return matchesSearch && matchesStatus;
        })
        .sort((a, b) => {
            if (sortBy === 'name') {
                return sortOrder === 'asc'
                    ? a.name.localeCompare(b.name)
                    : b.name.localeCompare(a.name);
            }
            if (sortBy === 'created') {
                return sortOrder === 'asc'
                    ? new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
                    : new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
            }
            return sortOrder === 'asc'
                ? a.tickets_count - b.tickets_count
                : b.tickets_count - a.tickets_count;
        });

    const handleSort = (field: 'name' | 'created' | 'tickets') => {
        if (sortBy === field) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(field);
            setSortOrder('asc');
        }
    };

    return (
        <>
        <Navbar />
        <div className="min-h-screen bg-[#020230] text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Kundenübersicht</h1>
                        <p className="text-white/70">Verwalten Sie Ihre Kunden und deren Informationen</p>
                    </div>
                </div>

                {/* Filter Bar */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Suchen nach Name, E-Mail oder Kunden-ID..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-purple-500"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Filter className="text-white/50 w-5 h-5" />
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value as 'all' | 'active' | 'inactive')}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-purple-500"
                            >
                                <option value="all">Alle Status</option>
                                <option value="active">Aktiv</option>
                                <option value="inactive">Inaktiv</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-2">
                            <ArrowUpDown className="text-white/50 w-5 h-5" />
                            <select
                                value={`${sortBy}-${sortOrder}`}
                                onChange={(e) => {
                                    const [field, order] = e.target.value.split('-');
                                    setSortBy(field as 'name' | 'created' | 'tickets');
                                    setSortOrder(order as 'asc' | 'desc');
                                }}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-purple-500"
                            >
                                <option value="name-asc">Name (A-Z)</option>
                                <option value="name-desc">Name (Z-A)</option>
                                <option value="created-desc">Neueste zuerst</option>
                                <option value="created-asc">Älteste zuerst</option>
                                <option value="tickets-desc">Meiste Tickets</option>
                                <option value="tickets-asc">Wenigste Tickets</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Customers Table */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                            <tr className="border-b border-white/10">
                                <th className="text-left p-4 font-semibold">
                                    <button
                                        onClick={() => handleSort('name')}
                                        className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                                    >
                                        Kunde
                                        <ArrowUpDown className="w-4 h-4" />
                                    </button>
                                </th>
                                <th className="text-left p-4 font-semibold">Kontakt</th>
                                <th className="text-left p-4 font-semibold">Unternehmen</th>
                                <th className="text-left p-4 font-semibold">
                                    <button
                                        onClick={() => handleSort('created')}
                                        className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                                    >
                                        Kunde seit
                                        <ArrowUpDown className="w-4 h-4" />
                                    </button>
                                </th>
                                <th className="text-left p-4 font-semibold">
                                    <button
                                        onClick={() => handleSort('tickets')}
                                        className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                                    >
                                        Tickets
                                        <ArrowUpDown className="w-4 h-4" />
                                    </button>
                                </th>
                                <th className="text-left p-4 font-semibold">Status</th>
                                <th className="text-right p-4 font-semibold">Aktionen</th>
                            </tr>
                            </thead>
                            <tbody>
                            {filteredCustomers.map((customer) => (
                                <tr key={customer.id} className="border-b border-white/10 hover:bg-white/5">
                                    <td className="p-4">
                                        <div>
                                            <div className="font-medium">{customer.name}</div>
                                            <div className="text-sm text-white/70">{customer.id}</div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 text-sm">
                                                <Mail className="w-4 h-4 text-white/70" />
                                                <span>{customer.email}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <Phone className="w-4 h-4 text-white/70" />
                                                <span>{customer.phone}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="font-medium">
                                            {customer.company || '-'}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="text-sm text-white/70">
                                            {new Date(customer.created_at).toLocaleDateString('de-DE')}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="font-medium">{customer.tickets_count}</div>
                                    </td>
                                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusStyles(customer.status)}`}>
                        {customer.status === 'active' ? 'Aktiv' : 'Inaktiv'}
                      </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <button className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                                            Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Customeroverview;