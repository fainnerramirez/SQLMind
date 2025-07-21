import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { sql } from "@codemirror/lang-sql";
import CodeMirror from "@uiw/react-codemirror";
import type { historyProps } from "../../stores/sql-mind-store";

const TableQuery = ({ data }: { data: historyProps[] }) => {
    return (
        <TableContainer>
            <Table size='sm'>
                <Thead>
                    <Tr>
                        <Th></Th>
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