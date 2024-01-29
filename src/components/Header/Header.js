import face from "../../assets/images/face1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(sessionStorage.getItem("user"));
  }, []);

  const deconnect = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      {user !== null && (
        <div className="menu">
          <div className="icon">
            <h4>JERY VAIKA</h4>
            <p>Vous trouverez votre voiture ici !</p>
          </div>
          <div className="widgets">
            <div className="widgets-section">
              <div className="user-info align-items-center">
                <div className="profile-img">
                  <img src={face} alt="" />
                </div>
                <div className="profile-label">
                  <p className="name">{user.prenom + " " + user.nom}</p>
                  <p className="mail">{user.email}</p>
                </div>
              </div>
            </div>
            <div className="widgets-section">
              <a type="button" onClick={() => deconnect()} href="#">
                <i className="fas fa-power-off"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
