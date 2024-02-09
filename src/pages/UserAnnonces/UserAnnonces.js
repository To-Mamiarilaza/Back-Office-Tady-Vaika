import React from "react";
import "./userAnnonce.css";
import UserAnnonceRow from "../../components/UserAnnonces/UserAnnonceRow";
import UserProfileService from "../../services/UserProfileService";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function UserAnnonces() {
  const [annonces, setAnnonces] = useState([]);
  const navigate = useNavigate();

  const { id } = useParams();
  const { annonce } = useParams();

  document.title = "Annonce utilisateur";

  useEffect(() => {
    UserProfileService.getUserAnnonces(id).then((response) => {
      console.log(response);
        if (response.data.message == "success") {
            setAnnonces(response.data.data.content);
        }
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

  const rows = [];
  annonces.forEach((annonce) => {
    if (annonce.status >= 10) {
        rows.push(<UserAnnonceRow annonce={annonce} />);
    }
  });

  return (
    <>
      <div className="container user-annonce-div mx-auto mt-4 mb-4">
        <div className="card col-md-10 mx-auto stat-section">
          <h4 className="card-title">Profile de l'utilisateur</h4>
          <div className="nav-section d-flex align-items-center mt-4">
            <button
              onClick={() => navigate(getProfileLink())}
              className="nav-item"
            >
              PROFILE
            </button>
            <button
              onClick={() => navigate(getUserAnnonceLink())}
              className="nav-item active"
            >
              ANNONCES
            </button>
            <div className="nav-item empty">Empty</div>
          </div>

          <div className="annonce-histories mt-4">
            <h4>Historiques des annonce effectue</h4>
            <table className="table mt-3 pending-list">
              <thead>
                <tr className="table-dark">
                  <th>ID</th>
                  <th>Date</th>
                  <th>Voiture</th>
                  <th>Description</th>
                  <th>Etat</th>
                  <th className="prix">Prix</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {rows}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserAnnonces;
