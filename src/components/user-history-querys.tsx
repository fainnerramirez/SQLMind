import { Center, Image, Text } from "@chakra-ui/react"
import emptyFolder from "../assets/empty-querys.png";

const UserHistoryQuerys: React.FC = () => {
    return (
        <Center flexDirection={"column"}>
            <Image src={emptyFolder} width={200} height={200} />
            <Text color={"gray"}>Aún no se han generados consultas</Text>
        </Center>
    )
}

export default UserHistoryQuerys;