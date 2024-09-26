import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import ProductHolder from './components/ProductHolder';


const FakeApiCall = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {

        fetch('https://fakestoreapi.com/products', {
            // method: 'POST'
        })
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            const result = [];
            console.log('data', data)
            
            for (let i = 0 ; i < data.length;  i += 3) {
                let dataBlock0 = data[i];
                let dataBlock1 = data[i+1]
                let dataBlock2 = data[i+2]

                result.push(
                    <div className="row">
                        {
                            dataBlock0 && <ProductHolder productData={dataBlock0} />
                        }
                        {
                            dataBlock1 && <ProductHolder productData={dataBlock1} />
                        }
                        {
                            dataBlock2 && <ProductHolder productData={dataBlock2} />
                        }
                    </div>
                );
            }
            setProducts(result)

            
            // let tempAry = [];
            // data.forEach((product, i) => {

            //     if (i % 3 === 0) {
                    
            //         const tempData = [];
                    
            //         tempAry.forEach((itm) => {
            //             tempData.push(<ProductHolder productData={itm} />);
            //             result.push(<div className='row'>{tempData}</div>);
            //         });

            //         tempAry = [];
            //     }
                
            //     tempAry.push(product);
            // });

            // console.log(result);
            
            // setProducts(result);
            
        });
    }, []);

    return (
        <div className="container" id="products">
        {
            
            products.map((product, i) => {
                return <div key={i}>{product}</div>;
            })
            
        }
        </div>
    )
}

export default FakeApiCall;