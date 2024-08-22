import React from 'react';
import { RiMenu3Line } from 'react-icons/ri';

function Header() {
    return (
        <header>
            <nav>
                <div>
                    <RiMenu3Line className='menu-icon' />
                    <p className='brand'>AURA</p>
                </div>

                <div>
                    <p>Account</p>
                    <p>About</p>
                    <p>Cart</p>
                </div>
            </nav>
        </header>
    );
}

export default Header;
