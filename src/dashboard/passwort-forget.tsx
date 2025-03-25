import { useState } from 'react';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement password reset logic
        console.log('Reset password for:', email);
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#020230] to-[#050550] flex items-center justify-center px-4">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-2xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Passwort zurücksetzen</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Geben Sie Ihre E-Mail-Adresse ein, um Ihr Passwort zurückzusetzen
                    </p>
                </div>

                {!isSubmitted ? (
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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

                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors"
                        >
                            Link zum Zurücksetzen senden
                        </button>
                    </form>
                ) : (
                    <div className="mt-8 text-center">
                        <div className="rounded-full bg-green-100 p-3 mx-auto w-16 h-16 flex items-center justify-center">
                            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="mt-4 text-xl font-medium text-gray-900">E-Mail wurde versendet</h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Bitte überprüfen Sie Ihren Posteingang für weitere Anweisungen zum Zurücksetzen Ihres Passworts.
                        </p>
                    </div>
                )}

                <div className="text-center text-sm">
                    <Link to="/login" className="font-medium text-cyan-600 hover:text-cyan-500">
                        Zurück zum Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;