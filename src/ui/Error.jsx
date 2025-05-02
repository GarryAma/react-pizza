import { useNavigate, useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function NotFound() {
  // const navigate = useNavigate();
  const errorOccured = useRouteError();
  console.log(errorOccured);
  return (
    <div>
      <h1>{errorOccured.data || errorOccured.message} 😢</h1>

      <LinkButton to="-1">&larr; Go back</LinkButton>
      {/* <button onClick={() => navigate(-1)}>&larr; Go back</button> */}
    </div>
  );
}

export default NotFound;
