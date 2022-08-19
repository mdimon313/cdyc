import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";
const style = {
  button: `px-8 py-2 text-lg font-medium bg-green-400 text-white rounded-md transition-all hover:bg-green-500`,
};

function Home() {
  /// signup
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <div className="h-[90vh] w-full grid place-items-center">
      <div>
        <button type="button" onClick={googleSignIn} className={style.button}>
          sign with google
        </button>
      </div>
    </div>
  );
}

export default Home;
