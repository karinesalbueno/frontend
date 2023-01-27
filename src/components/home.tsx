import { useSelector } from 'react-redux';
import * as Styled from '../styles/Home'
import Aside from './aside';
import Products from './products'


interface IVisible {
    active: { cartIsVisible: any };
}
export default function Home() {
    const showCart = useSelector((state: IVisible) => state.active.cartIsVisible);

    return (
        <Styled.Main>

            <Products />
            {showCart && <Aside id={0} title={'produto'} description={''} price={100} />}
        </Styled.Main>
    )
}
