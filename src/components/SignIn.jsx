import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";

function SignIn() {
  // signup
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const style = {
    button: `px-8 py-2 text-lg font-medium bg-green-400 text-white rounded-md transition-all hover:bg-green-500`,
  };
  return (
    <div>
      <button type="button" onClick={googleSignIn} className={style.button}>
        signup with google
      </button>
    </div>
  );
}

export default SignIn;
