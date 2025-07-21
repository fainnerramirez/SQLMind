import { Box, Button } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { IoMdLogOut } from "react-icons/io";
import { useSQLMindStore } from "../../stores/sql-mind-store";
import { auth } from "../firebase/config";

const HeaderPage = () => {
    
    const { setUser } = useSQLMindStore();
    const handleLogout = async () => {
        await signOut(auth);
        setUser(null);
    }

    return (
        <Box as="nav" display={"flex"} justifyContent={"end"}>
            <Box p={5} mb={{base: 5, md: 10, lg: 0}}>
                <Button colorScheme="cyan" rightIcon={<IoMdLogOut />} onClick={handleLogout}>Salir</Button>
            </Box>
        </Box>
    );
}

export default HeaderPage;