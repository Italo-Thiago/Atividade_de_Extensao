import Cake from "../pages/Cake"
import Home from "../pages/Home"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// TODO: Fazer com que ao clicar nos links Preços, Localização e Contato o usuário seja redirecionado para a Página Home, e para os respectivos componentes

function NavBar() {
    return (
        <Router>
            {/* Cabeçalho e Navegação */}
            <header className="box-border flex items-center justify-between px-8 py-4 bg-white border-b border-gray-300 w-full h-[99px]">
                {/* Logo */}
                <div className="flex items-center">
                    <img 
                        src="https://via.placeholder.com/50"
                        alt="Logo"
                        className="h-8 w-8"
                    />
                </div>

                {/* Navegação */}
                <nav className="flex gap-6">
                    <Link to="/" className="text-gray-700 hover:text-gray-900 transition">Quem somos</Link>
                    <Link className="text-gray-700 hover:text-gray-900 transition">Preços</Link>
                    <Link className="text-gray-700 hover:text-gray-900 transition">Localização</Link>
                    <Link className="text-gray-700 hover:text-gray-900 transition">Contato</Link>
                    <Link to="/cakes" className="text-gray-700 hover:text-gray-900 transition">Bolos</Link>
                </nav>
            </header>      

            {/* Rotas */}
            <Routes className="p-8">
                <Route path="/" element={<Home />} />
                <Route path="/cakes" element={<Cake />} />
            </Routes>
        </Router>
    )
}

export default NavBar