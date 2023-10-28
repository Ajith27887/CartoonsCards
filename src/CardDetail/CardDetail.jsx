import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CardDetail.css";

function CardDetail() {
  const { id } = useParams();
  const [FetchData, setFetchData] = useState([]);

  // Api Name search
  const api = `https://rickandmortyapi.com/api/character/${id}`;

  console.log(id);
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchData(data);
      console.log(data);
    })();
  }, [api]);
  const { gender, name, image, status, location } = FetchData;
  console.log(id);

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div
            className=" d-flex flex-column justify-content-center
align-items-center"
          >
            <img src={image} alt="Empty" />
            <p className="detail_status mt-3 fw-bolder">{status}</p>
            <p>
              <span className="colors">Name : </span>
              {name}
            </p>
            <p>
              <span className="colors">Gender : </span>
              {gender}
            </p>
            <p>
              <span className="colors">Location : </span>
              {location?.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
