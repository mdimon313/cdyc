import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";
const style = {
  button: `px-8 py-2 text-lg font-medium bg-green-400 text-white rounded-md transition-all hover:bg-green-500`,
};

function Home() {
  function signIn() {
    // const googleProvider = new GoogleAuthProvider();
    // signInWithRedirect(auth, googleProvider);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        console.log(token);
        const user = result.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        // The email of the user's account used.
        console.log(errorMessage);
        const email = error.customData.email;
        // The AuthCredential type that was used.
        console.log(email);
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(credential);
      });
  }

  return (
    <div className="h-[90vh] w-full grid place-items-center">
      <div>
        <button type="button" onClick={signIn} className={style.button}>
          sign with google
        </button>
      </div>
    </div>
  );
}

export default Home;
