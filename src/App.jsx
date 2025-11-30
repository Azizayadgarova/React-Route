<<<<<<< HEAD
import React from "react";
import useLocalStorage from "./hooks/useLocalStorage";


export default function UserComponent() {
  const [user, setUser] = useLocalStorage("user", "bor");
=======

import React from 'react';
import User from './User';
>>>>>>> 4719fc2fdca48120a3e1bee825b85ce4cdad520a

  return (
    <div>
<<<<<<< HEAD
      <h1>User: {user}</h1>
      <button onClick={() => setUser("Aziza")}>Set Aziza</button>
      <button onClick={() => setUser("Dilshod")}>Set Dilshod</button>
    </div>
  );
}
=======
   
    <User/>
    </div>
  );
};

export default App;
>>>>>>> 4719fc2fdca48120a3e1bee825b85ce4cdad520a
