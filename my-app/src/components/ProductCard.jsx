import { AiFillHeart, AiOutlineShareAlt } from 'react-icons/ai';

const ProductCard = (props) => {
    return (
        <div className="box">
            <span className="discount">{props.discount}</span>
            <div className="image">
                <div className="gradiant"></div>
                <img src={props.img} alt="" />
                <div className="icons">
                    <a href="#"><AiFillHeart /></a>
                    <a href="#" className='cart-btn'>add to cart</a>
                    <a href="#"><AiOutlineShareAlt /></a>
                </div>
            </div>
            <div className="content">
                <h3>flower pot</h3>
                <div className="price">{props.discountPrice} <span>{props.price}</span></div>
            </div>
        </div>
    )
};

export default ProductCard;