import { useEffect, useState } from "react";
import { Product } from "../Product";
import { useNavigate } from 'react-router-dom';
import './style.css'

export const ProductPicker = () => {
    const navigate = useNavigate(); 

    const [products, setProducts] = useState([]);
    const [selectedId, setSelectedId] = useState(null);

    const selectHandler = (id) => {
        setSelectedId(id)
        navigate(`/product/${id}`);
        

    }

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch('https://apps.kodim.cz/react-2/xxxmuck/products');
            const data = await response.json();
            setProducts(data);
        }

        fetchProduct();
        
    }, [])

    console.log(products)
    
        return (
            <>
            <div>{selectedId}</div>
            <div className="products__container">
           {products.map(p => <Product key={p.id} product={p} onSelect={selectHandler}/>)}
            </div>
            </>
            
            
        )
    }
   
