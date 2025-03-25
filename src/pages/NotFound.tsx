import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FuzzyText from '../components/FuzzyText';
import { Home } from 'lucide-react';
import Navbar from "../components/Navbar.tsx";

function NotFound() {
    const navigate = useNavigate();
    const [hoverIntensity] = useState(0.5);
    const [enableHover] = useState(true);

    return (
        <>
        <Navbar />
        <div className="fixed inset-0 bg-[#020230] text-white flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10" />

            <div className="relative text-center px-4">
                {/* Fuzzy 404 Text */}
                <div className="text-[150px] md:text-[200px] font-bold mb-8 flex justify-center">
                    <FuzzyText
                        baseIntensity={0.2}
                        hoverIntensity={hoverIntensity}
                        enableHover={enableHover}
                    >
                        404
                    </FuzzyText>
                </div>

                {/* Error Message */}
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                    Oops! Diese Seite wurde nicht gefunden
                </h2>
                <p className="text-white/70 mb-8 max-w-md mx-auto">
                    Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.
                </p>

                {/* Back to Home Button */}
                <button
                    onClick={() => navigate('/')}
                    className="bg-gradient-to-r from-purple-500 to-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto hover:opacity-90 transition-opacity"
                >
                    <Home className="w-5 h-5" />
                    Zurück zur Startseite
                </button>
            </div>
        </div>
        </>
    );
}

export default NotFound;