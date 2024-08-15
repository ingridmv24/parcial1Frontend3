import { useState } from 'react'
import Carta from './Carta'

const Formulario = () => {
  const [customer, setCustomer] = useState({
    nombre: "",
    cancion: "",
  })

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleNombre = (e) => {
    setCustomer({ ...customer, nombre: e.target.value })
  }
  const handleCancion = (e) => {
    setCustomer({ ...customer, cancion: e.target.value })
  }
  const handdleSubmit = (e) => {
    e.preventDefault();
    const noNumbersRegex = /^[^\d]*$/;
    if (customer.nombre.trim().length > 3 && customer.cancion.trim().length > 3 && noNumbersRegex.test(customer.nombre)) {
      setShow(true)
      setError(false)
    }
    else {
      setError(true)
    }
  }

  return (
    <>
      <div>
        <form onSubmit={handdleSubmit}>
          <label>Nombre</label>
          <input placeholder="Ingresa tu nombre" type="text" value={customer.nombre} onChange={handleNombre} />
          <label>cancion favorita</label>
          <input placeholder="Ingresa tu cancion favorito" type="text" value={customer.cancion} onChange={handleCancion} />
          <button>enviar</button>
        </form>
      </div>
      <Carta customer={customer}></Carta>
      {error && (
        <h4 style={{ color: "red" }}>Por favor, verifique su información</h4>
      )}
    </>
  )
}

export default Formulario