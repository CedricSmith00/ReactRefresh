import { useEffect, useState } from "react";
import { login } from "../utils/login";

    function Login({onLogin}) {
    const [email,setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    async function submitHandler(event) {
        event.preventDefault();
       const success = await login(email,username,password);
        if (success) {
            onLogin();
        }
    }

    return (
        <div className="forms-style">
        <hr></hr>
        <h2>Login Form</h2>
        <form onSubmit={submitHandler}>
            <input className="inputbox-style" onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
            <br />
            <input className="inputbox-style" onChange={(event) => setUsername(event.target.value)} placeholder="Username" />
            <br />
            <input className="inputbox-style" onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
            <br />
            <button type="submit">Login</button>
        </form>
        <hr></hr>
        </div>
    )
}

export default Login;