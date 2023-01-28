import { GlobalStyles } from 'src/styles/GlobalStyles '
import { Footer } from 'src/styles/Footer'
import Header from 'src/components/header'
import Home from 'src/components/home'

export default function App() {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Home />
            <Footer>MKS Sistemas © Todos os direitos reservados</Footer>
        </>
    )
}
