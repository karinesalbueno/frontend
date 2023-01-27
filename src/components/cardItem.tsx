import * as Styled from '../styles/Home'

interface ICardProps {
    id: number;
    title: string;
    description: string;
    price: any;
}[]

export default function CardItem(props: ICardProps) {

    const { title, price, description, id } = props;
    return (
        <li>
            <Styled.Card>
                <div>
                    <h3>{title}</h3>
                    <div>${price}</div>
                </div>
                <p>{description}</p>
                <div>
                    <button onClick={() => { }}>Comprar</button>
                </div>
            </Styled.Card>
        </li>
    )
}
