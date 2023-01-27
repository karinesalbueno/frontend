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
            <img src={image} alt="image" />

            <Styled.InformationsDiv>
                <h3>{title}</h3>
                <div className='price'>R${price}</div>
            </Styled.InformationsDiv>

            <small>{description}</small>

            <div>
                <button onClick={() => { }}>Comprar</button>
            </div>
        </Styled.CardItemLi>
    )
}
