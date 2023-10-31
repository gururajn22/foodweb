import { useRouteError } from "react-router-dom";
const Error = () => {
    const err=useRouteError();
    console.log(err);
  return (
    <div>
      <h2>Oops!!!</h2>
      <h3>Something went wrong</h3>
      <h4>{err.status}:{err.statusText}</h4>
      <img src="https://imgs.search.brave.com/3fg45DzXZNgb7jL1qWNtldWmS6haKnmg7YwLK6P2TiU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFXRzZHWFdTQ0wu/anBn" />
    </div>
  );
};
export default Error;
