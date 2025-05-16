import { useContext } from "react";
import "./Pagination.css";
import { AppContext } from "../context/Appcontext";
const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className="pagination">
      <div className="buttons">
        {page > 1 && (
          <button onClick={() => handlePageChange(page - 1)}>Previous</button>
        )}

        {page < totalPages && (
          <button onClick={() => handlePageChange(page + 1)}>Next</button>
        )}
      </div>

      <div>
        <p>
          {" "}
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
