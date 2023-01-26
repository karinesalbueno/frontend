import { GlobalStyles } from 'src/styles/GlobalStyles '
import Header from 'src/components/header'
import Button from 'src/components/button'
import Home from 'src/components/home'

export default function App() {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Home />
            <Button />
        </>
    )
}
