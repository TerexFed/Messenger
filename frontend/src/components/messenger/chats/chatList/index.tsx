import { useState } from "react";
import style from "./chatlist.module.css";
import ChatItem from "../chatItem";
import chatItem from "../chatItem/chatItem.types";

function ChatList({ changeUser }) {
  const [mas] = useState<Array<chatItem>>([
    {
      id: 1,
      title: "Alex",
      lastMessage: "Lets go grab a bear",
      lastMessageSent: "13:30",
    },
    {
      id: 2,
      title: "John",
      lastMessage: "Sure, I'm in!",
      lastMessageSent: "14:15",
    },
    {
      id: 3,
      title: "Sarah",
      lastMessage: "Sounds good to me!",
      lastMessageSent: "12:45",
    },
    {
      id: 4,
      title: "Emily",
      lastMessage: "I'm busy right now, maybe later?",
      lastMessageSent: "10:20",
    },
    {
      id: 5,
      title: "Michael",
      lastMessage: "Sorry, I can't make it today.",
      lastMessageSent: "09:00",
    },
    {
      id: 6,
      title: "David",
      lastMessage: "Count me in!",
      lastMessageSent: "14:00",
    },
    {
      id: 7,
      title: "Jessica",
      lastMessage: "I'm not feeling well today.",
      lastMessageSent: "11:30",
    },
    {
      id: 8,
      title: "Daniel",
      lastMessage: "Sounds like a plan!",
      lastMessageSent: "13:00",
    },
    {
      id: 9,
      title: "Emma",
      lastMessage: "I'll join you guys later.",
      lastMessageSent: "15:45",
    },
    {
      id: 10,
      title: "Ryan",
      lastMessage: "Count me out this time.",
      lastMessageSent: "16:20",
    },
    {
      id: 11,
      title: "Sophia",
      lastMessage: "I'm up for it!",
      lastMessageSent: "12:15",
    },
    {
      id: 12,
      title: "Oliver",
      lastMessage: "Maybe next time, I have some work to finish.",
      lastMessageSent: "17:00",
    },
    {
      id: 13,
      title: "Isabella",
      lastMessage: "I'm down, let's do it!",
      lastMessageSent: "14:30",
    },
    {
      id: 1123,
      title: "Alex",
      lastMessage: "Lets go grab a bear",
      lastMessageSent: "13:30",
    },
    {
      id: 132,
      title: "John",
      lastMessage: "Sure, I'm in!",
      lastMessageSent: "14:15",
    },
    {
      id: 33,
      title: "Sarah",
      lastMessage: "Sounds good to me!",
      lastMessageSent: "12:45",
    },
    {
      id: 41,
      title: "Emily",
      lastMessage: "I'm busy right now, maybe later?",
      lastMessageSent: "10:20",
    },
    {
      id: 25,
      title: "Michael",
      lastMessage: "Sorry, I can't make it today.",
      lastMessageSent: "09:00",
    },
    {
      id: 63,
      title: "David",
      lastMessage: "Count me in!",
      lastMessageSent: "14:00",
    },
    {
      id: 733,
      title: "Jessica",
      lastMessage: "I'm not feeling well today.",
      lastMessageSent: "11:30",
    },
    {
      id: 865,
      title: "Daniel",
      lastMessage: "Sounds like a plan!",
      lastMessageSent: "13:00",
    },
    {
      id: 9123,
      title: "Emma",
      lastMessage: "I'll join you guys later.",
      lastMessageSent: "15:45",
    },
    {
      id: 130,
      title: "Ryan",
      lastMessage: "Count me out this time.",
      lastMessageSent: "16:20",
    },
    {
      id: 11231,
      title: "Sophia",
      lastMessage: "I'm up for it!",
      lastMessageSent: "12:15",
    },
    {
      id: 112,
      title: "Oliver",
      lastMessage: "Maybe next time, I have some work to finish.",
      lastMessageSent: "17:00",
    },
    {
      id: 153,
      title: "Isabella",
      lastMessage: "I'm down, let's do it!",
      lastMessageSent: "14:30",
    },
  ]);

  return (
    <div className={style.chatlist}>
      {mas.map((el) => (
        <ChatItem
          key={el.id}
          id={el.id}
          title={el.title}
          lastMessage={el.lastMessage}
          lastMessageSent={el.lastMessageSent}
          changeUser={changeUser}
        />
      ))}
    </div>
  );
}

export default ChatList;
