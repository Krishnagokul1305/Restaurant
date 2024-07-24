import { Outlet, useLocation, useNavigation } from "react-router-dom";
import NavBar from "./NavBar";
import Loader from "./Loader";

function Applayout() {
  const { state } = useNavigation();
  let isLoading = state === "loading";
  const { pathname } = useLocation();

  return (
    <div className="bg-black">
      {pathname !== "/home" && <NavBar />}
      {isLoading && <Loader />}
      <div className={`${pathname === "/home" ? "" : "pt-20"}`}>
        <Outlet />
      </div>
    </div>
  );
}

export default Applayout;
