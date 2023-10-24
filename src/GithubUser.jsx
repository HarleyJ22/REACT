import React, { useState, useEffect } from "react";

function GithubUser({ username }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, [username]);

  if (!user) {
    return <div>User not Found!</div>;
  }

  return (
    <div>
      <img src={user.avatar_url} alt={user.login} />
      <h2>Name: {user.name}</h2>
      <h2>Login: {user.login}</h2>
    </div>
  );
}

export default GithubUser;