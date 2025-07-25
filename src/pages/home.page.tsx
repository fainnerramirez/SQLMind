import { Box, Heading, Spinner, Stack, Text, VStack } from "@chakra-ui/react";
import { FirebaseError } from "firebase/app";
import { signInAnonymously } from "firebase/auth";
import { useState } from "react";
import { TbHandClick } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useSQLMindStore } from "../../stores/sql-mind-store";
import LogoSQL from "../assets/logo";
import { auth } from "../firebase/config";

const HomePage: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const { setUser } = useSQLMindStore();

    const handleAnonimoUser = async () => {
        try {
            setIsLoading(true);
            const { user } = await signInAnonymously(auth);
            console.log("Response user anonimous: ", user);
            setIsLoading(false);
            setUser(user);
            navigate("/app");
        }
        catch (error) {
            setIsLoading(false);
            if (error instanceof FirebaseError) {
                console.log("SQLMIND => Error al autenticar el usuario anónimo");
                console.log(`SQLMIND => Error Code | ${error.code}`);
                console.log(`SQLMIND => Error Message | ${error.message}`);
            }
            throw error;
        }
    }

    return (
        <>
            <Stack
                spacing={10}
                direction={"column"}
                justifyContent={"center"}
                align={"center"}
                height={"100vh"}
            >
                <VStack
                    spacing={2}
                    justifyContent={"flex-end"}
                    textAlign={"center"}
                >
                    <LogoSQL />
                    <Heading as="h1" size={"2xl"}>
                        SQLMind
                    </Heading>
                    <Heading as="h3" size={"lg"}>
                        Tu Agente AI para SQL
                    </Heading>
                    <Text width={{ base: "90%", md: "100%" }}>
                        Convierte fácilmente lenguaje natural en consultas SQL precisas con un solo clic
                    </Text>
                </VStack>
                <Box
                    as="button"
                    bg={"transparent"}
                    borderWidth={4}
                    borderStyle={"solid"}
                    borderColor={"purple.700"}
                    px={{ base: 4, md: 8 }}
                    py={{ base: 1, md: 3 }}
                    borderRadius={"lg"}
                    onClick={handleAnonimoUser}
                    display={"flex"}
                    alignItems={"center"}
                    gap={2}
                    _hover={{
                        bg: "rgba(114, 92, 173, 0.7)",
                        transform: isLoading ? "none" : "translateY(-3px)",
                        transition: "all .7s"
                    }}
                >
                    <Box>
                        {
                            isLoading ?
                                <Spinner color="white" size={"md"} />
                                :
                                <TbHandClick color="rgba(26, 32, 44, 1)" size={35} />
                        }
                    </Box>
                    <Box>
                        <Text textAlign={"left"}>Comenzar</Text>
                        <Text color={"gray.500"}>Ir a la aplicación</Text>
                    </Box>
                </Box>
            </Stack>
        </>
    );
}

export default HomePage;