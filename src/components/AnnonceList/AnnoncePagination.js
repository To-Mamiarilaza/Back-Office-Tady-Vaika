export default function AnnoncePagination({
  paginationButtons,
  nextPagination,
  previousPagination,
}) {
  return (
    <>
      <div className="pagination">
        <ul className="pagination">
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              tabIndex="-1"
              onClick={previousPagination}
            >
              Previous
            </a>
          </li>
          {paginationButtons}
          <li className="page-item">
            <a className="page-link" href="#" onClick={nextPagination}>
              Next
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
