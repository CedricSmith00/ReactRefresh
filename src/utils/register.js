async function register(email, username, password) {
    try {
        const res = await fetch(
            "http://localhost:5002/addUser",
            {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(
                    {
                        email: email,
                        username: username,
                        password: password
                    }
                )
            }
        )
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

export default register;