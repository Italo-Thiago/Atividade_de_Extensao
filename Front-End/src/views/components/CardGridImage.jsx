import boloImage from "../../assets/images/Bolo.webp";
import boloDePoteImage from "../../assets/images/Bolo_de_Pote.webp";
import coxinhaImage from "../../assets/images/Coxinha.webp";

import { Card } from "./Card";

export const CardGridImage = () => {
    return (
        // Container Principal
        <div className="flex flex-col w-full items-start gap-8 p-16 bg-gray-100">

            {/* Titulo e Subtítulo */}
            <div className="inline-flex flex-col items-start gap-2"> 
                <div className="font-bold text-gray-900 text-2xl tracking-wide leading-tight">
                    Titulo
                </div>
                <div className="font-medium text-gray-700 text-xl tracking-normal leading-snug">
                    Subtítulo 
                </div>
            </div>

            {/* Grid de Cards */}
            <div className="flex flex-wrap content-between h-1/2 items-center w-full gap-8">
                <Card 
                    imageUrl={boloImage}
                    title="Bolo"
                    description="Isso e um bolo"
                />
                <Card 
                    imageUrl={boloDePoteImage}
                    title="Bolo de Pote"
                    description="Isso e um bolo de pote"
                />
                <Card 
                    imageUrl={coxinhaImage}
                    title="Coxinha"
                    description="Isso e uma coxinha"
                />
            </div>
        </div>
    );
};