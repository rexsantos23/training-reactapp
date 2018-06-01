import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Child from '../Child/Child'

class Home extends Component{
	
	constructor(){
		super()
		this.state = {
			animal: {
				name: 'Malaya',
				species: 'Eagle'
			},
			count: 1,
			endangered: true
		}
	}

	changeName(event) {
		this.setState({animal:{
						...this.state.animal,
						name: event.target.value
						}
			})
	}

	render(){

		const { name, type, species } = this.state.animal
		/*let { name, type, species } = this.state.animal*/
		const status = this.state.endangered ? 'endangered' : 'happy' 
		
		return (
				<div className="section">
                
					<Child animal={this.state.animal}/>
					and we are {status} <br />
					and i eat {this.props.food} <br />

				</div>
			)
	}
}

Home.propTypes = {
	food: PropTypes.string.isRequired
}

export default Home