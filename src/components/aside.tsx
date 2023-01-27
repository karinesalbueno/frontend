import { useMemo, useRef } from 'react';
import { CSSTransition } from 'react-transition-group'

import Image from 'next/image'
import cartCloseWeb from "../assets/Close_cart.svg"
import cartCloseMobile from "../assets/Close_cart-mobile.svg"

import * as Styled from '../styles/Aside'

interface ICardProps {
    id: number;
    title: string;
    description: string;
    price: any;
    isOpen: boolean;
    onClose: () => void;
}[]

export default function Aside(props: ICardProps) {
    const nodeRef = useRef(null)

    const getWidthDevice = document.body.scrollWidth;

    const ImageRelativeWidth = getWidthDevice >= 768 ? cartCloseWeb : cartCloseMobile

    const { title, price, description, id, isOpen, onClose } = props;
    return (
        <>
            <Styled.Backdrop isOpen={isOpen} onClick={onClose} />
            <CSSTransition nodeRef={nodeRef} in={isOpen} timeout={200} classNames="modal__right" unmountOnExit>
                <Styled.Aside ref={nodeRef}>
                    <Styled.Header>
                        <h4>Carrinho de compras</h4>
                        <Image src={ImageRelativeWidth} alt="esc" onClick={onClose} />
                    </Styled.Header>

                    {title}

                </Styled.Aside>
            </CSSTransition>
        </>
    )
}
