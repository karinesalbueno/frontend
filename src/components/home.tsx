import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from 'src/store/ui-slice';

import Aside from './aside';
import Products from './products'

import * as Styled from '../styles/Home'

interface IVisible {
    active: { cartIsVisible: boolean };
}

export default function Home() {
    const showCart = useSelector((state: IVisible) => state.active.cartIsVisible);

    const dispatch = useDispatch();

    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    };

    return (
        <Styled.Main>
            <Products />
            {showCart && <Aside id={0} title={'produto'} description={''} price={100}
                isOpen={showCart}
                onClose={toggleCartHandler}
            />}
        </Styled.Main>
    )
}
