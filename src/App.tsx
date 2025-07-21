import { Box, Button, Card, CardBody, CardHeader, Divider, Stack, Text, VStack } from '@chakra-ui/react'
import HeadApp from './components/head-app'
import { UserConsultNatural } from './components/user-consult-natural'
import UserHistoryQuerys from './components/user-history-querys'
import ViewSQLEditor from './components/view-sql-editor'

const App = () => {
  return (
    <>
      <Stack
        direction={{ base: "column", lg: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
        height={{ base: "100%", lg: "85vh" }}
        mt={3}
        mb={1}
        spacing={{ base: 5, md: 10 }}
      >
        <Card width={{ base: "95%", lg: "40%" }} height={"100%"} bg={"transparent"}>
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
        <Card width={{ base: "95%", lg: "40%" }} height={"100%"} bg={"transparent"}>
          <CardBody>
            <UserHistoryQuerys />
          </CardBody>
        </Card>
      </Stack>
      <Divider height={1} bg={"gray.300"} />
      <Box  p={3} bg={"rgba(114, 92, 173, 1)"} display={"flex"} flexDir={"column"} alignItems={"center"}>
        <Text color={"#FFFFFF"} width={"100%"} textAlign={"center"}>Con 😎 & 🍵 Por</Text>
        <Button _hover={{ bg: "transparent" }} onClick={() => window.open("https://github.com/fainnerramirez")} bg={"transparent"}>Fainner Ramirez</Button>
      </Box>
    </>
  )
}

export default App;