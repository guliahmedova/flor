import IconCard from './IconCard';
import iconsData from '../api/iconsData';

const Icons = () => {
    const iconCards = iconsData.map(item => {
        return (<IconCard key={item.id} {...item} />)
    });

    return (
        <section className="icons-container">
            {iconCards}
        </section>
    )
}

export default Icons