import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Logo.webp';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();

    const menuItems = [
        { path: '/dashboard/my-servers', label: 'Meine Server', icon: 'M5 12l-2 0M19 12l2 0M12 5l0-2M12 19l0 2' },
        { path: '/dashboard/order', label: 'Bestellen', icon: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z' },
        { path: '/dashboard/invoices', label: 'Rechnungen', icon: 'M9 17h6M9 13h6M9 9h6M5 21h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z' },
        { path: '/dashboard/support', label: 'Support', icon: 'M18.364 5.636a9 9 0 0 1 0 12.728M15.536 8.464a5 5 0 0 1 0 7.072M6.343 17.657a9 9 0 0 1 0-12.728M8.464 15.536a5 5 0 0 1 0-7.072' },
        { path: '/dashboard/tickets', label: 'Ticket-Übersicht', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z' },
        { path: '/dashboard/customer-management', label: 'Kundenverwaltung', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
        { path: '/dashboard/server-management', label: 'Server-Management', icon: 'M5 12h14M5 12a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M5 12a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2' },
        { path: '/dashboard/user-management', label: 'Benutzerverwaltung', icon: 'M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v.106a3 3 0 0 1-3 3H9.375a3 3 0 0 1-3-3v-.106A9.337 9.337 0 0 0 2.254 18.5a4.125 4.125 0 0 0 7.533-2.493M15 19.128v.106a3 3 0 0 1-3 3H9.375a3 3 0 0 1-3-3v-.106A9.337 9.337 0 0 0 2.254 18.5a4.125 4.125 0 0 0 7.533-2.493M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z' },
        { path: '/dashboard/employee-management', label: 'Mitarbeiterverwaltung', icon: 'M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v.106a3 3 0 0 1-3 3H9.375a3 3 0 0 1-3-3v-.106A9.337 9.337 0 0 0 2.254 18.5a4.125 4.125 0 0 0 7.533-2.493M15 19.128v.106a3 3 0 0 1-3 3H9.375a3 3 0 0 1-3-3v-.106A9.337 9.337 0 0 0 2.254 18.5a4.125 4.125 0 0 0 7.533-2.493M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z' },
        { path: '/dashboard/statistics', label: 'Statistiken', icon: 'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z' },
        { path: '/dashboard/admin-settings', label: 'Admin-Einstellungen', icon: 'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.432l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.432l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.432l1.297-2.247a1.125 1.125 0 0 1 1.37-.49l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z' },
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