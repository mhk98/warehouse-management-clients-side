import React from 'react';
import { Card } from 'react-bootstrap';

const UpdateProduct = ({product}) => {
    const {name, img, description, price, quantity, supplier} = product;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>Price: {price}</Card.Text>
            <Card.Text>Quantity: {quantity}</Card.Text>
            <Card.Text>Supplier: {supplier}</Card.Text>


        </Card.Body>
    </Card>
        </div>
    );
};

export default UpdateProduct;