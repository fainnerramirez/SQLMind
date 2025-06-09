import { Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/react'
import { UserConsultNatural } from './components/user-consult-natural'
import HeadApp from './components/head-app'

const App = () => {
  return (
    <Card>
      <CardHeader>
        <HeadApp />
      </CardHeader>
      <CardBody>
        <UserConsultNatural />
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  )
}

export default App;