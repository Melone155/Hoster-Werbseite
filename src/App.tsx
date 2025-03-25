import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import RootServer from "./pages/rootserver-mieten.tsx"
import Webhosting from "./pages/web-space.tsx"
import Cloud from "./pages/cloud-speicher.tsx"
import VirtualDC from "./pages/virtual-data-center.tsx"
import Domain from "./pages/domain.tsx"

import RootServerShop from "./shop/rootserver-mieten.tsx"

import Login from "./dashboard/login.tsx"
import Register from "./dashboard/register.tsx"
import ResetPassword from "./dashboard/passwort-forget.tsx"

import NotFound from "./pages/NotFound.tsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/root-server" element={<RootServer />} />
        <Route path="/webhosting" element={<Webhosting />} />
        <Route path="/cloud-speicher" element={<Cloud />} />
        <Route path="/virtual-data-center" element={<VirtualDC />} />
        <Route path="/domain" element={<Domain />} />

        <Route path="/shop/root-server" element={<RootServerShop />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

