import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

export default function RootLayout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    useEffect(() => {
        const fetchWeather = async () => {
            const options = {
                method: 'GET',
                url: 'https://weatherapi-com.p.rapidapi.com/current.json',
                params: { q: 'Tashkent' },
                headers: {
                    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
                    'x-rapidapi-key': '0df623fe42msh9f5b18531c6ba8bp1e607bjsn9ae4dfcf90d9' // <-- Add your RapidAPI key here
                }
            };

            try {
                const response = await axios.request(options);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchWeather(); // Call the async function
    }, []);

    return (
        <div>
            <p>Home</p>
            <button onClick={handleLogout}>Logout</button>
            <Outlet />
        </div>
    );
}
