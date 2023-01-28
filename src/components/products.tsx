import { useEffect, useState } from 'react';

import ProductItem from './productItem';
import ShimmerSkeleton from './skeleton';

import * as Styled from '../styles/Home'

const Products = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [array, setArray] = useState([]);

    const fetchProductsData = async () => {
        try {
            const response = await fetch('https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC');
            const res = await response.json();
            setIsLoading(false)
            setData(res.products)
        }
        catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        fetchProductsData()
    }, [])

    useEffect(() => {
        if (isLoading) setArray(new Array(8).fill(''));
    }, [isLoading])

    return (
        <Styled.Card>
            {isLoading ?
                <Styled.CardItemUl>
                    {array.map((_, index) => {
                        return <ShimmerSkeleton key={index} />
                    })}
                </Styled.CardItemUl>

                :
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
            }
        </Styled.Card>
    );
};

export default Products;
