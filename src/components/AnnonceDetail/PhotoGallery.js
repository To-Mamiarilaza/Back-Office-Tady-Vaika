import car1 from "../../assets/images/car/car1.jpg";
import car2 from "../../assets/images/car/car2.jpg";
import car3 from "../../assets/images/car/car3.jpg";

export default function PhotoGallery({ images }) {
  const imageRows = [];
  let active = true;
  images.forEach((image) => {
    imageRows.push(
      <div className={active ? "carousel-item active" : "carousel-item"}>
        <img src={image.image} className="d-block w-100" alt="..." />
      </div>
    );

    active = false;
  });

  const carouselButtons = [];
  for (let i = 0; i < images.length; i++) {
    carouselButtons.push(
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        aria-current={i == 0 && true}
        data-bs-slide-to={i}
        className={i == 0 ? "custom-indicator-button active" : "custom-indicator-button" }
      ></button>
    );
  }

  return (
    <>
      <div className="photo-gallery mt-4 px-4">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">{imageRows}</div>

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
              {carouselButtons}
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
