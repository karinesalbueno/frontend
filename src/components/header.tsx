import Image from 'next/image'
import Logo1 from "../assets/MKS.svg"
import Logo2 from "../assets/Sistemas.svg"
import CartButton from './cart'

import * as Styled from '../styles/Header'

export default function Header() {
    return (
        <Styled.Header>
            <Styled.Logo>
                <Image src={Logo1} alt="mks" />
                <Image src={Logo2} alt="sistemas" id='logo' />
            </Styled.Logo>

            <CartButton />
        </Styled.Header>
    )
}
