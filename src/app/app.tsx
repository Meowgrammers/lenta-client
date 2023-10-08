import '@tremor/react'
import { withProviders } from './providers'
import './styles/global-styles.css'
import { Layout } from './layouts/layout.'

const App = () => {
  return <Layout />
}

export default withProviders(App)
