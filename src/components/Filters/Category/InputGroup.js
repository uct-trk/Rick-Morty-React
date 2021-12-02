import React from 'react'

const InputGroup = ({ total, name, setId }) => {
    console.log([...Array(total).keys()])
    return (
        <div className="input-group mb-3">
            <select className="form-select" id={name} onChange={e => setId(e.target.value)}>
                <option selected disabled>Choose...</option>
                {
                    [...Array(total).keys()].map(x => {
                        return (
                            <option value={x + 1}>{name} - {x + 1}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default InputGroup
