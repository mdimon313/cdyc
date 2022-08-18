import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import LogOut from "./LogOut";
import SignIn from "./SignIn";

function Header() {
  const [user] = useAuthState(auth);

  return (
    <h1 className="border-b-2 bg-gray-800 text-white text-left text-xl p-3 flex items-center justify-between">
      {user ? user.displayName : "Signup"}
      {user ? <LogOut /> : <SignIn />}
    </h1>
  );
}

export default Header;
