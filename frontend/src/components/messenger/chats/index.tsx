import Input from "../../../UI/Input/Input";
import ChatList from "./chatList";
import Burger from "../../../assets/burger.tsx";
import style from "./chats.module.css";

function MainChat({ changeUser }) {
  return (
    <div className={style.mainChat}>
      <div className={style.topChats}>
        <Burger />
        <sup>Chats</sup>
      </div>
      <Input type={"search"} placeHolder={"Search"} />
      <ChatList changeUser={changeUser} />
    </div>
  );
}

export default MainChat;
