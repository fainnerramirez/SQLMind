import { Navigate } from "react-router-dom";
import { useSQLMindStore } from "../../stores/sql-mind-store";

const RedirectAuth = () => {
    const { user } = useSQLMindStore();

    if (user) {
        return <Navigate to="/app" replace />;
    } else {
        return <Navigate to="/login" replace />;
    }
};

export default RedirectAuth;
