import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
    image: string
    title: string
    description: string
}

const ServiceCard = ({ image, title, description }: ServiceCardProps) => {
    return (
        <div className="bg-white p-6 rounded shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-cyan-500 flex items-center justify-center mb-4">
                <img src={image || "/placeholder.svg"} alt={title} className="w-12 h-12 object-contain" />
            </div>
            <div>
                <h4 className="text-xl font-bold mb-2">{title}</h4>
                <p className="text-gray-600 mb-4">{description}</p>
                <a href="#" className="text-cyan-500 hover:text-red-500 flex items-center justify-center gap-1 transition">
                    Read More
                    <ArrowRight size={18} />
                </a>
            </div>
        </div>
    )
}

export default ServiceCard
