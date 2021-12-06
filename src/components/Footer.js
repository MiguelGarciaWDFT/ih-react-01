import React from "react"

function Footer(props) {

    console.log(props)

    return ( <p> Soy el footer. El nombre que pasamos fue: {props.nombre} con el correo {props.email}  </p>
    )
}

export default Footer