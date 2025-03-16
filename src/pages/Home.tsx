import { Link } from "react-router-dom"
import ServiceCard from "../components/ServiceCard"
import ContactForm from "../components/ContactForm"
import RotatingText from "../components/RotatingText"

const Home = () => {
  return (
      <main>

        <section className="bg-[#020230] text-white py-12 lg:min-h-screen lg:flex lg:items-center relative">
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
                  <img src="src/assets/slider-img.png" alt="Web Hosting" className="w-full"/>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="section-padding mt-10">
          <div className="container mx-auto px-4">
            <div className="heading-container heading-center">
              <h2 className="text-3xl mb-4 text-center font-bold">Unsere Dienste</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                  image="src/assets/s4.png"
                  title="Root Sevrer"
                  description="Maximale Leistung und volle Kontrolle für anspruchsvolle Projekte."
              />
              <ServiceCard
                  image="src/assets/s5.png"
                  title="Webhosting Hosting"
                  description="Schnelles, sicheres und zuverlässiges Hosting für deine Website."
              />
              <ServiceCard
                  image="src/assets/s6.png"
                  title="Domain Name"
                  description="Finde die perfekte Domain für dein Business oder Projekt."
              />
              <ServiceCard
                  image="src/assets/s1.png"
                  title="Cloud-Speicher"
                  description="Flexibler und sicherer Speicherplatz für deine Daten in unserer Cloud."
              />
              <ServiceCard
                  image="src/assets/s2.png"
                  title="Virtual Data Center"
                  description="Skalierbare virtuelle Infrastruktur für Unternehmen jeder Größe."
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="heading-container">
                  <h2 className="text-3xl mb-4 font-bold">Über Uns</h2>
                </div>
                <p className="text-gray-600">
                  Bei FuchsHost deinem zuverlässigen Partner für leistungsstarke Hosting-Lösungen. Wir bieten erstklassige Root Server, Webhosting, Domains, Cloud-Speicher und Virtual Data Center für Unternehmen und Privatkunden.
                  Mit modernster Infrastruktur, Schnellem Support und einem Fokus auf Sicherheit und Performance sorgen wir dafür, dass deine IT-Projekte reibungslos laufen. Egal ob du eine einfache Website hosten oder eine komplexe Serverlösung benötigst bei uns bist du richtig.
                </p>
                <Link to="/about" className="btn-secondary inline-block">
                  Read More
                </Link>
              </div>
              <div className="flex justify-center">
                <img src="src/assets/about-img.png" alt="About" className="max-w-full"/>
              </div>
            </div>
          </div>
        </section>

        {/* Server Section */}
        <section className="bg-blue-950 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <img src="src/assets/Server-img.png" alt="Server" className="w-full rounded"/>
              </div>
              <div className="space-y-4">
                <div className="heading-container">
                  <h2 className="text-3xl mb-4">Überlassen Sie uns die Verwaltung</h2>
                  <p>
                    <strong>Konzentriere dich auf dein Business wir kümmern uns um deinen Server! </strong>
                    Mit unserem Managed-Server-Service übernehmen wir die komplette Verwaltung deiner Server, damit du
                    dich auf das Wesentliche konzentrieren kannst.
                  </p>
                </div>
                <a href="#"
                   className="bg-red-500 text-white py-2 px-6 rounded inline-block border border-red-500 transition hover:bg-cyan-500">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="section-padding mt-10">
          <div className="container mx-auto px-4">
            <div className="heading-container heading-center">
              <h2 className="text-3xl mb-4 text-center font-bold">Our Pricing</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Startup Plan */}
              <div
                  className="price-box transition-transform hover:scale-105 hover:bg-cyan-500 hover:text-white rounded-3xl shadow-md p-8 text-center">
                <div className="mb-4">
                  <h2 className="text-4xl font-bold">
                    $ <span className="text-5xl">49</span>
                  </h2>
                  <h6 className="text-xl text-cyan-500 uppercase mb-4 hover:text-white">Startup</h6>
                  <ul className="space-y-3 mb-6">
                    <li>2GB RAM</li>
                    <li>20GB SSD Cloud Storage</li>
                    <li>Weekly Backups</li>
                    <li>DDoS Protection</li>
                    <li>Full Root Access</li>
                    <li>24/7/365 Tech Support</li>
                  </ul>
                </div>
                <div>
                  <a href="#" className="bg-red-500 text-white py-2 px-6 rounded inline-block border border-red-500 transition hover:bg-cyan-500">
                    See Detail
                  </a>
                </div>
              </div>

              {/* Standard Plan */}
              <div
                  className="price-box transition-transform hover:scale-105 hover:bg-cyan-500 hover:text-white rounded-3xl shadow-md p-8 text-center">
                <div className="mb-4">
                  <h2 className="text-4xl font-bold">
                    $ <span className="text-5xl">99</span>
                  </h2>
                  <h6 className="text-xl text-cyan-500 uppercase mb-4 hover:text-white">Standard</h6>
                  <ul className="space-y-3 mb-6">
                    <li>4GB RAM</li>
                    <li>50GB SSD Cloud Storage</li>
                    <li>Weekly Backups</li>
                    <li>DDoS Protection</li>
                    <li>Full Root Access</li>
                    <li>24/7/365 Tech Support</li>
                  </ul>
                </div>
                <div>
                  <a href="#" className="bg-red-500 text-white py-2 px-6 rounded inline-block border border-red-500 transition hover:bg-cyan-500">
                    See Detail
                  </a>
                </div>
              </div>

              {/* Business Plan */}
              <div
                  className="price-box transition-transform hover:scale-105 hover:bg-cyan-500 hover:text-white rounded-3xl shadow-md p-8 text-center">
                <div className="mb-4">
                  <h2 className="text-4xl font-bold">
                    $ <span className="text-5xl">149</span>
                  </h2>
                  <h6 className="text-xl text-cyan-500 uppercase mb-4 hover:text-white">Business</h6>
                  <ul className="space-y-3 mb-6">
                    <li>8GB RAM</li>
                    <li>100GB SSD Cloud Storage</li>
                    <li>Weekly Backups</li>
                    <li>DDoS Protection</li>
                    <li>Full Root Access</li>
                    <li>24/7/365 Tech Support</li>
                  </ul>
                </div>
                <div>
                  <a href="#" className="bg-red-500 text-white py-2 px-6 rounded inline-block border border-red-500 transition hover:bg-cyan-500">
                    See Detail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding mt-10">
          <div className="container mx-auto px-4">
            <div className="heading-container heading-center">
              <h2 className="text-3xl mb-4 text-center font-bold">Get In Touch</h2>
            </div>

            <div className="max-w-2xl mx-auto">
              <ContactForm/>
            </div>
          </div>
        </section>
      </main>
  )
}

export default Home