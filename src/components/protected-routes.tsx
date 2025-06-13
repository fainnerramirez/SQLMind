import { useSQLMindStore } from "../../stores/sql-mind-store"
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutesApp = () => {
    const { user } = useSQLMindStore();
    if (!user) {
        return <Navigate to={"/login"} replace/>
    }
    return <Outlet />
}

export default ProtectedRoutesApp;