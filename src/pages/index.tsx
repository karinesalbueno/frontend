import { Provider } from 'react-redux'

import store from 'src/store/store'
import App from './App'

export default function Home() {
    return (
        <Provider store={store} children={<App />} />
    )
}
