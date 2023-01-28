import { GlobalStyles } from 'src/styles/GlobalStyles '
import { Footer } from 'src/styles/Footer'
import Header from 'src/components/header'
import Home from 'src/components/home'

import * as Styled from '../styles/Body'

export default function App() {
    return (
        <Styled.Body>
            <GlobalStyles />
            <Header />
            <Home />
            <Footer>MKS Sistemas © Todos os direitos reservados</Footer>
        </Styled.Body>
    )
}
