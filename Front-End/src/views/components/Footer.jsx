import { Instagram, Youtube } from "lucide-react";

export const Footer = () => {
    return (
        <div className="flex flex-wrap w-full items-start justify-center gap-10 p-8 bg-gray-100 border-t border-gray-300">
            {/* Logo */}
            <div className="flex flex-col w-64 gap-4">
                <h2 className="text-lg font-bold text-gray-900">Social</h2>
                <Instagram className="cursor-pointer"/>
                <Youtube className="cursor-pointer"/>
            </div>

            {/* Contato */}
            <div className="flex flex-col w-64 gap-4">
                <h2 className="text-lg font-bold text-gray-900">Fale Conosco</h2>
                <p className="text-sm text-gray-700">Whatsapp</p>
                <p className="text-sm text-gray-700">Email:</p>
            </div>

            {/* Sobre a Empresa */}
            <div className="flex flex-col w-64 gap-4">
                <h2 className="text-lg font-bold text-gray-900">Sobre a Empresa</h2>
                <p className="text-sm text-gray-700">Razão Social:</p>
                <p className="text-sm text-gray-700">CNPJ:</p>
            </div>
        </div>
    );
};
