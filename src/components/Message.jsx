import React from "react";
import { auth } from "../firebase";

const style = {
  message: `relative flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  name: ` absolute mt-[-4rem] w-[150px] text-gray-600 text-xs`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
};

function Message({ message }) {
  const messageClass =
    message.name === auth.currentUser.displayName
      ? `${style.sent}`
      : `${style.received}`;

  return (
    <div>
      <span className="text-[12px] font-light text-gray-400">
        {message.timestamp}
      </span>
      <div className={`${style.message} ${messageClass}`}>
        <p className={style.name}>
          {message.name === auth.currentUser.displayName ? "You" : message.name}
        </p>
        <p>{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
