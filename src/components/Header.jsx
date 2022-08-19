import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import LogOut from "./LogOut";

function Header() {
  const [user] = useAuthState(auth);

  return (
    <div className="border-b-2 bg-gray-800 text-white text-left text-xl p-3 flex items-center justify-between">
      <div className="flex items-center">
        <img
          src={user?.photoURL}
          alt=""
          className="w-[50px] h-[50px] rounded-full"
        />
        <h1 className="ml-2">{user ? user.displayName : "Signup"}</h1>
      </div>
      {/* {user ? <LogOut /> : <SignIn />} */}
      <span>{<LogOut />}</span>
    </div>
  );
}

export default Header;
