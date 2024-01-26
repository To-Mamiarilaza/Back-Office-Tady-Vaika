import { useNavigate } from 'react-router-dom';
import carImageTest from '../../assets/images/carImage.png';

export default function LastSaledRow({ idAnnonce, date, carImage, carname, username, price }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="annonce d-flex align-items-center mb-4">
        <div className="date me-3">{ date }</div>
        <div className="image me-3">
          <img src={carImageTest} alt="Image du voiture" />
        </div>
        <div className="description me-5">
          <div className="car-name">{ carname }</div>
          <div className="d-flex bottom-section justify-content-between align-items-center">
            <div className="username me-4">{ username }</div>
            <div className="commission">+ { price } AR</div>
          </div>
        </div>
        <div className="detail ms-3">
          <a type='button' onClick={() => navigate("/annonces/" + idAnnonce)}>
            <i className="fas fa-file-alt"></i>
          </a>
        </div>
      </div>
    </>
  );
}
