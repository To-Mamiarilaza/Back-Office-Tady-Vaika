export default function LandingStat({ nombre, description }) {
  return (
    <>
      <div className="stat">
        <div className="nombre">{nombre}</div>
        <div className="description">{description}</div>
        <div className="bottom-style"></div>
      </div>
    </>
  );
}
