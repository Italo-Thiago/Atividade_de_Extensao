import coxinha from "../../assets/images/Coxinha.webp";
import bolo from "../../assets/images/Bolo.webp";
import boloDePote from "../../assets/images/Bolo_de_Pote.webp";

import { Product } from "./Product";

export const Catalogy = () => {
    return (
        <div className="w-full h-1/3 flex flex-col justify-start items-stretch gap-12 p-16 bg-p_white">
            <div className="h-96 self-stretch flex-grow-0 flex flex-row justify-start items-start gap-12 p-0">
                <Product 
                    imageUrl={coxinha}
                    title="Coxinha"
                    cost="25.5"
                    description="Isto e uma coxinha"
                />

                <Product
                    imageUrl={bolo}
                    title="Bolo"
                    cost="30"
                    description="Isto e um bolo"
                />
                
                <Product
                    imageUrl={boloDePote}
                    title="Bolo de Pote"
                    cost="50"
                    description="Isto e um Bolo de pote"
                />
            </div>
        </div>
    );
};