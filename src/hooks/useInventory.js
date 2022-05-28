import { useEffect, useState } from "react";

const useInventory = id =>{

    const [product, setProduct] = useState({})

    useEffect( () =>{
        const url = `https://dry-mountain-49555.herokuapp.com/product/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setProduct(data))
    }, [product])

    return [product]
}

export default useInventory;