import { useNavigate, useRouteError } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const errorOccured = useRouteError();
  console.log(errorOccured);
  return (
    <div style={{ backgroundColor: "red" }}>
      <h1>{errorOccured.data || errorOccured.message} 😢</h1>

      {/* <p>%MESSAGE%</p> */}
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default NotFound;
