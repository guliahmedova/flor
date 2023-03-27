import { Link } from 'react-router-dom';
import { AiFillHeart, AiOutlineShopping, AiOutlineUser, AiOutlineBars } from 'react-icons/ai';

const Header = () => {
    return (
        <header className='header'>
            <input type="checkbox" name='' id='toggler' />
            <label htmlFor="toggler"><AiOutlineBars className='menu-bar' /></label>

            <Link className='logo' to='/'>flor<span>.</span></Link>

            <nav className='navbar'>
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/products'>Products</Link>
                <Link to='/review'>Review</Link>
                <Link to='/contact'>Contact</Link>
            </nav>

            <div className="icons">
                <a href="#"><AiFillHeart /></a>
                <a href="#"><AiOutlineShopping /></a>
                <a href="#"><AiOutlineUser /></a>
            </div>
        </header>
    )
}

export default Header

