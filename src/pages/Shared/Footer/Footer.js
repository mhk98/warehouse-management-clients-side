import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear();
    return (
        <div className='footer text-center'>
            <p className='pt-5'><small>copyright @ {year} </small></p>
        </div>
    );
};

export default Footer;