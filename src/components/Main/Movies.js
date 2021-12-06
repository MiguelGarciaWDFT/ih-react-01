import React from 'react'

export default function Movies(props) {

	const list = props.list

	return (
		<>
			{
				list.map(e => {
					return (
						<>
							<h1>{e.nombre}</h1>
							<p>El género es: {e.genero}</p>
						</>
					)
				}) 

			}	
		</>
	)
}