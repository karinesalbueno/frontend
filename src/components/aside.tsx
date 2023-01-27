import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group'

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


    const { title, price, description, id, isOpen, onClose } = props;
    return (
        <>
            <Styled.Backdrop isOpen={isOpen} onClick={onClose} />
            <CSSTransition nodeRef={nodeRef} in={isOpen} timeout={200} classNames="modal__right" unmountOnExit>
                <Styled.Aside ref={nodeRef}>
                    {title}

                </Styled.Aside>
            </CSSTransition>
        </>
    )
}
