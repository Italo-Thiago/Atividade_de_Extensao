import initialImage from "../../assets/images/Imagem_Inicial.webp";

function HeroImage() {
    return (
        <img src={initialImage} alt="Imagem Inicial" className="flex w-full relative" />
    )
}

export default HeroImage;