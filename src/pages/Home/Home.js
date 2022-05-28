import React from 'react';
import Banner from '../Banner/Banner';
import CarChemistry from '../CarChemistry/CarChemistry';
import Item from '../Item/Item';
import Review from '../Review/Review';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Item></Item>
            <Review></Review>
            <CarChemistry></CarChemistry>
            

        </div>
    );
};

export default Home;