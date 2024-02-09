import face from "../../assets/images/face1.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MessageNotification from "./MessageNotification";
import MessageBoxComponent from "./MessageBoxComponent";
import UserProfileMapping from "../../services/UserProfileMapping";

export default function Header({ messageIdOtherUser, setMessageIdOtherUser }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (sessionStorage.getItem("nom") != null) {
      const user = {
        nom: sessionStorage.getItem("nom"),
        prenom: sessionStorage.getItem("prenom"),
        email: sessionStorage.getItem("email"),
        image: sessionStorage.getItem("image"),
      };  
      setUser(user);
    }
  }, []);

  const deconnect = () => {
    localStorage.removeItem("token");

    if (sessionStorage.getItem("profile") == UserProfileMapping.USER) {
      sessionStorage.clear();
      localStorage.clear();
      setUser(null);
      navigate("/");
    } else {
      sessionStorage.clear();
      localStorage.clear();
      setUser(null);
      navigate("/admin");
    }
  };

  const closeMessageBox = () => {
    setMessageIdOtherUser(0);
  };

  const login = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="menu">
        <div className="icon">
          <h4>JERY VAIKA</h4>
          <p>Vous trouverez votre voiture ici !</p>
        </div>
        <div className="widgets">
          {user == null ? (
            <div className="d-flex align-items-center me-5">
              <a
                onClick={() => login()}
                type="button"
                className="text-danger login-link"
              >
                <i class="far fa-user-circle me-3"></i>Se connecter
              </a>
            </div>
          ) : (
            <>
              <div className="widgets-section">
                <div className="user-info align-items-center">
                  <div className="profile-img">
                    <img src={user.image} alt="" />
                  </div>
                  <div className="profile-label">
                    <p className="name">{user.prenom + " " + user.nom}</p>
                    <p className="mail">{user.email}</p>
                  </div>
                </div>
              </div>

              {sessionStorage.getItem("profile") == UserProfileMapping.USER && (
                <>
                  <MessageNotification setOtherIdUser={setMessageIdOtherUser} />
                  <MessageBoxComponent
                    idOtherUser={messageIdOtherUser}
                    closeMessageBox={closeMessageBox}
                  />
                </>
              )}

              <div className="widgets-section">
                <a type="button" onClick={() => deconnect()} href="#">
                  <i className="fas fa-power-off"></i>
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
