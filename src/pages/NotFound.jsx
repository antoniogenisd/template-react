import { useRouteError, Link } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>ERROR 404</h1>
      <p>Page not found</p>
      <p>{error.statusText || error.messaje}</p>
      <Link to="/">Volver a Home</Link>
    </div>
  );
};
export default NotFound;
