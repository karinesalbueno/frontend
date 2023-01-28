import { useDispatch } from 'react-redux';
import Image from 'next/image'
import logoBag from "../assets/shopping-bag.svg"

import * as Styled from '../styles/Home'
import { cartActions } from 'src/store/cart-slice';

interface ICardProps {
    id: number;
    title: string;
    description: string;
    image: string;
    price: any;
}[]

export default function ProductItem(props: ICardProps) {
    const dispatch = useDispatch();

    const { title, price, description, image, id } = props;

    const addToBagHandler = () => {
        dispatch(
            cartActions.addItemToCart({
                id,
                title,
                price,
                image
            })
        );
    };

    return (
        <Styled.CardItemLi>
            <div className='content'>
                <Styled.Image>
                    <img src={image} alt="image" />
                </Styled.Image>

                <Styled.InformationsDiv>
                    <h3>{title}</h3>
                    <Styled.Price>R${price}</Styled.Price>
                </Styled.InformationsDiv>

                <small>{description}</small>
            </div>

            <Styled.Button onClick={addToBagHandler}>
                <Image src={logoBag} alt="bag" />
                <span>comprar</span>
            </Styled.Button>
        </Styled.CardItemLi>
    )
}
