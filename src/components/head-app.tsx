import { Flex, Heading, HStack, Text } from "@chakra-ui/react"
import LogoSQL from "../assets/logo";

const HeadApp: React.FC = () => {
    return (
        <Flex justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <HStack>
                <LogoSQL />
                <Heading>
                    SQLMind
                </Heading>
            </HStack>
            <Text>
                Traduce lenguaje natural a SQL con IA
            </Text>
        </Flex>
    )
}

export default HeadApp;