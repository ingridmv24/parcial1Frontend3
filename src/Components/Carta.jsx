import React from 'react'

const Carta = ({ customer }) => {
    const { nombre, cancion } = customer;
    return (
        <div>
            <p style={{ color: "black" }}>Hola {nombre} <br /> sabemos que tu cancion favorita es: </p>
            <button>{cancion} </button>
        </div>
    )
}

export default Carta