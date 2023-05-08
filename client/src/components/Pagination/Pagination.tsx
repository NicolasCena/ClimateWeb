const Pagination = ({ totalPages, currentPage, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className="pagination">
          {pageNumbers.map((pageNumber) => (
            <li
              key={pageNumber}
              className={`page-item ${pageNumber === currentPage && "active"}`}
            >
              <a
                onClick={() => paginate(pageNumber)}
                href="#"
                className="page-link"
              >
                {pageNumber}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default Pagination;
  