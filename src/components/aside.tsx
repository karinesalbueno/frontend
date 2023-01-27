import * as Styled from '../styles/Home'

interface ICardProps {
    id: number;
    title: string;
    description: string;
    price: any;
}[]

export default function Aside(props: ICardProps) {

    const { title, price, description, id } = props;
    return (
        <div>
            <Styled.Card>
                {title}

            </Styled.Card>
        </div>
    )
}
