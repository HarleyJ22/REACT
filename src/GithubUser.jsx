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
// import { useEffect, useState } from "react";

// export function GithubUser({ username }) {
//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);

//     const fetchData = async() => {
//         try {
//             const response = await fetch(`https://api.github.com/users/`);
//             if (response.ok) {
//                 const data = await response.json();
//                 setData(data);
//             } else {
//                 setError("error")
//             }
//         } catch(error) {
//             error(error);
//         }
//     }
//     useEffect(() => {
//         fetchData(username);
//     }, [username]);

//     return (
//         <div>
//             {data &&<h1>{data.login}</h1>}
//             {data &&<h1>{data.username}</h1>}
//             {data &&<h2>{data.avatar_url}</h2>}
//         </div>
//     )
// }