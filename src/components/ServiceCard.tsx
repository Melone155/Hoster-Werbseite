import React from "react";

interface ServiceCardProps {
    image: string;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description }) => {
    return (
        <div className="h-full flex flex-col">
            {/* Image Container */}
            <div className="mb-6">
                <img
                    src={image}
                    alt={title}
                    className="w-16 h-16 object-contain"
                />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold mb-3 text-cyan-300">{title}</h3>
            <p className="text-white/70 flex-grow">{description}</p>

            {/* Interactive Elements */}
            <div className="mt-6">
                <button className="text-cyan-300 flex items-center gap-2 group transition-all duration-300 hover:text-cyan-400">
                    <span>Mehr Details</span>
                    <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;
