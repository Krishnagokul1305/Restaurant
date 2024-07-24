import { Link } from "react-router-dom";
import User from "../Features/User/User";
import { useSelector } from "react-redux";

function Home() {
  const companyName = "React Fast Pizza co.";

  const { user } = useSelector((store) => store.user);
  return (
    <div className="h-screen bg-black flex justify-center items-center home">
      <div className="h-100 md:space-y-10 p-5 space-y-7">
        <h1 className="font-bold font-base text-7xl text-golden md:text-8xl text-center">
          {companyName}
        </h1>
        {user ? (
          <Link
            className="bg-golden px-5 py-3 rounded-full font-bold text-lg block mx-auto w-fit"
            to="/menu"
          >
            Go to menu &rarr;
          </Link>
        ) : (
          <User />
        )}
      </div>
    </div>
  );
}

export default Home;
