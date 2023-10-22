import { useEffect, useState } from "react"
import { GithubUser } from "./GithubUser";

const GithubUsers = () => {
    const [users, setUsers] = useState("");
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        const fetchUser = async() => {
        try {
            const response = await fetch(`https://api.github.com/users/`);
            if (response.ok) {
                const user = await response.json();
                setUsers(user);
            } else {
                console.log(error)
            }
        } catch(error) {
            console.log(error);
        }
    } 
        fetchUser();
    }, [])

    return (
     <>
     <div>
       <ul>
        {users.map((user) => (
            <li key={user.login}
                onClick={() => setUsersList(user.login)}
                style={{cursor: "pointer"}}
                >
                {user.login}       
            </li>
        ))}
       </ul>
       </div>
       <div>
        {usersList && <GithubUser username={usersList}/>}
       </div>
    </>
    )
}

export default GithubUsers