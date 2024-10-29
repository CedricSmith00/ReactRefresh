async function register(email, username, password) {
    try {
       const res = await fetch(
        "http://localhost5002/addUser",
        {
            method: "POST",
            headers:{"Content-Type":"application/json"},
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
        res.status(500).json(error);
    }
}

export default register;