import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, setPageNumber, pageNumber }) => {
  console.log(info?.pages)
  return (
    <ReactPaginate
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      className="pagination justify-content-center gap-4 my-4"
      nextLabel="Next"
      previousLabel="Prev"
      nextLinkClassName="text-white text-decoration-none"
      previousLinkClassName="text-white text-decoration-none"
      nextClassName="btn btn-primary text-white"
      previousClassName="btn btn-primary text-white"
      pageLinkClassName="page-link"
      pageClassName="page-item"
      activeClassName="active"
      onPageChange={(data) => {
        console.log(data.selected + 1)
        setPageNumber(data.selected + 1)
      }}
      pageCount={info?.pages}
    />
  )
};

export default Pagination;
