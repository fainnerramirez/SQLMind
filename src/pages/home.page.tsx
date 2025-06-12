import { Box, Button, Heading, Stack, VStack } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import LogoSQL from "../assets/logo";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/config";
import { useSQLMindStore } from "../../stores/sql-mind-store";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const { setUser } = useSQLMindStore();

    const handleGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then((result) => {
            setUser(result.user);
            navigate("/app");
        })
            .catch((error) => {
                console.error("Error al autenticar con Google | Error: ", error);
                throw error;
            })
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
                    <Button rightIcon={<FcGoogle />} onClick={handleGoogle}>
                        Ingresa con Google
                    </Button>

                </Box>
            </Stack>
        </>
    );
}

export default HomePage;