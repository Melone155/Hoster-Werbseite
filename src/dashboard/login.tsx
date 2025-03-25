import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar.tsx";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login attempt:', { email, password });
    };

    return (
        <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-b from-[#020230] to-[#050550] flex items-center justify-center px-4">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-2xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Willkommen zurück</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Bitte melden Sie sich mit Ihrem Account an
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                E-Mail Adresse
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                placeholder="ihre@email.de"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Passwort
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <Link to="/reset-password" className="font-medium text-cyan-600 hover:text-cyan-500">
                                Passwort vergessen?
                            </Link>
                        </div>
                        <div className="text-sm">
                            <Link to="/register" className="font-medium text-cyan-600 hover:text-cyan-500">
                                Jetzt registrieren
                            </Link>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors"
                    >
                        Anmelden
                    </button>
                </form>
            </div>
        </div>
        </>
    );
};

export default Login;