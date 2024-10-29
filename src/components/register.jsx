import { useState } from "react"

function register() {
    async function submitHandler(event) {
        event.preventDefault();
        await register(email,username,password)
    }
    const [email,setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    return (
        <form onSubmit={submitHandler}>
            <input onChange={(event) => setEmail(event.target.value)}>Email</input>
            <input onChange={(event) => setUsername(event.target.value)}>Username</input>
            <input onChange={(event) => setPassword(event.target.value)}>Password</input>
        </form>
    )
    
}

export default Register;