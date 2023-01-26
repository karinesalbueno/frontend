import * as Styled from '../styles/Home'

interface ICardProps {
    id: number;
    title: string;
    description: string;
    price: any;
}[]

export default function ProductItem(props: ICardProps) {

    const { title, price, description, id } = props;
    return (
        <Styled.CardItemLi>
            <div>
                <h3>{title}</h3>
                <div>${price}</div>
            </div>
            <p>{description}</p>
            <div>
                <button onClick={() => { }}>Comprar</button>
            </div>
        </Styled.CardItemLi>
    )
}
