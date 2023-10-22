import { useEffect, useState } from "react";

export function GithubUser({ username }) {
  const [user, setuser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (response.ok) {
          const userData = await response.json();
          setuser(userData);
        } else {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [username]);

  return (
    <div>
        {user &&<h1>{user.login}</h1>}
        {user &&<h1>{user.username}</h1>}
        {user &&<h2>{user.avatar_url}</h2>}
    </div>
  );
}
