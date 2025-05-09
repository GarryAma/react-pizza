import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const user = useSelector((state) => state.user);

  return (
    <div className="my-10 text-center sm:my-16 ">
      <h1 className="text-xl font-semibold mb-8 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-green-800">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {user.username ? (
        <>
          <p className="mb-4">You are logged in</p>
          <Button type="primary" to="/menu">
            Continue
          </Button>
        </>
      ) : (
        <CreateUser />
      )}
      {/* <CreateUser /> */}
    </div>
  );
}

export default Home;
