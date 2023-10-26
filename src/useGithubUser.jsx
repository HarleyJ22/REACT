import { useEffect, useState } from "react";

const useGithubUser = (username) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          console.log("Failed");
        }
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchData();
  }, [username]);

  return { user };
};

export default useGithubUser;
