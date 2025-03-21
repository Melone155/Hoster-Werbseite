import ServiceCard from "../components/ServiceCard"
import RotatingText from "../components/RotatingText"
import {Shield, Cpu, HardDrive, ArrowRight } from 'lucide-react'

const Home = () => {
  return (
      <main className="bg-[#020230]">
        {/* Hero Section with RotatingText - Kept unchanged as requested */}
        <section className="text-white py-12 lg:min-h-screen lg:flex lg:items-center relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight flex flex-wrap items-center gap-3">
                  <span>Ihre IT-Infrastruktur mit</span>
                  <RotatingText
                      texts={["leistungsstarke Root-Servern", "skalierbarem Web Hosting", "sicherem Cloud-Speicher"]}
                      mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                      staggerFrom={"last"}
                      initial={{y: "100%"}}
                      animate={{y: 0}}
                      exit={{y: "-120%"}}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                      transition={{type: "spring", damping: 30, stiffness: 400}}
                      rotationInterval={6000}
                  />
                </h1>
              </div>
              <div className="flex justify-center">
                <div className="max-w-md">
                  <img src="src/assets/Server.png" alt="Web Hosting" className="w-full"/>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Modernized */}
        <section className="text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Dienste</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Entdecken Sie unsere professionellen Hosting-Lösungen für Ihr Unternehmen
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group relative">
                <div
                    className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"/>
                <div className="relative bg-[#040440] rounded-xl p-8 h-full">
                  <ServiceCard
                      image="src/assets/s4.png"
                      title="Root Server"
                      description="Maximale Leistung und volle Kontrolle für anspruchsvolle Projekte. Ideal für Unternehmen mit hohen Anforderungen."
                  />
                </div>
              </div>
              <div className="group relative">
                <div
                    className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"/>
                <div className="relative bg-[#040440] rounded-xl p-8 h-full">
                  <ServiceCard
                      image="src/assets/s4.png"
                      title="Root Sevrer"
                      description="Maximale Leistung und volle Kontrolle für anspruchsvolle Projekte."
                  />
                </div>
              </div>
              <div className="group relative">
                <div
                    className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"/>
                <div className="relative bg-[#040440] rounded-xl p-8 h-full">
                  <ServiceCard
                      image="src/assets/s5.png"
                      title="Webhosting Hosting"
                      description="Schnelles, sicheres und zuverlässiges Hosting für deine Website."
                  />
                </div>
              </div>
              <div className="group relative">
                <div
                    className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"/>
                <div className="relative bg-[#040440] rounded-xl p-8 h-full">
                  <ServiceCard
                      image="src/assets/s6.png"
                      title="Domain Name"
                      description="Finde die perfekte Domain für dein Business oder Projekt."
                  />
                </div>
              </div>
              <div className="group relative">
                <div
                    className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"/>
                <div className="relative bg-[#040440] rounded-xl p-8 h-full">
                  <ServiceCard
                      image="src/assets/s1.png"
                      title="Cloud-Speicher"
                      description="Flexibler und sicherer Speicherplatz für deine Daten in unserer Cloud."
                  />
                </div>
              </div>
              <div className="group relative">
                <div
                    className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"/>
                <div className="relative bg-[#040440] rounded-xl p-8 h-full">
                  <ServiceCard
                      image="src/assets/s2.png"
                      title="Virtual Data Center"
                      description="Skalierbare virtuelle Infrastruktur für Unternehmen jeder Größe."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Server Management Section - Enhanced */}
        <section className="text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"/>
          <div className="container mx-auto px-4 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div
                    className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl"/>
                <img
                    src="src/assets/Server-img.png"
                    alt="Server"
                    className="relative rounded-xl w-full"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Überlassen Sie uns die Verwaltung</h2>
                <p className="text-white/80 text-lg">
                  <strong className="text-cyan-300">Konzentrieren Sie sich auf Ihr Business</strong> – wir kümmern uns
                  um Ihren Server! Mit unserem Managed-Server-Service übernehmen wir die komplette Verwaltung Ihrer
                  Server.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-cyan-300"/>
                    <span>24/7 Monitoring & Wartung</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Cpu className="w-6 h-6 text-cyan-300"/>
                    <span>Performance-Optimierung</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <HardDrive className="w-6 h-6 text-cyan-300"/>
                    <span>Automatische Backups</span>
                  </div>
                </div>
                <button
                    className="mt-6 bg-gradient-to-r from-cyan-400 to-cyan-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity group">
                  Mehr erfahren
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}

export default Home