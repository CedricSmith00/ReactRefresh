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
        <>
        <hr></hr>
        <h2>Login Form</h2>
        <form onSubmit={submitHandler}>
            <input onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
            <br />
            <input onChange={(event) => setUsername(event.target.value)} placeholder="Username" />
            <br />
            <input onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
            <br />
            <button type="submit">Login</button>
        </form>
        <hr></hr>
        </>
    )
}

export default Login;