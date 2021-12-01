import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";

function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let [search, setSearch] = useState("");

  // destructuring yapıldı
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className='App mx-auto'>
      <h1 className='text-center ubuntu my-4'>
        Rick & Mory <span className='text-primary'>Wiki</span>
      </h1>

      <Search setPageNumber={setPageNumber} setSearch={setSearch} search={search} />

      <div className='container mx-auto'>
        <div className='row'>
          <div className='col-3'>
            <Filters />
          </div>
          <div className='col-8'>
            <div className='row'>
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} />
    </div>
  );
}

export default App;
