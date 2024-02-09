import { useEffect, useState } from "react";
import face from "../../assets/images/face1.jpg";
import MessageNotificationRow from "./MessageNotificationRow";
import MessagesService from "../../services/MessagesService";

export default function MessageNotification({ setOtherIdUser }) {
  const [chatList, setChatList] = useState([]);
  const [currentList, setCurrentList] = useState([]);

  useEffect(() => {
    MessagesService.getNotSeenMessages().then((response) => {
      setChatList(response.data.data["not-seen-message"]);
      setCurrentList(response.data.data["not-seen-message"]);
    });
  }, []);

  const updateChatNotification = () => {
    MessagesService.getNotSeenMessages().then((response) => {
      setChatList(response.data.data["not-seen-message"]);
      setCurrentList(response.data.data["not-seen-message"]);
    });
  };

  const rows = [];
  if (currentList != null) {
    currentList.forEach((chat) => {
      rows.push(
        <MessageNotificationRow
          idOtherUser={chat.other_user_id}
          image={chat.other_user_image}
          username={chat.other_user_prenom}
          time={chat.date_time}
          content={chat.content}
          notSeen={"false"}
          sender={"other"}
          setOtherIdUser={setOtherIdUser}
          updateChatNotification={updateChatNotification}
        />
      );
    });
  }

  // Filter chat
  const filterChatHandler = (targetUsername) => {
    if (targetUsername == "") {
      setCurrentList(chatList);
      return;
    }

    setCurrentList(
      chatList.filter((chat) =>
        chat.other_user_prenom
          .toLowerCase()
          .includes(targetUsername.toLowerCase())
      )
    );
  };

  return (
    <>
      <div class="widgets-section dropdown">
        <button
          type="button"
          class="notif notif-button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fab fa-facebook-messenger"></i>
          {chatList != null && chatList.length != 0 && (
            <span class="notif-nb">{chatList.length}</span>
          )}
        </button>
        <ul
          class="dropdown-menu dropdown-width py-3"
          aria-labelledby="dropdownMenuButton1"
        >
          <div class="chat-header">
            <h4>Chats</h4>
            <div class="mb-3 input-group">
              <i class="fas fa-search"></i>
              <input
                type="text"
                placeholder="Rechercher utilisateur"
                onChange={(e) => filterChatHandler(e.target.value)}
              />
            </div>
            <hr />
          </div>
          <div class="chat-list">{rows}</div>
        </ul>
      </div>
    </>
  );
}
