import React, { useState } from 'react';
import { Search, Filter, CheckCircle, XCircle, Clock, ArrowUpDown, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Sidebar";

type TicketType = 'question' | 'issue' | 'problem' | 'technical' | 'billing' | 'other';
type TicketStatus = 'open' | 'in_progress' | 'closed';

interface Ticket {
    id: number;
    title: string;
    description: string;
    status: TicketStatus;
    type: TicketType;
    created_at: string;
    customer: {
        name: string;
        email: string;
        id: string;
    };
    lastUpdate: string;
    assignedTo?: string;
}

const Supportoverview: React.FC = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState<TicketStatus | 'all'>('all');
    const [typeFilter, setTypeFilter] = useState<TicketType | 'all'>('all');
    const [sortBy, setSortBy] = useState<'date' | 'status' | 'type'>('date');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

    const [tickets] = useState<Ticket[]>([
        {
            id: 1,
            title: 'Server Neustart erforderlich',
            description: 'Der Server reagiert langsam und benötigt einen Neustart',
            status: 'open',
            type: 'technical',
            created_at: '2024-02-15',
            lastUpdate: '2024-02-15 14:30',
            customer: {
                name: 'Max Mustermann',
                email: 'max@example.com',
                id: 'CUS001'
            },
            assignedTo: 'Support Team A'
        },
        {
            id: 2,
            title: 'SSL-Zertifikat erneuern',
            description: 'Das SSL-Zertifikat läuft in 2 Wochen ab',
            status: 'in_progress',
            type: 'issue',
            created_at: '2024-02-16',
            lastUpdate: '2024-02-16 09:15',
            customer: {
                name: 'Anna Schmidt',
                email: 'anna@example.com',
                id: 'CUS002'
            },
            assignedTo: 'Support Team B'
        },
        {
            id: 3,
            title: 'Zahlungsproblem',
            description: 'Kunde kann keine Zahlung durchführen',
            status: 'open',
            type: 'billing',
            created_at: '2024-02-17',
            lastUpdate: '2024-02-17 11:45',
            customer: {
                name: 'Peter Weber',
                email: 'peter@example.com',
                id: 'CUS003'
            }
        }
    ]);

    const getTypeLabel = (type: TicketType): string => {
        const labels = {
            question: 'Frage',
            issue: 'Störung',
            problem: 'Problem',
            technical: 'Technische Frage',
            billing: 'Zahlung',
            other: 'Sonstiges'
        };
        return labels[type];
    };

    const getStatusLabel = (status: TicketStatus): string => {
        const labels = {
            open: 'Offen',
            in_progress: 'In Bearbeitung',
            closed: 'Geschlossen'
        };
        return labels[status];
    };

    const getStatusIcon = (status: TicketStatus) => {
        switch (status) {
            case 'open':
                return <Clock className="w-4 h-4" />;
            case 'in_progress':
                return <Clock className="w-4 h-4" />;
            case 'closed':
                return <CheckCircle className="w-4 h-4" />;
            default:
                return <XCircle className="w-4 h-4" />;
        }
    };

    const getStatusStyles = (status: TicketStatus): string => {
        const styles = {
            open: 'bg-blue-500/20 text-blue-200',
            in_progress: 'bg-yellow-500/20 text-yellow-200',
            closed: 'bg-green-500/20 text-green-200'
        };
        return styles[status];
    };

    const getTypeStyles = (type: TicketType): string => {
        const styles = {
            question: 'bg-blue-500/20 text-blue-200',
            issue: 'bg-red-500/20 text-red-200',
            problem: 'bg-orange-500/20 text-orange-200',
            technical: 'bg-purple-500/20 text-purple-200',
            billing: 'bg-green-500/20 text-green-200',
            other: 'bg-gray-500/20 text-gray-200'
        };
        return styles[type];
    };

    const filteredTickets = tickets
        .filter(ticket => {
            const matchesSearch = ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                ticket.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                ticket.customer.email.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesStatus = statusFilter === 'all' || ticket.status === statusFilter;
            const matchesType = typeFilter === 'all' || ticket.type === typeFilter;
            return matchesSearch && matchesStatus && matchesType;
        })
        .sort((a, b) => {
            if (sortBy === 'date') {
                return sortOrder === 'asc'
                    ? new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
                    : new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
            }
            if (sortBy === 'status') {
                return sortOrder === 'asc'
                    ? a.status.localeCompare(b.status)
                    : b.status.localeCompare(a.status);
            }
            return sortOrder === 'asc'
                ? a.type.localeCompare(b.type)
                : b.type.localeCompare(a.type);
        });

    const handleSort = (field: 'date' | 'status' | 'type') => {
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
                        <h1 className="text-3xl font-bold mb-2">Support-Übersicht</h1>
                        <p className="text-white/70">Verwalten Sie alle Support-Tickets</p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={() => navigate('/my-tickets')}
                            className="bg-white/10 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-white/20 transition-colors"
                        >
                            <User className="w-5 h-5" />
                            Meine Tickets
                        </button>
                    </div>
                </div>

                {/* Filter Bar */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Suchen..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-purple-500"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Filter className="text-white/50 w-5 h-5" />
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value as TicketStatus | 'all')}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-purple-500"
                            >
                                <option value="all">Alle Status</option>
                                <option value="open">Offen</option>
                                <option value="in_progress">In Bearbeitung</option>
                                <option value="closed">Geschlossen</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-2">
                            <Filter className="text-white/50 w-5 h-5" />
                            <select
                                value={typeFilter}
                                onChange={(e) => setTypeFilter(e.target.value as TicketType | 'all')}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-purple-500"
                            >
                                <option value="all">Alle Typen</option>
                                <option value="question">Frage</option>
                                <option value="issue">Störung</option>
                                <option value="problem">Problem</option>
                                <option value="technical">Technische Frage</option>
                                <option value="billing">Zahlung</option>
                                <option value="other">Sonstiges</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-2">
                            <ArrowUpDown className="text-white/50 w-5 h-5" />
                            <select
                                value={`${sortBy}-${sortOrder}`}
                                onChange={(e) => {
                                    const [field, order] = e.target.value.split('-');
                                    setSortBy(field as 'date' | 'status' | 'type');
                                    setSortOrder(order as 'asc' | 'desc');
                                }}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-purple-500"
                            >
                                <option value="date-desc">Datum (Neueste zuerst)</option>
                                <option value="date-asc">Datum (Älteste zuerst)</option>
                                <option value="status-asc">Status (A-Z)</option>
                                <option value="status-desc">Status (Z-A)</option>
                                <option value="type-asc">Typ (A-Z)</option>
                                <option value="type-desc">Typ (Z-A)</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Tickets Table */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                            <tr className="border-b border-white/10">
                                <th className="text-left p-4 font-semibold">
                                    <button
                                        onClick={() => handleSort('date')}
                                        className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                                    >
                                        Ticket
                                        <ArrowUpDown className="w-4 h-4" />
                                    </button>
                                </th>
                                <th className="text-left p-4 font-semibold">Kunde</th>
                                <th className="text-left p-4 font-semibold">
                                    <button
                                        onClick={() => handleSort('type')}
                                        className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                                    >
                                        Typ
                                        <ArrowUpDown className="w-4 h-4" />
                                    </button>
                                </th>
                                <th className="text-left p-4 font-semibold">
                                    <button
                                        onClick={() => handleSort('status')}
                                        className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                                    >
                                        Status
                                        <ArrowUpDown className="w-4 h-4" />
                                    </button>
                                </th>
                                <th className="text-left p-4 font-semibold">Zugewiesen an</th>
                                <th className="text-left p-4 font-semibold">Letzte Aktualisierung</th>
                                <th className="text-right p-4 font-semibold">Aktionen</th>
                            </tr>
                            </thead>
                            <tbody>
                            {filteredTickets.map((ticket) => (
                                <tr key={ticket.id} className="border-b border-white/10 hover:bg-white/5">
                                    <td className="p-4">
                                        <div>
                                            <div className="font-medium">{ticket.title}</div>
                                            <div className="text-sm text-white/70">#{ticket.id}</div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div>
                                            <div className="font-medium">{ticket.customer.name}</div>
                                            <div className="text-sm text-white/70">{ticket.customer.email}</div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${getTypeStyles(ticket.type)}`}>
                          {getTypeLabel(ticket.type)}
                        </span>
                                    </td>
                                    <td className="p-4">
                        <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs ${getStatusStyles(ticket.status)}`}>
                          {getStatusIcon(ticket.status)}
                            {getStatusLabel(ticket.status)}
                        </span>
                                    </td>
                                    <td className="p-4">
                                        <div className="font-medium">
                                            {ticket.assignedTo || 'Nicht zugewiesen'}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="text-sm text-white/70">{ticket.lastUpdate}</div>
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

export default Supportoverview;