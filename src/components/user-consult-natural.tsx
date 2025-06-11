import { Box, Textarea } from "@chakra-ui/react";

export const UserConsultNatural: React.FC = () => {
    return (
        <Box width={"100%"} margin={"auto"}>
            <Textarea margin={"auto"} rows={8} width={"100%"} autoFocus></Textarea>
        </Box>
    ); 
}