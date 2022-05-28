import React from 'react';
// import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import Products from '../Products/Products';
import './Item.css'

const Item = () => {
    const [products] = useProducts();
    return (
        <div>
            <h2 className='text-center mt-5'>Our Inventory Item</h2>
                <div className='item-container mt-5 text-center'>
                
                {
                    products.slice(0, 6).map(product => <Products key={product._id} product={product}></Products>)

                }

                </div>
        </div>
    );
};

export default Item;