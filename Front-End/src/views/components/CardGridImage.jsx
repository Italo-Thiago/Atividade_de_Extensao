import PropTypes from "prop-types";
import { Card } from "./Card";
import { getCardData } from "../../models/features/CardDataModel";

export const CardGridImage = ({ maxCards }) => {
    // Array de dados dos cards
    const cardData = getCardData();

    // Limita o número de cards com base em maxCards
    const limitedCardData = cardData.slice(0, maxCards);

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
                {limitedCardData.map((card, index) => (
                    <Card
                        key={index}
                        imageUrl={card.imageUrl}
                        title={card.description}
                        description={card.description}
                    />
                ))}
            </div>
        </div>
    );
};

CardGridImage.propTypes = {
    maxCards: PropTypes.number, 
}

CardGridImage.defaultProps = {
    maxCards: 3, // Valor padrão para maxCards
}