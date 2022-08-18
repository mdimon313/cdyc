import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
// import { auth } from "../firebase";

function LogOut() {
  const logOut = () => {
    console.log("click");
    const auth = getAuth();
    return signOut(auth);
  };
  return (
    <div>
      <button type="button" onClick={logOut}>
        <AiOutlineLogout />
      </button>
    </div>
  );
}

export default LogOut;
