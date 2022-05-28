import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import './AllItem.css';

const AllItem = () => {
    const [products, setProducts] = useProducts();
    const navigate = useNavigate();

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `https://dry-mountain-49555.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                const remaining = products.filter(product => product._id !==id);
                setProducts(remaining)
            })
        }
    }

    return (
            
        <div className>
            
        <div className='allitem-container item mt-5 text-center shadow p-3 mb-5 bg-body rounded'>
            {
                    products.map(product => 
                        <div key={product._id} className='mx-auto'>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.img} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: {product.price}</Card.Text>
                <Card.Text>Quantity: {product.quantity}</Card.Text>
                <Card.Text>Supplier: {product.supplier}</Card.Text>
                <Button onClick={ () => handleDelete(product._id)} className='w-100' variant="primary">Delete Item</Button>
            </Card.Body>
        </Card>

            </div>

                        )

                }

        </div>

        
    <Button className=' item-btn d-block w-50 mx-auto p-3 mt-5 mb-5' onClick={() =>navigate('/additem')}>Add New Item</Button>
        </div>
    
    );
};

export default AllItem;