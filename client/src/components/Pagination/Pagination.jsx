import { Wrapper, Button } from "./Pagination.styled";

// eslint-disable-next-line react/prop-types
function Pagination({ nPages, currentPage, setCurrentPage }) {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <>
      <Wrapper>
        <li>
          <Button onClick={prevPage}>prev</Button>
        </li>
        {pageNumbers.map((pageNumber) => {
          return (
            <li key={pageNumber}>
              <Button
                style={
                  currentPage === pageNumber
                    ? { backgroundColor: "grey" }
                    : { backgroundColor: "" }
                }
                onClick={() => setCurrentPage(pageNumber)}
              >
                {pageNumber}
              </Button>
            </li>
          );
        })}
        <li>
          <Button onClick={nextPage}>next</Button>
        </li>
      </Wrapper>
    </>
  );
}

export default Pagination;
