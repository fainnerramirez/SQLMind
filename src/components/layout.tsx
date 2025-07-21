import { Box } from "@chakra-ui/react"
import styles from "../global.module.css"
import HeaderPage from "./header-page"

type Props = {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <Box className={styles.container}>
            <Box className={styles.backgroundGrid}>
            <HeaderPage />
                {children}
            </Box>
        </Box>
    )
}

export default Layout;