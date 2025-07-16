import { Box, Button, Heading, Stack, VStack } from "@chakra-ui/react";
import { FirebaseError } from "firebase/app";
import { signInAnonymously } from "firebase/auth";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
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
                >
                    <LogoSQL />
                    <Heading>
                        SQLMind
                    </Heading>
                </VStack>
                <Box>
                    <Button isLoading={isLoading} colorScheme="teal" rightIcon={<IoIosArrowForward />} onClick={handleAnonimoUser}>
                        Ingresar
                    </Button>
                </Box>
            </Stack>
        </>
    );
}

export default HomePage;