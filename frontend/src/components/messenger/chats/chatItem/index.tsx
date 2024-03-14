import chatItem from "./chatItem.types";
import style from "./chatItem.module.css";

function ChatItem({
  id,
  title,
  lastMessage,
  lastMessageSent,
  changeUser,
}: chatItem) {
  const handleClick = () => {
    // Call the changeUser function with the title of the clicked chat
    changeUser(title);
  };

  return (
    <div
      id={id.toString()}
      className={style.chatItem}
      onClick={handleClick}
    >
      <div className={style.chatInfo}>
        <p>{title}</p>
        <sup>{lastMessage}</sup>
      </div>
      <sup>{lastMessageSent}</sup>
    </div>
  );
}

export default ChatItem;
