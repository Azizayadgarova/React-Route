import React from "react";
import useLocalStorage from "./hooks/useLocalStorage";


export default function UserComponent() {
  const [user, setUser] = useLocalStorage("user", "bor");

  return (
    <div>
      <h1>User: {user}</h1>
      <button onClick={() => setUser("Aziza")}>Set Aziza</button>
      <button onClick={() => setUser("Dilshod")}>Set Dilshod</button>
    </div>
  );
}