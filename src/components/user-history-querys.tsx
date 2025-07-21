import { Center, Heading, Image, Text } from "@chakra-ui/react";
import { useSQLMindStore } from "../../stores/sql-mind-store";
import emptyFolder from "../assets/empty-querys.png";
import TableQuery from "./table-querys";

const UserHistoryQuerys: React.FC = () => {

    const { historyQuerys } = useSQLMindStore();

    return (
        <>
            {
                historyQuerys.length === 0 ? (
                    <Center flexDirection={"column"} bg={"rgba(114, 92, 173, 0.3)"}>
                        <Image src={emptyFolder} width={200} height={200} />
                        <Heading as="h5" size={"md"}>No Hay Consultas</Heading>
                        <Text color={"gray"} textAlign={"center"}>Aún no se han generado consultas. <br /> Comienza traduciendo lenguaje natural a SQL.</Text>
                    </Center>
                ) : (
                    <TableQuery key={new Date().getTime()} data={historyQuerys} />
                )
            }
        </>
    )
}

export default UserHistoryQuerys;