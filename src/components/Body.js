import React from "react"

function Body(props) {

    console.log(props)

    return ( <p> Soy el Body. Mi cancion favorita es {props.cancion} del album {props.album} de mi grupo favorito {props.grupo} </p>
    )
}

export default Body