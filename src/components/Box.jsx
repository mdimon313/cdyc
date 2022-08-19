import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { db } from "../firebase";
import Header from "./Header";
import Message from "./Message";
import SendMessage from "./SendMessage";

function Box() {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  const style = {
    main: `flex flex-col p-[10px] max-h-[73vh] overflow-hidden overflow-y-scroll`,
  };

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data() });
      });
      // console.log(messages);
      setMessages(messages);
    });
    return unsubscribe;
  }, []);

  return (
    <div>
      <Header />
      <>
        <main className={style.main}>
          {messages &&
            messages.map((message) => (
              <Message key={Math.random() * 333} message={message} />
            ))}
        </main>
        {/* Send Message Compoenent */}
        <SendMessage scroll={scroll} />
        <span ref={scroll}></span>
      </>
    </div>
  );
}

export default Box;
