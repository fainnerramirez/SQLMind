import { Box, Card, CardBody, CardFooter, CardHeader, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import { UserConsultNatural } from './components/user-consult-natural'
import HeadApp from './components/head-app'
import ViewSQLEditor from './components/view-sql-editor'
import UserHistoryQuerys from './components/user-history-querys'

const App = () => {
  return (
    <Stack direction={{ base: "column", lg: "row" }} height={"100vh"}>
      <Card width={{ base: "100%", lg: "50%" }} >
        <CardHeader>
          <HeadApp />
        </CardHeader>
        <CardBody>
          <VStack>
            <UserConsultNatural />
            <ViewSQLEditor />
          </VStack>
        </CardBody>
        <CardFooter textAlign={"center"} width={"100%"}>
          <Text textAlign={"center"} width={"100%"}>Con ❤️ Por Fainner Ramirez</Text>
        </CardFooter>
      </Card>
      <Card width={{ base: "100%", lg: "50%" }} >
        <CardHeader>
          <Heading as="h3" size={"lg"}>Historial de querys</Heading>
        </CardHeader>
        <CardBody>
          <UserHistoryQuerys />
        </CardBody>
      </Card>
    </Stack>
  )
}

export default App;