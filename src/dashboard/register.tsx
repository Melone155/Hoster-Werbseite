import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [accountType, setAccountType] = useState<'private' | 'business'>('private');
    const [formData, setFormData] = useState({
        // Private fields
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        // Business fields
        companyName: '',
        zipCode: '',
        city: '',
        street: '',
        houseNumber: '',
        businessEmail: '',
        businessPassword: '',
        confirmBusinessPassword: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Registration data:', { accountType, formData });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#020230] to-[#050550] flex items-center justify-center px-4 py-12">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-2xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Registrierung</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Erstellen Sie Ihren Account
                    </p>
                </div>

                {/* Account Type Selection */}
                <div className="grid grid-cols-2 gap-4">
                    <button
                        type="button"
                        onClick={() => setAccountType('private')}
                        className={`py-2 px-4 rounded-md transition-colors ${
                            accountType === 'private'
                                ? 'bg-cyan-500 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                        Privat
                    </button>
                    <button
                        type="button"
                        onClick={() => setAccountType('business')}
                        className={`py-2 px-4 rounded-md transition-colors ${
                            accountType === 'business'
                                ? 'bg-cyan-500 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                        Geschäftlich
                    </button>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    {accountType === 'private' ? (
                        // Private Registration Form
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                    Benutzername
                                </label>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    required
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    E-Mail
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
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
                                    required
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                    Passwort bestätigen
                                </label>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    required
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                />
                            </div>
                        </div>
                    ) : (
                        // Business Registration Form
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                                    Firmenname
                                </label>
                                <input
                                    id="companyName"
                                    name="companyName"
                                    type="text"
                                    required
                                    value={formData.companyName}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                                        PLZ
                                    </label>
                                    <input
                                        id="zipCode"
                                        name="zipCode"
                                        type="text"
                                        required
                                        value={formData.zipCode}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                        Stadt
                                    </label>
                                    <input
                                        id="city"
                                        name="city"
                                        type="text"
                                        required
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-2">
                                    <label htmlFor="street" className="block text-sm font-medium text-gray-700">
                                        Straße
                                    </label>
                                    <input
                                        id="street"
                                        name="street"
                                        type="text"
                                        required
                                        value={formData.street}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="houseNumber" className="block text-sm font-medium text-gray-700">
                                        Nr.
                                    </label>
                                    <input
                                        id="houseNumber"
                                        name="houseNumber"
                                        type="text"
                                        required
                                        value={formData.houseNumber}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="businessEmail" className="block text-sm font-medium text-gray-700">
                                    Geschäfts-E-Mail
                                </label>
                                <input
                                    id="businessEmail"
                                    name="businessEmail"
                                    type="email"
                                    required
                                    value={formData.businessEmail}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="businessPassword" className="block text-sm font-medium text-gray-700">
                                    Passwort
                                </label>
                                <input
                                    id="businessPassword"
                                    name="businessPassword"
                                    type="password"
                                    required
                                    value={formData.businessPassword}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="confirmBusinessPassword" className="block text-sm font-medium text-gray-700">
                                    Passwort bestätigen
                                </label>
                                <input
                                    id="confirmBusinessPassword"
                                    name="confirmBusinessPassword"
                                    type="password"
                                    required
                                    value={formData.confirmBusinessPassword}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                />
                            </div>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors"
                    >
                        Registrieren
                    </button>

                    <div className="text-center text-sm">
                        <Link to="/login" className="font-medium text-cyan-600 hover:text-cyan-500">
                            Bereits registriert? Jetzt anmelden
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;