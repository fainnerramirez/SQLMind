import { Center, Heading, Image, Text } from "@chakra-ui/react"
import emptyFolder from "../assets/empty-querys.png";

const UserHistoryQuerys: React.FC = () => {
    return (
        <Center flexDirection={"column"}>
            <Image src={emptyFolder} width={200} height={200} />
            <Heading as="h5" size={"md"}>No Hay Consultas</Heading>
            <Text color={"gray"} textAlign={"center"}>Aún no se han generado consultas. <br/> Comienza traduciendo lenguaje natural a SQL.</Text>
        </Center>
    )
}

export default UserHistoryQuerys;