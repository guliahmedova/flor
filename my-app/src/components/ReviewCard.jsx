import { AiFillStar, AiOutlineMacCommand } from 'react-icons/ai';

const ReviewCard = (props) => {
    return (
        <div className="box">
            <div className="stars">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis temporibus fugiat enim aliquid asperiores consequuntur autem qui sapiente quidem veritatis id, ratione molestiae vel
                blanditiis doloremque impedit architecto suscipit vero!</p>
            <div className="user">
                <img src={props.img} alt="" />
                <div className="user-info">
                    <h3>{props.name}</h3>
                    <span>happy customer</span>
                </div>
            </div>
            <span className='quote-right'><AiOutlineMacCommand /></span>
        </div>
    )
}

export default ReviewCard