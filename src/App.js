import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";

function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);

  // destructuring yapıldı
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

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
    </div>
  );
}

export default App;
