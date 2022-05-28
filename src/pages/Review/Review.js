import React from 'react';
import Mercedes from '../../image/item/Mercedes.jpg'
import Ferrari from '../../image/item/Ferrari.jpg'
import Honda from '../../image/item/Honda.jpg'
import Ford from '../../image/item/Toyota.jpg'
import person1 from '../../image/experts/person-1.png'
import person2 from '../../image/experts/person-2.png'
import person3 from '../../image/experts/person-3.png'
import person4 from '../../image/experts/person-4.png'
import './Review.css'

const Review = () => {
    return (
        <div className='ms-5 mt-5'>
            <h1>The latest new car releases and expert reviews</h1>
            <p>Get our experts' honest take on new makes and models.</p>
            <div className='review mb-3'>
                <div className='shadow-lg p-3 mb-5 bg-body rounded'>
                    <img src={Mercedes} alt=''width={280} height={200}/>
                    <p>EXPERT REVIEW</p>
                    <h5>2022 Hyundai Ioniq 5 Review: The EV We’ve Been Waiting For</h5>
                    <div className='d-flex'>
                    <div>
                    <img src={person1} alt='' width={64}/>
                    </div>
                    <div>
                    <p>By Joe Wiesenfelder</p>
                    <small>Executive Editor</small>
                    </div>
                    </div>
                </div>
                <div className='shadow-lg p-3 mb-5 bg-body rounded'>
                    <img src={Ferrari} alt=''width={280} height={200}/>
                    <p>EXPERT REVIEW</p>
                    <h5>2022 Kia EV6 Review: Doing It Better Than Most</h5>
                    <div className='d-flex'>
                    <div>
                    <img src={person2} alt='' width={64}/>
                    </div>
                    <div>
                    <p>By Joe Bruzek</p>
                    <small>Managing Editor</small>
                    </div>
                    </div>
                </div>

                <div className='shadow-lg p-3 mb-5 bg-body rounded'>
                    <img src={Honda} alt=''width={280} height={200}/>
                    <p>EXPERT REVIEW</p>
                    <h5>2022 Land Rover Range Rover Review: Old-School Luxury Lives On</h5>
                    <div className='d-flex'>
                    <div>
                    <img src={person3} alt='' width={64}/>
                    </div>
                    <div>
                    <p>Joe Brian Normile</p>
                    <small>News Editor</small>
                    </div>
                    </div>
                </div>

                <div className='shadow-lg p-3 mb-5 bg-body rounded'>
                    <img src={Ford} alt=''width={280} height={200}/>
                    <p>EXPERT REVIEW</p>
                    <h5>2023 Toyota bZ4X Review: Normal Toyota, Natural Step Into EVs</h5>
                    <div className='d-flex'>
                    <div>
                    <img src={person4} alt='' width={64}/>
                    </div>
                    <div>
                    <p>By Aaron Bragman</p>
                    <small>Detroit Bureau Chief</small>
                    </div>
                    </div>
                </div>

            </div>
            <button className='review-btn mb-5'>See more reviews</button>
        </div>
    );
};

export default Review;