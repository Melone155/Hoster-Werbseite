Kannst du bitte die Prirität raus machen und gegen so etwas die Frage, Störung, Problem, Technischer Frage, Zahlung Sonstiges erstzen


import React, { useState } from 'react';
import { MessageSquarePlus } from 'lucide-react';

type TicketPriority = 'low' | 'medium' | 'high';
type TicketStatus = 'open' | 'in_progress' | 'closed';

interface Ticket {
    id: number;
    title: string;
    description: string;
    status: TicketStatus;
    priority: TicketPriority;
    created_at: string;
}

interface NewTicketForm {
    title: string;
    description: string;
    priority: TicketPriority;
}

const Support: React.FC = () => {
    const [showNewTicketForm, setShowNewTicketForm] = useState(false);
    const [newTicket, setNewTicket] = useState<NewTicketForm>({
        title: '',
        description: '',
        priority: 'medium'
    });

    const [tickets] = useState<Ticket[]>([
        {
            id: 1,
            title: 'Server Neustart erforderlich',
            description: 'Der Server reagiert langsam und benötigt einen Neustart',
            status: 'open',
            priority: 'high',
            created_at: new Date().toLocaleDateString('de-DE')
        },
        {
            id: 2,
            title: 'SSL-Zertifikat erneuern',
            description: 'Das SSL-Zertifikat läuft in 2 Wochen ab',
            status: 'in_progress',
            priority: 'medium',
            created_at: new Date().toLocaleDateString('de-DE')
        }
    ]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Hier würde normalerweise das neue Ticket gespeichert werden
        console.log('Neues Ticket:', newTicket);
        setShowNewTicketForm(false);
    };

    const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value as TicketPriority;
        setNewTicket(prev => ({ ...prev, priority: value }));
    };

    const getStatusColor = (status: TicketStatus): string => {
        const colors = {
            open: 'bg-blue-500',
            in_progress: 'bg-yellow-500',
            closed: 'bg-green-500'
        };
        return colors[status];
    };

    const getPriorityLabel = (priority: TicketPriority): string => {
        const labels = {
            low: 'Niedrig',
            medium: 'Mittel',
            high: 'Hoch'
        };
        return labels[priority];
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
        <div className="min-h-screen bg-[#020230] text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Support</h1>
                        <p className="text-white/70">Hier können Sie Supportanfragen erstellen und verwalten</p>
                    </div>
                    <button
                        onClick={() => setShowNewTicketForm(true)}
                        className="bg-gradient-to-r from-purple-500 to-blue-600 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
                    >
                        <MessageSquarePlus className="w-5 h-5" />
                        Neues Ticket
                    </button>
                </div>

                {showNewTicketForm && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                        <div className="bg-[#040440] rounded-xl p-6 max-w-md w-full">
                            <h2 className="text-xl font-semibold mb-4">Neues Support-Ticket erstellen</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Titel</label>
                                        <input
                                            type="text"
                                            value={newTicket.title}
                                            onChange={(e) => setNewTicket(prev => ({ ...prev, title: e.target.value }))}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-purple-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Beschreibung</label>
                                        <textarea
                                            value={newTicket.description}
                                            onChange={(e) => setNewTicket(prev => ({ ...prev, description: e.target.value }))}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 h-32 focus:outline-none focus:border-purple-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Priorität</label>
                                        <select
                                            value={newTicket.priority}
                                            onChange={handlePriorityChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-purple-500"
                                        >
                                            <option value="low">Niedrig</option>
                                            <option value="medium">Mittel</option>
                                            <option value="high">Hoch</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex gap-3 mt-6">
                                    <button
                                        type="submit"
                                        className="flex-1 bg-gradient-to-r from-purple-500 to-blue-600 px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                                    >
                                        Ticket erstellen
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setShowNewTicketForm(false)}
                                        className="flex-1 bg-white/5 border border-white/10 px-4 py-2 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                                    >
                                        Abbrechen
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

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
                                            <span className="px-2 py-0.5 rounded-full text-xs bg-white/10">
                        {getPriorityLabel(ticket.priority)}
                      </span>
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
    );
};

export default Support;