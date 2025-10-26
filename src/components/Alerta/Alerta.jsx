import React, {useEffect} from "react";

const Alerta = () => {
    useEffect(() => {
        alert("Este es una alerta!!!!!!");
    }, []);
  return (
    <div>
      <h2>Esto es una alerta</h2>
    </div>
  )
}

export default Alerta
