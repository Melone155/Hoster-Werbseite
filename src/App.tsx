import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import RootServer from "./pages/rootserver-mieten.tsx"
import Webhosting from "./pages/web-space.tsx"

import RootServerShop from "./shop/rootserver-mieten.tsx"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/root-server" element={<RootServer />} />
        <Route path="/webhosting" element={<Webhosting />} />

        <Route path="/shop/root-server" element={<RootServerShop />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

