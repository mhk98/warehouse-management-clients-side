import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Products = ({product}) => {
    const navigate = useNavigate();
    const {_id, name, img, description, price, quantity, supplier} = product;

    const handleNavigateUpdate = id =>{
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='mx-auto'>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>Price: {price}</Card.Text>
            <Card.Text>Quantity: {quantity}</Card.Text>
            <Card.Text>Supplier: {supplier}</Card.Text>
        <Button variant="primary" onClick={ () => handleNavigateUpdate(_id)} >Update</Button>

        </Card.Body>
    </Card>
        </div>
    );
};

export default Products;