import { Outlet } from "react-router-dom";

export default function UsersLayout() {
    return (
        <div>
            <h2>Our Users</h2>
            <Outlet />
        </div>
    );
}
