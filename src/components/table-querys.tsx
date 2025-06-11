import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import type { historyProps } from "../../stores/sql-mind-store";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";

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
                                <Tr>
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