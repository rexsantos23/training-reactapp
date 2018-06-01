import React from 'react'

const Child = props => {
	console.log(props.animal)
	return (
		
		<div>
			<p>My Name is: {props.animal.name}</p>
			<p>And im an: {props.animal.species}</p>
		</div>
	)
}

export default Child