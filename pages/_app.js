import '../styles/globals.css'
import configStore from '../store/configStore'
import {Provider} from 'react-redux'
const store = configStore()

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
