const IconCard = (props) => {
    return (
        <div className="icons">
            <img src={props.img} alt="" />
            <div className="info">
                <h3>{props.name}</h3>
                <span>{props.desc}</span>
            </div>
        </div>
    )
}

export default IconCard