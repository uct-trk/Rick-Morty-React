import React from 'react'

const FilterBtn = ({ name, index, item, task, setPageNumber }) => {
    console.log(name)
    return (
        <div className="form-check">
            <style jsx>
                {`
                .x:checked + label{
                    background-color: #0b5ed7;
                    color: white;
                }
                input[type="radio"]{
                    display: none;
                }
                `}
            </style>
            <input onClick={() => {
                setPageNumber(1);
                task(item)
            }} className="form-check-input x" type="radio" name={name} id={`${name} - ${index}`} />
            <label className="btn btn-outline-primary" htmlFor={`${name} - ${index}`}>{item}</label>
        </div>
    )
}

export default FilterBtn
