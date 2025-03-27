import React, { useState } from 'react';
import { List } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Sidebar";

type TicketStatus = 'open' | 'in_progress' | 'closed';

interface Ticket {
    id: number;
    title: string;
    description: string;
    status: TicketStatus;
    created_at: string;
    assignedTo: string;
}

const MyTickets: React.FC = () => {
    const navigate = useNavigate();
    const [tickets] = useState<Ticket[]>([
        {
            id: 1,
            title: 'Server Neustart erforderlich',
            description: 'Der Server reagiert langsam und benötigt einen Neustart',
            status: 'open',
            created_at: new Date().toLocaleDateString('de-DE'),
            assignedTo: 'Max Mustermann'
        },
        {
            id: 2,
            title: 'SSL-Zertifikat erneuern',
            description: 'Das SSL-Zertifikat läuft in 2 Wochen ab',
            status: 'in_progress',
            created_at: new Date().toLocaleDateString('de-DE'),
            assignedTo: 'Max Mustermann'
        }
    ]);

    const getStatusColor = (status: TicketStatus): string => {
        const colors = {
            open: 'bg-blue-500',
            in_progress: 'bg-yellow-500',
            closed: 'bg-green-500'
        };
        return colors[status];
    };

    const getStatusLabel = (status: TicketStatus): string => {
        const labels = {
            open: 'Offen',
            in_progress: 'In Bearbeitung',
            closed: 'Geschlossen'
        };
        return labels[status];
    };

    const getStatusStyles = (status: TicketStatus): string => {
        const styles = {
            open: 'bg-blue-500/20 text-blue-200',
            in_progress: 'bg-yellow-500/20 text-yellow-200',
            closed: 'bg-green-500/20 text-green-200'
        };
        return styles[status];
    };

    return (
        <>
        <Navbar />
        <div className="min-h-screen bg-[#020230] text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Meine Tickets</h1>
                        <p className="text-white/70">Übersicht Ihrer zugewiesenen Tickets</p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={() => navigate('/support-overview')}
                            className="bg-white/10 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-white/20 transition-colors"
                        >
                            <List className="w-5 h-5" />
                            Alle Tickets
                        </button>
                    </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <div className="space-y-4">
                        {tickets.map((ticket) => (
                            <div
                                key={ticket.id}
                                className="bg-white/5 border border-white/10 rounded-lg p-4 hover:border-purple-500/50 transition-colors"
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">{ticket.title}</h3>
                                        <div className="flex items-center gap-4 text-sm text-white/70">
                                            <span>Erstellt am: {ticket.created_at}</span>
                                            <span>Zugewiesen an: {ticket.assignedTo}</span>
                                        </div>
                                    </div>
                                    <div className={`w-2 h-2 rounded-full ${getStatusColor(ticket.status)}`} />
                                </div>
                                <p className="text-white/70 mb-4">{ticket.description}</p>
                                <div className="flex justify-between items-center">
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusStyles(ticket.status)}`}>
                    {getStatusLabel(ticket.status)}
                  </span>
                                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                                        Details anzeigen
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default MyTickets;