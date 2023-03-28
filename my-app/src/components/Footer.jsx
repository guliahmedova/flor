import credit from '../images/credit.png';

const Footer = () => {
    return (
        <section className="footer">
            <div className="box-container">
                <div className="box">
                    <h3>quick as</h3>
                    <a>Home</a>
                    <a>About</a>
                    <a>Products</a>
                    <a>Review</a>
                    <a>Contact</a>
                </div>
                <div className="box">
                    <h3>extra as</h3>
                    <a>my account</a>
                    <a>my order</a>
                    <a>my favorite</a>
                    <a>Review</a>
                    <a>Contact</a>
                </div>
                <div className="box">
                    <h3>locations</h3>
                    <a>india</a>
                    <a>USA</a>
                    <a>japan</a>
                    <a>france</a>
                </div>
                <div className="box">
                    <h3>contact info</h3>
                    <a>+112-456-8478</a>
                    <a>example@gmail.com</a>
                    <a>az, baku</a>
                    <img src={credit} alt="" />
                </div>
            </div>

            <div className="credit">
                created by <span>ms. web design</span> | all rights reserved
            </div>
        </section>
    )
}

export default Footer