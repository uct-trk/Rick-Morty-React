import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import InputGroup from "../Filters/Category/InputGroup";

const Episode = () => {
  let [id, setId] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let { air_date, name } = info;

  let api = `https://rickandmortyapi.com/api/episode/${id}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((char) => {
          return fetch(char).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);
  console.log("info", info);
  console.log("char", results);

  return (
    <div className='container'>
      <div className='row'>
        <h1 className='text-center mb-4'>
          Episode :{" "}
          <span className='text-primary'> {name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className='text-center mb-4'>
          Air Date{" "}
          <span className='text-primary'> {air_date === "" ? "Unknown" : air_date}</span>
        </h5>
      </div>
      <div className='row'>
        <div className='col-3'>
          <h4 className='text-center mb-4'>Pick Episodes</h4>
          <InputGroup setId={setId} name='Episode' total={51} />
        </div>
        <div className='col-8'>
          <div className='row'>
            <Cards page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episode;
