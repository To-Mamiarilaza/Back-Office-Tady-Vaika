import React, { useEffect, useState } from "react";
import bigLogo from "../../assets/images/welcome-image.png";
import "./newLogin.css";
import { useNavigate } from "react-router-dom";
import AuthentificationService from "../../services/AuthentificationService";

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("to@gmail.com");
  const [password, setPassword] = useState("to");
  const [error, setError] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    AuthentificationService.login(email, password)
      .then((response) => {
        if (response.data.message == "success") {
          localStorage.setItem("token", response.data.data.token.token);
          sessionStorage.setItem("email", email);
          sessionStorage.setItem("prenom", response.data.data.users.prenom);
          sessionStorage.setItem("nom", response.data.data.users.nom);
          navigate("/dashboard");
        } else {
          setError(response.data.data);
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    document.title = "Se connecter";

    document.body.classList.add("login-body");
    document.getElementById("root").classList.add("login-root");

    return () => {
      document.body.classList.remove("login-body");
      document.getElementById("root").classList.remove("login-root");
    };
  }, []);

  return (
    <>
      <div className="container login">
        <div className="login-div mt-5 mb-5 row mx-auto">
          <div className="col-md-6 p-5 text-center presentation">
            <p className="mt-3 welcome-text">
              Dans Jery Vaika, vous trouverez la meilleure voiture qui vous convient.
            </p>
            <img src={bigLogo} className="welcome-image mt-5 mx-auto" alt="" />
          </div>
          <div className="col-md-6 p-5 formulaire">
            <form action="mt-3">
              <h3 className="mt-3">Connectez-vous !!</h3>
              <div className="mt-5">
                <h4>EMAIL</h4>
                <input
                  type="text"
                  name="email"
                  className="custom-form"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Entrer votre email"
                />
              </div>
              <div className="mt-5">
                <h4>MOT DE PASSE</h4>
                <input
                  type="password"
                  name="password"
                  className="custom-form"
                  placeholder="Entrer votre mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mt-4">
                {error !== "" ? <div className="error">{error}</div> : <></>}

                <input
                  type="submit"
                  className="submit-button red-button"
                  value="Se connecter"
                  onClick={onSubmitHandler}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
