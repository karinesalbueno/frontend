import * as Styled from '../styles/Home'
import CardItem from './cardItem';

export default function Home() {

    return (
        <Styled.Body>
          <CardItem id={0} title={''} description={''} price={undefined} />
        </Styled.Body>
    )
}
