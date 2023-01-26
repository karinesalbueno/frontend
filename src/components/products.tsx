import { useEffect, useState } from 'react';
import ProductItem from './productItem';

import * as Styled from '../styles/Home'

const Products = () => {

    const [data, setData] = useState([])

    const fetchProductsData = async () => {
        const response = await fetch('https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC');
        const res = await response.json();
        setData(res.products)
    };

    useEffect(() => {
        fetchProductsData()
    }, [])

    return (
        <Styled.Card>
            <Styled.CardItemUl>
                {data.map((product) => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        image={product.photo}
                        title={product.name}
                        price={parseFloat(product.price)}
                        description={product.description}
                    />
                ))}
            </Styled.CardItemUl>
        </Styled.Card>
    );
};

export default Products;
