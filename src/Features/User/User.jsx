import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "./userSlice";

function User() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  function handleForm(e) {
    e.preventDefault();
    dispatch(setUser(name));
    navigate("/menu");
  }
  return (
    <form action="" className="space-y-4 md:space-y-0 relative">
      <input
        type="text"
        className="px-10 py-3 rounded-full md:w-full outline-none block m-auto transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-golden"
        placeholder="Enter your name here"
        onChange={(e) => setName(e.target.value)}
      />
      {name.length > 0 && (
        <button
          className="bg-golden px-10 py-3 font-bold font-base rounded-full m-auto block md:absolute right-0 top-0"
          onClick={(e) => handleForm(e)}
        >
          Enter
        </button>
      )}
    </form>
  );
}

export default User;
