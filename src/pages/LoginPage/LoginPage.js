import React, { useEffect, useState } from "react";
import bigLogo from "../../assets/images/big_logo.png";
import "./login.css";
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
          localStorage.setItem("token", response.data.data.token);
          navigate("/dashboard");
        } else {
          setError(response.data.data);
        }
        console.log(response);
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
    <div className="container login mx-auto">
      <div className="login-div mt-5 mb-5 row w-80 mx-auto">
        <div className="col-md-6 px-5">
          <h4 className="text-center welcome-text mt-5">BIENVENUE DANS</h4>
          <div className="logo-div mt-4">
            <img className="logo" src={bigLogo} alt="" />
          </div>
          <div className="welcome-p mt-3">
            Pret a gerer car looking, veuillez vous connecter <br /> tout
            d'abord !
          </div>

          <form action="" className="mt-5">
            <div className="input-container mb-4">
              <input
                className="login-input"
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <i className="far fa-user"></i>
            </div>
            <div className="input-container mb-4">
              <input
                className="login-input"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className="fas fa-lock"></i>
            </div>

            {error !== "" ? (
              <div className="my-3 text-center text-danger fs-small">
              {error}
              </div>
            ) : (<></>)}
            <div className="input-container">
              <input
                type="submit"
                className="submit-button"
                value="SE CONNECTER"
                onClick={onSubmitHandler}
              />
            </div>
          </form>
          <p className="signup-text mt-3">
            N' a pas encore de compte ?{" "}
            <span className="signup-link">Cree un compte</span>
          </p>
        </div>
        <div className="col-md-6 image-display">
          <div className="background-red-effect d-flex justify-content-center align-items-center">
            <div className="middle-text">
              <h4 className="text-white">JERY VAIKA</h4>
              <p className="welcome-p text-white mt-3">
                Vous voulez trouver une voiture d'occasion. <br /> Nous vous
                facilitons la vie !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
