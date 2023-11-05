import useSWR from "swr";

const useGithubUser = (username) => {
  if (!username) {
    return {
      user: null,
      loading: false,
      error: "Request failed",
    };
  }

  const {
    data: user,
    error,
    mutate,
  } = useSWR(`https://api.github.com/users/${username}`, fetcher);

  function handleRefresh() {
    mutate();
  }

  return {
    user,
    loading: !user && !error,
    error: error || (user ? null : "User not found"),
    onRefresh: handleRefresh,
  };
};

export default useGithubUser;
