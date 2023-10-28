import "./Pagination.css";
import ReactPaginate from "react-paginate";

function Pagination({ setNumber, PageNmber, info }) {
  return (
    <div className="d-flex justify-content-center">
      <ReactPaginate
        className="pagination "
        previousLabel="Prev"
        previousClassName="btn btn-dark "
        nextClassName="btn btn-dark "
        pageCount={info?.pages}
        pageClassName="page-item "
        pageLinkClassName="page-link"
        activeClassName="active"
        onPageChange={(data) => {
          setNumber(data.selected + 1);
          console.log(PageNmber);
        }}
      />
    </div>
  );
}

export default Pagination;
