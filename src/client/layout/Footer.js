import React, { Component } from 'react'

class Footer extends Component{

	render(){
		return (
				<div className="section footer has-background-dark">
					{(new Date()).getFullYear()}
				</div>
			)
	}
}

export default Footer