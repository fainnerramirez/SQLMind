import { Box, Heading, Text } from "@chakra-ui/react"
import LogoSQL from "../assets/logo";

const HeadApp: React.FC = () => {
    return (
        <Box>
            <Box>
                <LogoSQL />
                <Heading>
                    SQLMind
                </Heading>
            </Box>
            <Text>
                Traduce lenguaje natural a SQL con IA
            </Text>
        </Box>
    )
}

export default HeadApp;