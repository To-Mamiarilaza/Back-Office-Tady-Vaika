import face from "../../assets/images/face1.jpg"

export default function Header() {
  return (
    <>
      <div className="menu">
            <div className="icon">
                <h4>JERY VAIKA</h4>
                <p>Vous trouverez votre voiture ici !</p>
            </div>
            <div className="widgets">
                <div className="widgets-section">
                    <div className="user-info">
                        <div className="profile-img">
                            <img src={face} alt=""/>
                        </div>
                        <div className="profile-label">
                            <p className="name">James Carlson</p>
                            <p className="mail">jamescarlson@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="widgets-section dropdown">
                    <button type="button" className="notif notif-button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i className="far fa-bell"></i>
                        <span className="notif-nb">3</span>
                    </button>
                    <ul className="dropdown-menu dropdown-width pt-3" aria-labelledby="dropdownMenuButton1">
                        <li>
                            <a className="notif-item" href="">
                                <div className="img-section">
                                    <img src={face} alt=""/>
                                </div>
                                <div className="text-section">
                                    Une nouvelle annonce pour un <strong className="car-name">Toyota Hilux</strong> publie
                                    par <strong>Rivo RAKOTO</strong>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className="notif-item" href="">
                                <div className="img-section">
                                    <img src={face} alt=""/>
                                </div>
                                <div className="text-section">
                                    La voiture <strong>Rexton</strong> de l'annonce <strong>123</strong> a ete vendue
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="widgets-section">
                    <a href="">
                        <i className="fas fa-power-off"></i>
                    </a>
                </div>
            </div>
        </div>
    </>
  );
}
