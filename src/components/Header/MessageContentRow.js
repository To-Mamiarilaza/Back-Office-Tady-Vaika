import { useRef } from "react";
import FormatUtil from "../../services/FormatUtil";

export default function MessageContentRow({
  myImage,
  otherImage,
  content,
  sendingTime,
  sender,
}) {

  const sendingTimeRef = useRef();

  const switchSendingTimeState = () => {
    if (sendingTimeRef.current.classList.contains("show")) {
      sendingTimeRef.current.classList.remove("show");
    } else {
      sendingTimeRef.current.classList.add("show");
    }
  };

  var messageClass = "inner";
  if (sender == sessionStorage.getItem("idUser")) {
    messageClass = "outer";
  }

  var image = otherImage;
  if (sender == sessionStorage.getItem("idUser")) {
    image = myImage;
  }

  return (
    <>
      <div
        className={"message " + messageClass}
        onClick={() => switchSendingTimeState()}
      >
        <div className="user-icon">
          <img src={image} alt="" />
        </div>
        <div className="message-content">
          {content}
          <div className="sending-time" ref={sendingTimeRef}>
            {FormatUtil.formatDateDifference(sendingTime)}
          </div>
        </div>
      </div>
    </>
  );
}
