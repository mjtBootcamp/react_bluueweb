import React from "react";
const Formulario=()=>{
    const [fruta, setFruta]=React.useState('')
    const [descripcion, setDescripcion]=React.useState('')
    return(
        <div>
            <h2>Formulario</h2>
            <form onSubmit={}>
                <input type="text"
                placeholder="Ingresa fruta"
                className="form-control mb-2"
                onChange={(e)=>setFruta(e.target.value)} />
            </form>
        </div>
    )
}