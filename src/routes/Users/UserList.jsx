import { Link } from "react-router-dom";

export default function ProductList() {
const users = [
  { id: 1, role: "Oquvchi", path: '/users/oquvchi' },
  { id: 2, role: "Oqituvchi", path: '/users/oqituvchi' },
];


    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    <Link to={`${user.path}`}>{user.role}</Link>
                </li>
            ))}
        </ul>
    );
}
