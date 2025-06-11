import { Box, Textarea } from "@chakra-ui/react";
import { type ChangeEvent } from "react";
import { useSQLMindStore } from "../../stores/sql-mind-store";

export const UserConsultNatural: React.FC = () => {

    const { setQuery } = useSQLMindStore();

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target;
        setQuery(value);
    }

    return (
        <Box width={"100%"} margin={"auto"}>
            <Textarea
                margin={"auto"}
                width={"100%"}
                rows={8}
                onChange={handleChange}
                autoFocus>
            </Textarea>
        </Box>
    );
}