import { useState } from "react";
import { readCookie } from "../utils/readCookie";

export function ListUsers() {
    const [userList, setUserlist] = useState([]);
  async  function handleClick1(event) {
        let token = readCookie("jwt_token");
        console.log(token);

        let authorization = "Bearer " + token;

       const res = await fetch(
            "http://localhost:5002/listAllUsers",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": authorization
                }
            }
        );
        let responseStatus = res.status;
        if(responseStatus === 200) {
            setUserlist(await res.json())
        } else {
            console.log("userList not found");
            setUserlist([]);
        }
        
    }
    return(
        <div className="user-button-style user-list-style">
        <hr></hr>
        <h2 >Authorized Users</h2>
        <button  onClick={handleClick1}>Get Latest List of Users</button>
        <br></br>
        {
            userList.map((item, index)=> {
                return (
                    <div className="user-list-style">
                    <h3>User Email = {item.email}</h3>
                    <h3>Username = {item.username}</h3>
                    </div>
                )
            })
        }
        <hr></hr>
        </div>
    )
}