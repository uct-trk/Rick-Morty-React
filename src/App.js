import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Navbar from "./components/Navbar/Navbar";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Episode from "./components/Pages/Episode";
import Location from "./components/Pages/Location";
import CardDetails from "./components/Cards/CardDetails";

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<CardDetails />} />

        <Route path='/episodes' element={<Episode />} />
        <Route path='/episodes/:id' element={<CardDetails />} />

        <Route path='/location' element={<Location />} />
        <Route path='/location/:id' element={<CardDetails />} />
      </Routes>
    </Router>
  );
}
const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");

  // destructuring yapıldı
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  console.log(info);

  return (
    <div className='App mx-auto'>
      <h1 className='text-center mb-4'>Characters</h1>
      <Search setPageNumber={setPageNumber} setSearch={setSearch} search={search} />

      <div className='container mx-auto'>
        <div className='row'>
          <Filters
            setGender={setGender}
            setStatus={setStatus}
            setSpecies={setSpecies}
            setPageNumber={setPageNumber}
          />
          <div className='col-8'>
            <div className='row'>
              <Cards page='/' results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination info={info} setPageNumber={setPageNumber} pageNumber={pageNumber} />
    </div>
  );
};

export default App;
