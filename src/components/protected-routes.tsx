import { useSQLMindStore } from "../../stores/sql-mind-store"
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutesApp = () => {
    const { user } = useSQLMindStore();
    console.log("User: ", user);
    if (!user) {
        return <Navigate to={"/login"} replace/>
    }
    return <Outlet />
}

export default ProtectedRoutesApp;