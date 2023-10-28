import { useEffect, useState } from "react";
import DisplayingCard from "./DisplayingCard/DisplayingCard";
import Navbar from "./Navbar/Navbar";
import Search from "./Search/Search";
import "./App.css";
import Pagination from "./Pagination/Pagination";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartWar from "./StarWar/StarWar";
import CardDetail from "./CardDetail/CardDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/:id" element={<CardDetail />}></Route>
        <Route path="/StarWar" element={<StartWar />}></Route>
      </Routes>
    </Router>
  );
}

const Home = () => {
  const [FetchData, setFetchData] = useState([]);
  const [search, setSearch] = useState("");
  const [PageNmber, setNumber] = useState(1);
  // Api Name search
  const api = `https://rickandmortyapi.com/api/character/?&name=${search}&page=${PageNmber}`;

  // Search Render (we need to update search variable every api render  )
  useEffect(() => {
    search;
  }, [api, search]);

  // Api Render
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchData(data);
    })();
  }, [api]);
  const { info, results } = FetchData;
  return (
    <>
      <Search setSearch={setSearch} />
      <div className="container my-5  p-5 p-md-0">
        <div className="row  gap-5 justify-content-center">
          {<DisplayingCard pages="/" results={results} />}
          <Pagination setNumber={setNumber} info={info} PageNmber={PageNmber} />
        </div>
      </div>
    </>
  );
};

export default App;
