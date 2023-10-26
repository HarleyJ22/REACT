import useGithubUser from "./useGithubUser";

const GithubUser = ({ username }) => {
  const user = useGithubUser(username);

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
