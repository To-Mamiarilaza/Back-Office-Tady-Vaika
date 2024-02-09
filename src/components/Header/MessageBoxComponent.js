import { useEffect, useRef, useState } from "react";
import face from "../../assets/images/message_icon.jpg";
import MessageContentRow from "./MessageContentRow";
import UserProfileService from "../../services/UserProfileService";
import { useNavigate } from "react-router-dom";
import MessagesService from "../../services/MessagesService";

export default function MessageBoxComponent({ idOtherUser, closeMessageBox }) {
  const messageContainer = useRef();
  const messageBoxRef = useRef();

  const [otherUserInfo, setOtherUserInfo] = useState(null);
  const [conversation, setConversation] = useState(null);

  const [messageContent, setMessageContent] = useState("");
  const [seed, setSeed] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (idOtherUser == 0) {
      messageBoxRef.current.classList.remove("hide");
    } else {
      messageBoxRef.current.classList.add("show");
    }

    if (idOtherUser != 0) {
      UserProfileService.getUserInformation(idOtherUser).then((response) => {
        setOtherUserInfo(response.data.data);
      });

      MessagesService.getConversation(idOtherUser).then((response) => {
        setConversation(response.data.data.sms);
      });
    }
  }, [idOtherUser]);

  const messagesRow = [];

  if (conversation != null && conversation.length != 0) {
    conversation.forEach((message) => {
      messagesRow.push(
        <MessageContentRow
          myImage={sessionStorage.getItem("image")}
          otherImage={otherUserInfo.image}
          sendingTime={message.date_time}
          content={message.content}
          sender={message.sender_id}
        />
      );
    });
  }

  const sendMessage = () => {
    MessagesService.sendMessage(idOtherUser, messageContent).then(
      (response) => {
        if (response.data.message == "success") {
          setMessageContent("");

          // Refetch all message
          MessagesService.getConversation(idOtherUser).then((response) => {
            setConversation(response.data.data.sms);
          });

          // Send notification to the user
          MessagesService.sendNotification(idOtherUser, messageContent);
        }
      }
    );
  };

  const onChangeHandler = (e) => {
    setMessageContent(e.target.value);
  };

  return (
    <>
      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
        <div
          className={"toast hide"}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          ref={messageBoxRef}
        >
          <div className="toast-header">
            <img src={face} className="me-4" alt="..." />
            <strong className="me-auto">Message box</strong>
            <button
              type="button"
              className="btn-close me-1"
              data-bs-dismiss="toast"
              aria-label="Close"
              onClick={() => closeMessageBox()}
            ></button>
          </div>
          <div className="toast-body">
            <div className="message-overflow" ref={messageContainer}>
              {otherUserInfo == null ? (
                <>
                  <div className="text-center mt-3">
                    <div class="spinner-border text-danger" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="chat-head">
                    <img src={otherUserInfo.image} alt="" />
                    <div className="username">
                      {otherUserInfo.prenom + " " + otherUserInfo.nom}
                    </div>
                    <div className="email">{otherUserInfo.email}</div>
                    <div className="telephone">{otherUserInfo.telephone}</div>
                    <button
                      onClick={() =>
                        navigate("/user/" + otherUserInfo.id + "/profile")
                      }
                    >
                      VOIR PROFILE
                    </button>
                  </div>
                  <div className="message-content px-3 mt-5">{messagesRow}</div>
                </>
              )}
              ;
            </div>

            <div className="send-message d-flex px-3 mt-3">
              <input
                type="text"
                className="message-input"
                placeholder="Votre message ici"
                value={messageContent}
                onChange={(e) => onChangeHandler(e)}
              />
              <button onClick={() => sendMessage()}>
                <i className="far fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
