import PropTypes from "prop-types";

export const Card = ({ imageUrl, title, description }) => {
    return (
        // Conteiner Principal
        <div className="flex flex-wrap min-w-[15rem] items-start gap-4 p-4 bg-white rounded-md border-gray-300 flex-1">

            {/* Imagem */}
            <img 
                src={imageUrl} 
                alt={title} 
                className="w-32 h-32 object-cover rounded-md" 
            />

            {/* Conteúdo do Card */}
            <div className="flex flex-col items-start gap-2 flex-1">
                <div className="font-bold text-wrap text-gray-900 text-lg leading-tight">
                    {title}
                </div>
                <p className="text-gray-700 text-base leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

Card.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}
