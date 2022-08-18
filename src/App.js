import React from "react";
import Box from "./components/Box";

// style
const style = {
  appContainer: `max-w-[728px] mx-auto text-center container mx-auto`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
};

function App() {
  return (
    <div className={style.appContainer}>
      <div className={style.sectionContainer}>
        <Box />
      </div>
    </div>
  );
}

export default App;
