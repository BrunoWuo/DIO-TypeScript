import { ChakraProvider,} from '@chakra-ui/react'
import { Layout } from './components/Layout'
import { Card } from './components/Card'

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Card id={0} paragraph={'Faça o Login'} textButton={'Logar'} />
      </Layout>
    </ChakraProvider>
  )
}

export default App
