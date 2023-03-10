import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { signOut, auth } from './firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const login = () => {
        if(user) {
            signOut(auth).then(() => {
                console.log("Signed Out");
            });
        }
    };

    return (
        <div className='header'>
            <Link to="/"><img className='header_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='logo' /></Link>
            <div className='header_search'>
                <input className='header_searchInput' type='text' />
                <SearchIcon className='header__searchIcon' />
            </div>
            <div className='header_nav'>
                <Link to="/login">
                    <div onClick={login} className='header_option'>
                        <span className='header_optionOne'>Hello {!user ? 'Guest' : user.email}</span>
                        <span className='header_optionTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link to={'/orders'}>
                    <div className='header_option'>
                        <span className='header_optionOne'>Returns</span>
                        <span className='header_optionTwo'>& Orders</span>
                    </div>
                </Link>
                <div className='header_option'>
                    <span className='header_optionOne'>Your</span>
                    <span className='header_optionTwo'>Prime</span>
                </div>
                <Link to="/checkout">
                    <div className='header_basket'>
                        <ShoppingCartIcon />
                        <span className='header_basketCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;