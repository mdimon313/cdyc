import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../firebase";

function SendMessage({ scroll }) {
  const [input, setInput] = useState("");

  const today = new Date();
  const dateTime = today.toLocaleString();

  async function sendMessage(e) {
    e.preventDefault();
    const { displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      timestamp: dateTime,
    });
    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }

  const style = {
    form: `h-14 w-full max-w-[728px]  flex text-xl absolute bottom-0`,
    input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
    button: `w-[20%] bg-green-500`,
  };

  return (
    <form onSubmit={sendMessage} className={style.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type="text"
        placeholder="Message"
      />
      <button
        className={style.button}
        type="submit"
        disabled={input === "" ? true : false}
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;
