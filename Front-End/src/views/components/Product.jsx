import PropTypes from "prop-types";

export const Product = ({ imageUrl, title, cost, description }) => {
    return (
        <div className="w-1/3 flex-grow flexa flex-col justify-start gap-4 p-4 border rounded-lg border-slate-300 bg-white">
            <div className="self-stretch flex-grow-0 flex flex-col justify-center items-stretch p-0 bg-p_white">
                <img src={imageUrl} alt="coxinha" className="h-full w-full rounded-lg"></img>
            </div>
            <div className="w-[208px] h-20 flex-grow-0 flex flex-col justify-start items-start gap-2 p-0">
                <p className="h-6 flex-grow text-base font-normal not-italic leading-6 space tracking-normal text-left text-p_purble"> 
                    {title} 
                </p>
                <p className="w-6 h-6 flex-grow-0 text-base font-semibold items-stretch not-italic leading-6 tracking-normal text-left text-slate-900">
                    R${cost}
                </p>
                <p  className="h-5 self-stretch flex-grow-0 flex flex-row justify-start items-start p-0">
                    {description}
                </p>
            </div>
        </div>
    );
}

Product.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
}