import Image from 'next/image'
import logoBag from "../assets/shopping-bag.svg"

import * as Styled from '../styles/Home'

interface ICardProps {
    id: number;
    title: string;
    description: string;
    image: string;
    price: any;
}[]

export default function ProductItem(props: ICardProps) {

    const { title, price, description, image, id } = props;
    return (
        <Styled.CardItemLi>
            <div className='content'>
                <img src={image} alt="image" />
                <Styled.InformationsDiv>
                    <h3>{title}</h3>
                    <div className='price'>R${price}</div>
                </Styled.InformationsDiv>

                <small>{description}</small>
            </div>

            <Styled.Button onClick={() => { }}>
                <Image src={logoBag} alt="bag" />
                <span>comprar</span>
            </Styled.Button>
        </Styled.CardItemLi>
    )
}
