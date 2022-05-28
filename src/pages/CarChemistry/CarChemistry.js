import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCar, faCartShopping, faCircleArrowUp, faCircleCheck, faFile, faIdBadge, faNewspaper, faScrewdriverWrench, faShield, faShieldHeart } from '@fortawesome/free-solid-svg-icons';
import './CarChemistry.css'

const CarChemistry = () => {
    return (
        <div className='mx-auto'>
            <div className='text-center'>
            <h2>All the ways to find car chemistry</h2>
            <p>We're your one-stop shop for buying and selling your car. Get matched to your perfect car, or sell one swiftly.</p>
            </div>
        
        <div className='carchemistry w-75 mx-auto'>
            
        
                
                <div className='shadow-lg p-3 mb-5 bg-body rounded'>
                <div className='d-flex align-items-center icon'>
                <FontAwesomeIcon icon={faCar}></FontAwesomeIcon>
                    <h2 className='ms-4'>Shop</h2>
                </div>
                <div>
                <p className='w-75'>Find cars for sale, local dealers, and advice. Also, our price-badging and price-drop notifications keep you informed of potential deals.</p>
                <a href='#'>Find cars for sale</a>
                </div>
                </div>
    
                <div className='shadow-lg p-3 mb-5 bg-body rounded'>
                <div className='d-flex align-items-center icon'>
                <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
                
                    <h2 className='ms-4'>Research</h2>
                </div>
                <div>
                <p className='w-75'>View side-by-side comparisons, payment calculators, video reviews, and consumer reviews. These let you hear the good and the bad from current car owners.</p>
                <a href='#'>Compare what's out there</a>
                </div>
                </div>
    
                <div className='shadow-lg p-3 mb-5 bg-body rounded'>
                <div className='d-flex align-items-center icon'>
                <FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon>
                    <h2 className='ms-4'>News</h2>
                </div>
                <div>
                <p className='w-75'>Our very own Cars.com experts offer unbiased coverage of today's automotive landscape. Yes, there will be dad jokes.</p>
                <a href='#'>Learn from the best</a>
                </div>
                </div>
                
    
                
                <div className='shadow-lg p-3 mb-5 bg-body rounded'>
                <div className='d-flex align-items-center icon'>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                    <h2 className='ms-4'>Sell</h2>
                </div>
                <div>
                <p className='w-75'>Check out our free, secure methods for selling your car. You can either sell directly to a private-party shopper or get an Instant Offer from a dealership. Choose the option that’s right for you!</p>
                <a href='#'>Sell your car</a>
                </div>
                </div>
    
                <div className='shadow-lg p-3 mb-5 bg-body rounded'>
                <div className='d-flex align-items-center icon'>
                <FontAwesomeIcon icon={faScrewdriverWrench}></FontAwesomeIcon>
                    <h2 className='ms-4'>Service & Repair</h2>
                </div>
                <div>
                <p className='w-75'>Watch do-it-yourself tutorials or find local repair options.</p>
                <a href='#'>Learn to DIY</a>
                </div>
                </div>
    
                <div className='shadow-lg p-3 mb-5 bg-body rounded'>
                <div className='d-flex align-items-center icon'>
                <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                    <h2 className='ms-4'>Certified Pre-Owned</h2>
                </div>
                <div>
                <p className='w-75'>Learn why you should consider a Certified Pre-Owned car, and get info on manufacturer programs.</p>
                <a href='#'>Explore CPO</a>
                </div>
                </div>
                
        </div>

        </div>
    );
};

export default CarChemistry;