import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error");
  }
  return response.json();
};

const useGithubUser = (username) => {
  if(!username) {
    return {
      user: null,
      loading: false,
      error: "Request failed",
    }
  }
  const { data: user, error } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  return {
    user,
    loading: !user && !error,
    error: error || (user ? null : "User not found"),
  };
};

export default useGithubUser;
