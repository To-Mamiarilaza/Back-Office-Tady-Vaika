export default function PaginationButton({indice, changeIndice}) {
  return (
    <>
      <li className="page-item">
        <a className="page-link" type="button" onClick={() => changeIndice(indice - 1)}>
          {indice}
        </a>
      </li>
    </>
  );
}
