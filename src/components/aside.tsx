import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group'
import Image from 'next/image'

import CardsFromBag from './cardsBag';
import cartCloseWeb from "../assets/Close_cart.svg"
import cartCloseMobile from "../assets/Close_cart-mobile.svg"

import * as Styled from '../styles/Aside'

interface ICardProps {
    isOpen: boolean;
    onClose: () => void;
}[]

export default function Aside(props: ICardProps) {
    const nodeRef = useRef(null)
    const { isOpen, onClose } = props;

    const getWidthDevice = document.body.scrollWidth;

    const ImageRelativeWidth = getWidthDevice >= 768 ? cartCloseWeb : cartCloseMobile

    return (
        <>
            <Styled.Backdrop isOpen={isOpen} onClick={onClose} />
            <CSSTransition nodeRef={nodeRef} in={isOpen} timeout={200} className="modal__right" unmountOnExit>
                <Styled.Aside ref={nodeRef}>
                    <Styled.Header>
                        <h4>Carrinho de compras</h4>
                        <Image src={ImageRelativeWidth} alt="esc" onClick={onClose} />
                    </Styled.Header>

                    <CardsFromBag />

                    <Styled.Footer>Finalizar compra</Styled.Footer>

                </Styled.Aside>
            </CSSTransition>
        </>
    )
}
