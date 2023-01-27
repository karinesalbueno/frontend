
import Image from 'next/image'
import cartlogo from "../assets/Cart.svg"

import * as Styled from '../styles/Header'

const CartButton = () => {

    return (
        <Styled.Cart>
            <Image src={cartlogo} alt="cart" />
            <h4>1</h4>
        </Styled.Cart>
    );
};

export default CartButton;
