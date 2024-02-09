import React, { useEffect, useState } from "react";
import "./userProfile.css";
import face from "../../assets/images/face1.jpg";
import UserProfileService from "../../services/UserProfileService";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import UserProfileMapping from "../../services/UserProfileMapping";

export default function UserProfile({ setMessageIdOtherUser }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const { id } = useParams();
  const { annonce } = useParams();

  document.title = "Profile utilisateur";

  useEffect(() => {
    UserProfileService.getUserInformation(id).then((response) => {
      setUser(response.data.data);
    });
  }, []);

  const getProfileLink = () => {
    if (annonce == undefined) {
      return "/user/" + id + "/profile";
    } else {
      return "/user/" + id + "/profile/" + annonce;
    }
  };

  const getUserAnnonceLink = () => {
    if (annonce == undefined) {
      return "/user/" + id + "/annonces";
    } else {
      return "/user/" + id + "/annonces/" + annonce;
    }
  };

  const contacterProprietaire = (idProprietaire) => {
    setMessageIdOtherUser(idProprietaire);
  };

  return (
    <>
      {user !== null ? (
        <>
          <div className="container user-profile-div mx-auto mt-4 mb-4">
            <div className="card col-md-10 mx-auto stat-section">
              <h4 className="card-title">Profile de l'utilisateur</h4>
              <div className="nav-section d-flex align-items-center mt-4">
                <button
                  onClick={() => navigate(getProfileLink())}
                  className="nav-item active"
                >
                  PROFILE
                </button>
                <button
                  onClick={() => navigate(getUserAnnonceLink())}
                  className="nav-item"
                >
                  ANNONCES
                </button>
                <div className="nav-item empty">Empty</div>
              </div>

              <div className="user-profile row mt-5">
                <div className="col-md-4 d-flex justify-content-center align-items-start">
                  <img src={user.image} alt="" />
                </div>
                <div className="col-md-7 ps-5">
                  <div className="input-group">
                    <div className="title">NOM</div>
                    <div className="value">{user.nom}</div>
                  </div>
                  <div className="input-group">
                    <div className="title">PRENOM</div>
                    <div className="value">{user.prenom}</div>
                  </div>
                  <div className="input-group">
                    <div className="title">EMAIL</div>
                    <div className="value">{user.email}</div>
                  </div>
                  <div className="input-group">
                    <div className="title">TELEPHONE</div>
                    <div className="value">{user.telephone}</div>
                  </div>
                  <div className="input-group">
                    <div className="title">ADDRESSE</div>
                    <div className="value">{user.addresse}</div>
                  </div>

                  <div className="d-flex">
                    {annonce != undefined && (
                      <div className="me-3">
                        <button
                          className="red-button"
                          onClick={() => navigate("/annonces/" + annonce)}
                        >
                          Revenir a l'annonce
                        </button>
                      </div>
                    )}
                    {(user.id != sessionStorage.getItem("idUser") && sessionStorage.getItem("profile") != UserProfileMapping.ADMIN) && (
                      <div className="">
                        <button
                          className="message-button"
                          onClick={() => contacterProprietaire(user.id)}
                        >
                          <i class="fab fa-facebook-messenger me-2"></i> Contacter
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      ;
    </>
  );
}
