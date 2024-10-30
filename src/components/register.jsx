import { useState } from "react"
import register from "../utils/register";

function Register() {
    async function submitHandler(event) {
        event.preventDefault();
        await register(email,username,password)
    }
    const [email,setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    return (
        <div className="forms-style">
        <h2>Register Form</h2> 
        <form onSubmit={submitHandler}>
        <input onChange={(event) => setEmail(event.target.value)} placeholder="Email"/>
        <br></br>
        <input onChange={(event) => setUsername(event.target.value)} placeholder="Username" />
        <br></br>
        <input onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
        <br></br>
        <button type="submit">Register</button>
    </form>
    </div>
    )
    
}

export default Register;