import { useDispatch } from 'react-redux';
import { uiActions } from 'src/store/ui-slice';

import Image from 'next/image'
import cartlogo from "../assets/Cart.svg"

import * as Styled from '../styles/Header'

const CartButton = () => {

    const dispatch = useDispatch();

    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    };

    return (
        <Styled.Cart onClick={toggleCartHandler}>
            <Image src={cartlogo} alt="cart" />
            <h4>1</h4>

        </Styled.Cart>
    );
};

export default CartButton;
