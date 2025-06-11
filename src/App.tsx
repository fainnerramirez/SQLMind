import { Box, Card, CardBody, CardHeader, Divider, Stack, Text, VStack } from '@chakra-ui/react'
import { UserConsultNatural } from './components/user-consult-natural'
import HeadApp from './components/head-app'
import ViewSQLEditor from './components/view-sql-editor'
import UserHistoryQuerys from './components/user-history-querys'
import { FaHistory } from 'react-icons/fa'

const App = () => {
  return (
    <>
      <Stack
        direction={{ base: "column", lg: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
        height={{base: "100%", lg: "85vh"}}
        mt={3}
        mb={1}
        spacing={{base: 5, md: 10}}
        >
        <Card width={{ base: "95%", lg: "40%" }}>
          <CardHeader>
            <HeadApp />
          </CardHeader>
          <CardBody>
            <VStack>
              <UserConsultNatural />
              <ViewSQLEditor />
            </VStack>
          </CardBody>
        </Card>
        <Card width={{ base: "95%", lg: "40%" }}>
          <CardHeader>
            <Text as="h3" size={"lg"} display={"flex"} alignItems={"center"} gap={1}>
              <FaHistory />
              Historial</Text>
          </CardHeader>
          <CardBody>
            <UserHistoryQuerys />
          </CardBody>
        </Card>
      </Stack>
      <Divider height={1} bg={"gray.300"}/>
      <Box width={"100%"} p={3}>
        <Text width={"100%"} textAlign={{base: "center", lg: "left"}}>Con ❤️ Por Fainner Ramirez</Text>
      </Box>
    </>
  )
}

export default App;