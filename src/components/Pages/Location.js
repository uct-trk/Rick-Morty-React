import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import InputGroup from "../Filters/Category/InputGroup";

const Location = () => {
    let [id, setId] = useState(1);
    let [info, setInfo] = useState([]);
    let [results, setResults] = useState([]);
    let { type, name, dimension } = info;

    let api = `https://rickandmortyapi.com/api/location/${id}`;
    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            setInfo(data);

            let a = await Promise.all(
                data.residents.map((char) => {
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
                    Location :{" "}
                    <span className='text-primary'> {name === "" ? "Unknown" : name}</span>
                </h1>
                <h5 className='text-center mb-4'>
                    Dimension{" "}
                    <span className='text-primary'> {dimension === "" ? "Unknown" : dimension}</span>
                </h5>

                <h6 className='text-center mb-4'>
                    Type{" "}
                    <span className='text-primary'> {type === "" ? "Unknown" : type}</span>
                </h6>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <h4 className='text-center mb-4'>Pick Location</h4>
                    <InputGroup setId={setId} name='Location' total={126} />
                </div>
                <div className='col-8'>
                    <div className='row'>
                        <Cards page="/location/" results={results} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;
