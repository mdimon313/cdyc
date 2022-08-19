import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Box from "./components/Box";
import Home from "./components/Home";
import { auth } from "./firebase";

// style
const style = {
  appContainer: `max-w-[728px] mx-auto text-center container mx-auto`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
};

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className={style.appContainer}>
      <div className={style.sectionContainer}>{user ? <Box /> : <Home />}</div>
    </div>
  );
}

export default App;
