import "./DisplayingCard.css";
import { Link } from "react-router-dom";

function DisplayingCard({ results, pages }) {
  return results?.map((x) => {
    const { image, name, status, gender, id } = x;
    return (
      <>
        <Link
          to={`${pages}${id}`}
          key={id}
          className="col-lg-3 col-md-4 col-12 mt-5 p-0  position-relative cartoon_card   "
        >
          <img src={image} className="img-fluid w-100" alt="Empty" />
          <div className="p-3">
            <div>
              <p className="fw-bolder fs-4 text-success">{name}</p>
            </div>
            <div className="mt-1">
              <p className="text-dark">{gender}</p>
            </div>
          </div>

          <div className="status">{status}</div>
        </Link>
      </>
    );
  });
}

export default DisplayingCard;
