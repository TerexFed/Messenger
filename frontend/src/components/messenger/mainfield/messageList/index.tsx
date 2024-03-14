import MainFieldHeader from "../mainFieldHeader";
import style from "./messageList.module.css";

function MessageList({ user }) {
  return (
    <div className={`${style.messageList} ${user === "" && style.jcc}`}>
      {user === "" ? (
        <div className={style.notSelected}>Select to start messaging</div>
      ) : (
        <MainFieldHeader user={user} />
      )}
    </div>
  );
}

export default MessageList;
