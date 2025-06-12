// src/components/AuthInitializer.tsx
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useSQLMindStore } from "../../stores/sql-mind-store";
import { Box, Spinner } from "@chakra-ui/react";

const AuthInitializer = ({ children }: { children: React.ReactNode }) => {
    const { setUser } = useSQLMindStore();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const auth = getAuth();

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [setUser]);

    if (loading) return (<Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={"100vh"} width={"100vw"}>
        <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='cyan.500'
            size='xl'
        />
    </Box>);

    return <>{children}</>;
};

export default AuthInitializer;