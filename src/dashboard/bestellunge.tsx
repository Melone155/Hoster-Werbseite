import { Package, Clock, CheckCircle, XCircle, AlertCircle, ArrowRight } from 'lucide-react';
import Navbar from '../components/Sidebar.tsx';

interface Order {
    id: string;
    product: string;
    status: 'pending' | 'active' | 'cancelled' | 'processing';
    date: string;
    price: number;
    billingPeriod: string;
    nextBilling: string;
}

const Orders = () => {
    const orders: Order[] = [
        {
            id: 'ORD-2024-001',
            product: 'Root Server Pro X64',
            status: 'active',
            date: '15.02.2024',
            price: 49.99,
            billingPeriod: 'Monatlich',
            nextBilling: '15.03.2024'
        },
        {
            id: 'ORD-2024-002',
            product: 'Web Hosting Premium',
            status: 'pending',
            date: '18.02.2024',
            price: 29.99,
            billingPeriod: 'Monatlich',
            nextBilling: '18.03.2024'
        },
        {
            id: 'ORD-2024-003',
            product: 'Cloud Storage 500GB',
            status: 'processing',
            date: '20.02.2024',
            price: 19.99,
            billingPeriod: 'Monatlich',
            nextBilling: '20.03.2024'
        },
        {
            id: 'ORD-2024-004',
            product: 'VPS Server Basic',
            status: 'cancelled',
            date: '10.02.2024',
            price: 39.99,
            billingPeriod: 'Monatlich',
            nextBilling: '-'
        }
    ];

    const getStatusColor = (status: Order['status']) => {
        switch (status) {
            case 'active':
                return 'text-green-400';
            case 'pending':
                return 'text-yellow-400';
            case 'cancelled':
                return 'text-red-400';
            case 'processing':
                return 'text-blue-400';
            default:
                return 'text-gray-400';
        }
    };

    const getStatusBg = (status: Order['status']) => {
        switch (status) {
            case 'active':
                return 'bg-green-400/10';
            case 'pending':
                return 'bg-yellow-400/10';
            case 'cancelled':
                return 'bg-red-400/10';
            case 'processing':
                return 'bg-blue-400/10';
            default:
                return 'bg-gray-400/10';
        }
    };

    const getStatusIcon = (status: Order['status']) => {
        switch (status) {
            case 'active':
                return <CheckCircle className="w-5 h-5" />;
            case 'pending':
                return <Clock className="w-5 h-5" />;
            case 'cancelled':
                return <XCircle className="w-5 h-5" />;
            case 'processing':
                return <AlertCircle className="w-5 h-5" />;
            default:
                return null;
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
                        <h1 className="text-4xl font-bold mb-4">Bestellübersicht</h1>
                        <p className="text-white/70 max-w-2xl">
                            Verwalten Sie Ihre Bestellungen und behalten Sie den Überblick über Ihre Services
                        </p>
                    </div>
                </div>

                {/* Orders Section */}
                <div className="container mx-auto px-4 py-12">
                    <div className="grid gap-6">
                        {orders.map((order) => (
                            <div key={order.id} className="group relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"/>
                                <div className="relative bg-[#040440] rounded-xl overflow-hidden">
                                    <div className="p-6">
                                        <div className="flex flex-wrap items-center justify-between gap-4">
                                            <div className="flex items-center gap-4">
                                                <Package className="w-8 h-8 text-cyan-400" />
                                                <div>
                                                    <h2 className="text-xl font-semibold">{order.product}</h2>
                                                    <p className="text-white/70 text-sm">Bestell-ID: {order.id}</p>
                                                </div>
                                            </div>
                                            <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${getStatusBg(order.status)} ${getStatusColor(order.status)}`}>
                                                {getStatusIcon(order.status)}
                                                <span className="capitalize">{order.status}</span>
                                            </div>
                                        </div>

                                        <div className="mt-6 grid md:grid-cols-4 gap-6">
                                            <div>
                                                <p className="text-white/50 text-sm">Bestelldatum</p>
                                                <p className="font-medium">{order.date}</p>
                                            </div>
                                            <div>
                                                <p className="text-white/50 text-sm">Preis</p>
                                                <p className="font-medium">{order.price.toFixed(2)} €</p>
                                            </div>
                                            <div>
                                                <p className="text-white/50 text-sm">Abrechnungszeitraum</p>
                                                <p className="font-medium">{order.billingPeriod}</p>
                                            </div>
                                            <div>
                                                <p className="text-white/50 text-sm">Nächste Abrechnung</p>
                                                <p className="font-medium">{order.nextBilling}</p>
                                            </div>
                                        </div>

                                        <div className="mt-6 flex justify-end">
                                            <button className="flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors">
                                                Details anzeigen
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
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

export default Orders;