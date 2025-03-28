import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();

    const menuItems = [
        { path: '/dashboard/my-servers', label: 'Meine Server', icon: 'M5 12l-2 0M19 12l2 0M12 5l0-2M12 19l0 2' },
        { path: '/dashboard/order', label: 'Bestellen', icon: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z' },
        { path: '/dashboard/invoices', label: 'Rechnungen', icon: 'M9 17h6M9 13h6M9 9h6M5 21h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z' },
        { path: '/dashboard/support', label: 'Support', icon: 'M18.364 5.636a9 9 0 0 1 0 12.728M15.536 8.464a5 5 0 0 1 0 7.072M6.343 17.657a9 9 0 0 1 0-12.728M8.464 15.536a5 5 0 0 1 0-7.072' },
        { path: '/dashboard/support-overview', label: 'Ticket-Übersicht', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z' },
        { path: '/dashboard/customer-overview', label: 'Kundenverwaltung', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
        { path: '/dashboard/server', label: 'Server-Management', icon: 'M5 12h14M5 12a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M5 12a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2' },
        { path: '/dashboard/statistics', label: 'Statistiken', icon: 'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z' },
        { path: '/dashboard/changelog', label: 'Changelog', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    ];

    return (
        <div className={`bg-[#020230] text-white h-screen ${isOpen ? 'w-64' : 'w-20'} transition-all duration-300 fixed left-0 top-0 z-50`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="absolute -right-3 top-9 bg-[#020230] rounded-full p-1 cursor-pointer"
            >
                <svg
                    className={`w-5 h-5 text-white transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <div className="py-8 px-4">
                <div className="flex items-center justify-center mb-8">
                    <img src={Logo} alt="Logo"  className="max-w-10 max-h-14 w-full h-auto"/>
                </div>

                <nav>
                    <ul className="space-y-2">
                    {menuItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                                        location.pathname === item.path
                                            ? 'bg-cyan-500 text-white'
                                            : 'hover:bg-cyan-500/10'
                                    }`}
                                >
                                    <svg
                                        className="w-6 h-6 flex-shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                    </svg>
                                    {isOpen && <span className="truncate">{item.label}</span>}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;