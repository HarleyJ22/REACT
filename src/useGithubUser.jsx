import { useEffect, useState } from "react";

const useGithubUser = (username) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          setError("Failed");
        }
      } catch (error) {
        setError("Error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return { user, loading, error };
};

export default useGithubUser;
