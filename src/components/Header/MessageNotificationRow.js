import FormatUtil from "../../services/FormatUtil";
import MessagesService from "../../services/MessagesService";

export default function MessageNotificationRow({
  idOtherUser,
  image,
  username,
  time,
  content,
  notSeen,
  sender,
  setOtherIdUser,
  updateChatNotification,
}) {
  var stateClass = "";
  if (notSeen == "true") {
    stateClass = "not-seen";
  }

  var senderNote = "";
  if (sender == "me") {
    senderNote = "Vous: ";
  }

  const markAsRead = () => {
    setOtherIdUser(idOtherUser);

    MessagesService.marqueAsView(idOtherUser).then((response) => {
      console.log(response);
    });
    updateChatNotification();
  };

  return (
    <>
      <li>
        <a className="notif-item" type="button" onClick={() => markAsRead()}>
          <div className="img-section">
            <img src={image} alt="" />
          </div>
          <div className="text-section">
            <div className="first-row">
              <div className="user">{username}</div>
              <div className="time">
                {FormatUtil.formatDateDifference(time)}
              </div>
            </div>
            <div className="last-message">
              <span className={stateClass}>{senderNote + content}</span>
            </div>
          </div>
        </a>
      </li>
    </>
  );
}
