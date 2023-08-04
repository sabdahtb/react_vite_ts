import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux/es/exports'

import Routes from './routes'
import { store } from './store'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  )
}

export default App
