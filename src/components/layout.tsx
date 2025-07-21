import { Box } from "@chakra-ui/react"
import styles from "../global.module.css"

type Props = {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <Box className={styles.container}>
            <Box className={styles.backgroundGrid}>
                {children}
            </Box>
        </Box>
    )
}

export default Layout;