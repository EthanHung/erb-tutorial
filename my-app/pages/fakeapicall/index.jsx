import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import ProductHolder from './components/ProductHolder';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

import SizeFilter from './components/SizeFilter';
import ColorFilter from './components/ColorFilter';
import BrandFilter from './components/BrandFilter';
import CategoriesFilter from './components/CategoriesFilter';
import { Box } from '@mui/material';

function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

const FakeApiCall = () => {
    const [products, setProducts] = useState([]);
    const [productData, setProductData] = useState([]);
    const [productCategory, setProductCategory] = useState([]);

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
                
                setProductData(data);

                const category = removeDuplicates(data.map(item => item.category));

                setProductCategory(
                    category.map((item, i) => {
                        return {
                            name: item,
                            link: `/category/${i + 1}`
                        };
                    })
                );

                for (let i = 0; i < data.length; i += 3) {
                    let dataBlock0 = data[i];
                    let dataBlock1 = data[i + 1]
                    let dataBlock2 = data[i + 2]

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

/*
                let tempAry = [];
                data.forEach((product, i) => {

                    if (i % 3 === 0) {

                        const tempData = [];

                        tempAry.forEach((itm) => {
                            tempData.push(<ProductHolder productData={itm} />);
                            result.push(<div className='row'>{tempData}</div>);
                        });

                        tempAry = [];
                    }

                    tempAry.push(product);
                });

                console.log(result);

                setProducts(result);
                */
            });
    }, []);

    return (
        <div className="container" id="products">
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Category
                </AccordionSummary>
                <AccordionDetails>
                    {
                        productCategory.map(item => <CategoriesFilter categoryData={item} />)
                    }
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Brand
                </AccordionSummary>
                <AccordionDetails>
                    <BrandFilter />
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Color
                </AccordionSummary>
                <AccordionDetails>
                    <ColorFilter />
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Size
                </AccordionSummary>
                <AccordionDetails>
                    <SizeFilter />
                </AccordionDetails>
            </Accordion>


            {
                products.map((product, i) => {
                    return <div key={i}>{product}</div>;
                })
            }
        </div>
    )
}



export default FakeApiCall;





// aksjhdfkljhasd;lfja;ls