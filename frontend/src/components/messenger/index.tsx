import { useState } from "react";
import MainChat from "./chats";
import MessageList from "./mainfield/messageList";
import style from "./messenger.module.css";

function Messenger() {
  const [user, setUser] = useState("");
  function changeUser(user: string) {
    setUser(user);
  }

  return (
    <div className={style.messenger}>
      <MainChat changeUser={changeUser} />
      <MessageList user={user} />
    </div>
  );
}

export default Messenger;
