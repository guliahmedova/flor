import img from '../../public/images/contact.avif';

const Contact = () => {
    return (
        <section className='contect' id='contact'>
            <h1 className='heading'> <span>contact</span> us</h1>
            <div className="row">
                <form>
                    <input type="text" placeholder='name' className='box' />
                    <input type="email" placeholder='email' className='box' />
                    <input type="number" placeholder='number' className='box' />
                    <textarea className='box' placeholder='message'></textarea>
                    <input type="submit" value="send message" className='btn' />
                </form>

                <div className="image">
                    <img src={img} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Contact