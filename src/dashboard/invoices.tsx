import { FileText, Download, Euro, Calendar, CheckCircle } from 'lucide-react';
import Navbar from '../components/Sidebar';

interface Invoice {
    id: string;
    orderRef: string;
    product: string;
    date: string;
    dueDate: string;
    amount: number;
    status: 'paid' | 'pending' | 'overdue';
    pdfUrl: string;
}

const Invoices = () => {
    const invoices: Invoice[] = [
        {
            id: 'INV-2024-001',
            orderRef: 'ORD-2024-001',
            product: 'Root Server Pro X64',
            date: '15.02.2024',
            dueDate: '29.02.2024',
            amount: 49.99,
            status: 'paid',
            pdfUrl: '/invoices/INV-2024-001.pdf'
        },
        {
            id: 'INV-2024-002',
            orderRef: 'ORD-2024-002',
            product: 'Web Hosting Premium',
            date: '18.02.2024',
            dueDate: '03.03.2024',
            amount: 29.99,
            status: 'pending',
            pdfUrl: '/invoices/INV-2024-002.pdf'
        },
        {
            id: 'INV-2024-003',
            orderRef: 'ORD-2024-003',
            product: 'Cloud Storage 500GB',
            date: '20.02.2024',
            dueDate: '05.03.2024',
            amount: 19.99,
            status: 'pending',
            pdfUrl: '/invoices/INV-2024-003.pdf'
        },
        {
            id: 'INV-2024-004',
            orderRef: 'ORD-2024-004',
            product: 'VPS Server Basic',
            date: '10.02.2024',
            dueDate: '24.02.2024',
            amount: 39.99,
            status: 'overdue',
            pdfUrl: '/invoices/INV-2024-004.pdf'
        }
    ];

    const getStatusColor = (status: Invoice['status']) => {
        switch (status) {
            case 'paid':
                return 'text-green-400';
            case 'pending':
                return 'text-yellow-400';
            case 'overdue':
                return 'text-red-400';
            default:
                return 'text-gray-400';
        }
    };

    const getStatusBg = (status: Invoice['status']) => {
        switch (status) {
            case 'paid':
                return 'bg-green-400/10';
            case 'pending':
                return 'bg-yellow-400/10';
            case 'overdue':
                return 'bg-red-400/10';
            default:
                return 'bg-gray-400/10';
        }
    };

    const handleDownload = (invoice: Invoice) => {
        //Downloade the PDF Dokument
        console.log('Downloading invoice:', invoice.id);
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-[#020230] text-white">
                {/* Hero Section */}
                <div className="relative py-12">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 mix-blend-multiply"/>
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-bold mb-4">Rechnungen</h1>
                        <p className="text-white/70 max-w-2xl">
                            Alle Ihre Rechnungen auf einen Blick - einfach herunterladen und verwalten
                        </p>
                    </div>
                </div>

                {/* Invoices Section */}
                <div className="container mx-auto px-4 py-12">
                    <div className="grid gap-6">
                        {invoices.map((invoice) => (
                            <div key={invoice.id} className="group relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"/>
                                <div className="relative bg-[#040440] rounded-xl overflow-hidden">
                                    <div className="p-6">
                                        <div className="flex flex-wrap items-center justify-between gap-4">
                                            <div className="flex items-center gap-4">
                                                <FileText className="w-8 h-8 text-cyan-400" />
                                                <div>
                                                    <h2 className="text-xl font-semibold">{invoice.product}</h2>
                                                    <p className="text-white/70 text-sm">Rechnungs-Nr.: {invoice.id}</p>
                                                    <p className="text-white/70 text-sm">Bestell-Ref.: {invoice.orderRef}</p>
                                                </div>
                                            </div>
                                            <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${getStatusBg(invoice.status)} ${getStatusColor(invoice.status)}`}>
                                                <CheckCircle className="w-5 h-5" />
                                                <span className="capitalize">{invoice.status}</span>
                                            </div>
                                        </div>

                                        <div className="mt-6 grid md:grid-cols-4 gap-6">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-5 h-5 text-cyan-400" />
                                                <div>
                                                    <p className="text-white/50 text-sm">Rechnungsdatum</p>
                                                    <p className="font-medium">{invoice.date}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-5 h-5 text-cyan-400" />
                                                <div>
                                                    <p className="text-white/50 text-sm">Fälligkeitsdatum</p>
                                                    <p className="font-medium">{invoice.dueDate}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Euro className="w-5 h-5 text-cyan-400" />
                                                <div>
                                                    <p className="text-white/50 text-sm">Betrag</p>
                                                    <p className="font-medium">{invoice.amount.toFixed(2)} €</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-end">
                                                <button
                                                    onClick={() => handleDownload(invoice)}
                                                    className="flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors"
                                                >
                                                    <Download className="w-5 h-5" />
                                                    PDF herunterladen
                                                </button>
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

export default Invoices;