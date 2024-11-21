import { Routes, Route } from "react-router-dom";
import Home from "../../views/pages/Home";
import Cake from "../../views/pages/Cake";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cakes" element={<Cake />} />
            {/* Rotas adicionais podem ser adicionadas aqui */}
        </Routes>
    )
}