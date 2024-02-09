import axios from "axios";
import BASE_URL from "./BaseUrlService";

const MESSAGE_API_BASE_URL = BASE_URL + "messages";
const NOTIFICATION_API_BASE_URL =
  BASE_URL + "notification/send_by_current_user";

// function for login

const sendMessage = (idOtherUser, content) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const body = {
    id_other_user: idOtherUser,
    message: content,
  };

  console.log(body);

  return axios.post(MESSAGE_API_BASE_URL, body, config);
};

const sendNotification = (idUser, body) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const content = {
    recipientToken: idUser,
    body: body,
    data: {},
  };

  return axios.post(NOTIFICATION_API_BASE_URL, content, config);
};

const getConversation = (idOtherUser) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.get(MESSAGE_API_BASE_URL + "/" + idOtherUser, config);
};

const getNotSeenMessages = () => {
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.get(MESSAGE_API_BASE_URL + "/not_seen_message", config);
};

const marqueAsView = (idOtherUser) => {
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.get(MESSAGE_API_BASE_URL + "/view/" + idOtherUser, config);
};

const MessagesService = {
  sendMessage,
  sendNotification,
  getConversation,
  getNotSeenMessages,
  marqueAsView
};

export default MessagesService;
