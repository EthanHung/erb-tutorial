import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import ProductHolder from './components/ProductHolder';


const FakeApiCall = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log('data', data);
            setProducts(data);
        });
    }, []);

    return (
        <div className="container" id="products">
            <div className="row">
                {
                    products.map((product, i) => {
                        return <ProductHolder key={i} productData={product} />;
                    })
                }
            </div>
        </div>
    );
}

export default FakeApiCall;