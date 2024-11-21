import boloImage from "../../assets/images/Bolo.webp";
import boloDePoteImage from "../../assets/images/Bolo_de_Pote.webp";
import coxinhaImage from "../../assets/images/Coxinha.webp";

export const getCardData = () => {
    return [
        {
            imageUrl: boloImage,
            title: "Bolo",
            description: "Isso e um bolo",
        },
        {
            imageUrl: boloDePoteImage,
            title:"Bolo de Pote",
            description:"Isso e um bolo de pote",
        },
        {
            imageUrl: coxinhaImage,
            title:"Coxinha",
            description:"Isso e uma coxinha",
        },
        // Adicione mais cards aqui, se necesssário
    ];
};