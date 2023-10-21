import { useRef, useState } from "react"
import { GithubUser } from "./GithubUser";

export const GithubUsers = () => {
    const [users, setUsers] = useState("");
    const [usersList, setUsersList] = useState([]);
    const inputRef = useRef();

    const handleSearch = () => {
        setUsersList((prevUserList) => [...prevUserList, users]);
        inputRef.current.value = "";
    }

    return (
     <>
        <form>
            <input type="text" ref={inputRef} value={users} onChange={(event) =>setUsers(event.target.value)} />
            <button onClick={handleSearch}>Search User</button>
        </form>
       <ul>
        {usersList.map((users, index) => (
            <li key={index}>
                <GithubUser username={users}/>            
            </li>
        ))}
       </ul>
    </>
    )
}
