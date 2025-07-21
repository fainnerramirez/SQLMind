import { Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { sql } from "@codemirror/lang-sql";
import CodeMirror from "@uiw/react-codemirror";
import { FaHistory } from "react-icons/fa";
import type { historyProps } from "../../stores/sql-mind-store";

const TableQuery = ({ data }: { data: historyProps[] }) => {
    return (
        <TableContainer
            bg={"rgba(114, 92, 173, 0.3)"}
            mt={{ base: 0, lg: 10 }}
            minHeight={300}
            maxHeight={400}
            overflowY="auto" 
        >
            <Table size='sm'>
                <Thead>
                    <Tr>
                        <Th>
                            <Text as="h3" size={"lg"} display={"flex"} alignItems={"center"} gap={1}>
                                <FaHistory />
                                Historial de consultas
                            </Text>
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        data.map((item) => {
                            return (
                                <Tr key={new Date().getTime()}>
                                    <Td>
                                        <CodeMirror
                                            value={item.queryIA}
                                            height="auto"
                                            extensions={[sql()]}
                                        />
                                    </Td>
                                </Tr>
                            )
                        })
                    }
                </Tbody>
            </Table>
        </TableContainer>

    )
}

export default TableQuery;