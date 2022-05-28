import React from 'react';
import useProducts from '../hooks/useProducts';
import UpdateProduct from './UpdateProduct';

const MyItem = () => {
    const [products, setProducts] = useProducts()
    return (
        <div>
            <h2 className='text-center mt-5'>Our Inventory Item</h2>
                <div className='item-container mt-5 text-center'>
                
                {
                    products.map(product => <UpdateProduct key={product._id} product={product}></UpdateProduct>)

                }
                </div>
        </div>
    );
};

export default MyItem;