import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServieCard = ({ service }) => {
    const { title, img, price } = service
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl h-40" />
            </figure>
            <div className="card-body">
                <h2 className="card-title flex-grow">{title}</h2>
                <div className="card-actions flex justify-between items-center">
                    <p className="text-start font-bold text-[#FF3811]">Price: ${price}</p>
                    <Link to=''><FaArrowRight className="text-[#FF3811] text-end"></FaArrowRight></Link>
                </div>
            </div>
        </div>
    );
};

export default ServieCard;