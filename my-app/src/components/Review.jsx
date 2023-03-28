import reviewsData from '../api/reviewsData';
import ReviewCard from './ReviewCard';

const Review = () => {
    const reviewCards = reviewsData.map(item => {
        return <ReviewCard key={item.id} {...item} />
    });

    return (
        <section className="review" id="review">
            <h1 className="heading">customer's <span>review</span></h1>
            <div className="box-container">
              {reviewCards}
            </div>
        </section>
    )
}

export default Review