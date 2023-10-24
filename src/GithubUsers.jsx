import React, { useState, useEffect } from "react";
import GithubUser from "./GitHubUser";

const GithubUsers = () => {
  const [users, setUsers] = useState([]);
  const [userList, setuserList] = useState(null);

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await fetch("https://api.github.com/users");
        if (response.ok) {
          const userList = await response.json();
          setUsers(userList);
        } else {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserList();
  }, []);

  return (
    <>
      <div>
        <ul>
          {users.map((user) => (
            <li
              key={user.login}
              onClick={() => setuserList(user.login)}
              style={{ cursor: "pointer" }}
            >
              {user.login}
            </li>
          ))}
        </ul>
      </div>
      <div >
        {userList && <GithubUser username={userList} />}
      </div>
    </>
  );
};

export default GithubUsers;
