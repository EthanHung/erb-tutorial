import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import ProductHolder from './components/ProductHolder';
import axios from 'axios';

const FakeApiCall = () => {
    const [products, setProducts] = useState([]);

    const getData = async () => {
        try {
            const result = (await axios.get('https://fakestoreapi.com/products'));
            console.log('getData result', result)
            setProducts(result.data);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getData();
        // axios.get('https://fakestoreapi.com/products').then(res => {
            
        //     console.log('res', res)
        //     setProducts(res.data);
        // })
    }, []);

    const renderProduct = () => {

        return products.map((product, i) => {
            return <ProductHolder key={i} productData={product} />
        })
    };

    return (
        <div className="container" id="products">
            <div className="row">
                
            {renderProduct()}
            </div>
        </div>
    );
}

export default FakeApiCall;