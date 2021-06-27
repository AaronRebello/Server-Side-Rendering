import React, { useState } from 'react'

const HomePage = () => {

    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count + 1)
    }
    const decrease = () => {
        setCount(count - 1)
    }

    return (
        <>
            <div className="container" style={{ backgroundColor: "lightgray", height: 200, marginLeft: 140, marginTop: 150, borderRadius: 5 }}>
                <h1><i>Welcome To React World</i></h1>
                <div className="mt-2"><h5>{count}</h5></div>
                <button className="btn-success mt-3" style={{ width: 50, borderRadius: 5}} onClick={increase}>+</button>
                <button className="btn-danger ml-3" style={{ width: 50, borderRadius: 5 }} onClick={decrease}>-</button>
            </div>
        </>
    )
}

export default HomePage
