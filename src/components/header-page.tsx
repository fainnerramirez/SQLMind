import { Box, Button } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { IoMdLogOut } from "react-icons/io";
import { useSQLMindStore } from "../../stores/sql-mind-store";
import { auth } from "../firebase/config";

const HeaderPage = () => {

    const { setUser } = useSQLMindStore();
    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        }
        catch (error) {
            console.error("SIGNOUT => Ocurrió un error al desloguear al usuario");
            throw error;
        }
    }

    return (
        <Box as="nav" display={"flex"} justifyContent={"end"}>
            <Box p={{ base: 3, md: 5 }} mb={{ base: 5, md: 10, lg: 0 }}>
                <Button
                    rightIcon={<IoMdLogOut />}
                    onClick={handleLogout}
                    bg={"transparent"}
                    borderRadius={"lg"}
                    borderWidth={2}
                    borderColor={"#1A202C"}
                    color={"#1A202C"}
                    _hover={{
                        bg: "rgba(114, 92, 173, 0.7)",
                        transform: "translateY(-2px)",
                        transition: "all .5s"
                    }}
                    display={{ base: "none", md: "block" }}
                >
                    Salir
                </Button>
                <Button
                    onClick={handleLogout}
                    bg={"transparent"}
                    borderRadius={"lg"}
                    borderWidth={2}
                    borderColor={"#1A202C"}
                    color={"#1A202C"}
                    _hover={{
                        bg: "rgba(114, 92, 173, 0.7)",
                        transform: "translateY(-2px)",
                        transition: "all .5s"
                    }}
                    display={{ base: "block", md: "none" }}
                >
                    <IoMdLogOut />
                </Button>
            </Box>
        </Box>
    );
}

export default HeaderPage;