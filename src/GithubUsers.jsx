import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const GithubUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await fetch("https://api.github.com/users");
        if (response.ok) {
          const usersList = await response.json();
          setUsers(usersList);
        } else {
          console.log("Error");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchList();
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.login}>
            <Link to={`/users/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
