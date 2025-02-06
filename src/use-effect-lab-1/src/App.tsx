import {Profile} from "./Profile.tsx";
import {useState} from "react";

let usernameCounter = 0;

const App = () => {
  const [username, setUsername] = useState("john_doe");
  return (
    <div>
      <button onClick={()=> {
        usernameCounter++;
        setUsername(`john_doe_${usernameCounter}`)
      }}>ChangeProfile</button>
      <Profile key={username} username={username}>
        {(user) => (user === null ? <div>Loading</div> : <div>{user}</div>)}
      </Profile>
    </div>

  );
};

export default App
