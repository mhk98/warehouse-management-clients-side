import { Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './Inventory.css'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import useInventory from '../../hooks/useInventory';


const Inventory = () => {
    const {id} = useParams()
    const [product] = useInventory(id)
    const navigate = useNavigate()

    const handleDeliveredItem = () =>{
        const quantity = (product.quantity)-1;
        const newQuantity = quantity;
        

        const url = `https://dry-mountain-49555.herokuapp.com/product/${id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity: newQuantity })
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast('Thank you for successfully delete item')
 
                }

            })
    }
    const handleAddItem = event =>{
        const quantity = (product.quantity) + 1;
        const newQuantity = quantity;
        

        const url = `https://dry-mountain-49555.herokuapp.com/product/${id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity: newQuantity })
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast('Thank you for successfully add item')
 
                }

            })
    }

    return (
        <div>
            <div className='card text-center'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product.img} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text>Price: {product.price}$</Card.Text>
                            <Card.Text>Quantity: {product.quantity}</Card.Text>
                            <Card.Text>Supplier: {product.supplier}</Card.Text>
                            <div className='mt-4 d-flex justify-content-between'>
                            <Button onClick={handleDeliveredItem} variant="primary">Delivered Item</Button>
                            <Button onClick={handleAddItem} variant="primary">Add Item</Button>
                            </div>
                        </Card.Body>
                    </Card>
            </div>
            
            <button className=' w-40 p-2 item-btn my-5 mx-0 d-block ' onClick={ () => navigate('/allitem')}>Managed Inventories</button>

            <ToastContainer/>

        </div>
    );
};

export default Inventory;