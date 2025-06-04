import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <div>
            <nav>
                <NavLink to="/">Home</NavLink> |{" "}
                <NavLink to="/users">Users</NavLink> |{" "}
                <NavLink to="/products">Products</NavLink>
            </nav>
            <hr />
            <Outlet />
        </div>
    );
}
