import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo_I.webp"

// TODO: Fazer com que ao clicar nos links Preços, Localização e Contato o usuário seja redirecionado para a Página Home, e para os respectivos componentes

// TODO: Remover Quem somos e colocar o link no logo

function NavBar() {
    return (
        <>
            {/* Cabeçalho e Navegação */}
            <header className="box-border flex items-center justify-between px-8 py-4 bg-white border-b border-gray-300 w-full h-[99px]">
                {/* Logo */}
                <div className="flex items-center pr-8">
                    <img 
                        src={logo}
                        alt="Logo"
                        className="h-16 w-16"
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
        </>
    )
}

export default NavBar