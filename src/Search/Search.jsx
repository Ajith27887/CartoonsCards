import "./Search.css";

function Search({ setSearch }) {
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <div
        className="d-flex mt-5 justify-content-center   vertical-align: baseline;
 align-item-baseline"
      >
        <input
          placeholder="Search Your Fav Cartoons"
          onChange={searchHandler}
          // className="mt-5"
          type="text"
        ></input>
        <div className="position-relative"></div>
      </div>
      
    </div>
  );
}

export default Search;
