import useGithubUser from "./useGithubUser";

const GithubUser = ({ username }) => {
  const {user, loading, error} = useGithubUser(username);
  
  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>{error}</h2>
  }

  if (!user) {
    return <div>User not Found!</div>;
  }

  return (
    <div>
      <img src={user.avatar_url} alt={user.login} />
      <h2>Name: {user.name}</h2>
      <p>Login: {user.login}</p>
    </div>
  );
};

export default GithubUser;
