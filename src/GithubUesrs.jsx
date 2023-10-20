import { useRef, useState } from "react"
import { GithubUser } from "./GithubUser";

export const GithubUsers = () => {
    const [user, setUser] = useState("");
    const [userList, setUserList] = useState([]);
    const inputRef = useRef();

    const handleSearch = () => {
        setUserList((prevUserList) => [...prevUserList, user]);
        inputRef.current.value = "";
    }

    return (
     <>
        <form>
            <input type="text" ref={inputRef} value={user} onChange={(event) =>setUser(event.target.value)} />
            <button onClick={handleSearch}>Search User</button>
        </form>
       <ul>
        {userList.map((user, index) => (
            <li key={index}>
                <GithubUser username={user}/>            
            </li>
        ))}
       </ul>
    </>
    )
}
