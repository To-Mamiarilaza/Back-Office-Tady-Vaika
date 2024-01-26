import car1 from '../../assets/images/car/car1.jpg';
import car2 from '../../assets/images/car/car2.jpg';
import car3 from '../../assets/images/car/car3.jpg';

export default function PhotoGallery() {
  return (
    <>
      <div className="photo-gallery mt-4 px-4">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={car1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={car2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={car3} className="d-block w-100" alt="..." />
            </div>
          </div>

          <div className="controller d-flex justify-content-between align-items-center">
            <div className="prev-button">
              <button
                type="button"
                className="custom-action-button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon prev-icon"
                  aria-hidden="true"
                ></span>
              </button>
            </div>
            <div className="custom-indicator carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                aria-current="true"
                data-bs-slide-to="0"
                className="custom-indicator-button active"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                className="custom-indicator-button"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                className="custom-indicator-button"
              ></button>
            </div>
            <div className="next-button">
              <button
                type="button"
                className="custom-action-button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon next-icon"
                  aria-hidden="true"
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
