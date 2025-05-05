"use client"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import "./Pagination.css"

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = []
    const maxPagesToShow = 5

    if (totalPages <= maxPagesToShow) {
     
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
     
      pages.push(1)

      
      let start = Math.max(2, currentPage - 1)
      let end = Math.min(totalPages - 1, currentPage + 1)

     
      if (currentPage <= 2) {
        end = Math.min(totalPages - 1, maxPagesToShow - 1)
      }

      if (currentPage >= totalPages - 1) {
        start = Math.max(2, totalPages - maxPagesToShow + 2)
      }

      if (start > 2) {
        pages.push("...")
      }

     
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      
      if (end < totalPages - 1) {
        pages.push("...")
      }

     
      if (totalPages > 1) {
        pages.push(totalPages)
      }
    }

    return pages
  }

  const pageNumbers = getPageNumbers()

  return (
    <div className="pagination">
      <button
        className="pagination-arrow"
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <FaChevronLeft />
      </button>

      <div className="pagination-numbers">
        {pageNumbers.map((page, index) =>
          page === "..." ? (
            <span key={`ellipsis-${index}`} className="pagination-ellipsis">
              ...
            </span>
          ) : (
            <button
              key={`page-${page}`}
              className={`pagination-number ${currentPage === page ? "active" : ""}`}
              onClick={() => typeof page === "number" && onPageChange(page)}
              aria-label={`Page ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page}
            </button>
          ),
        )}
      </div>

      <button
        className="pagination-arrow"
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <FaChevronRight />
      </button>
    </div>
  )
}

export default Pagination
