import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {Switch, Route, Redirect} from 'react-router-dom'

import Child from '../components/Child/Child'
import Home from '../components/Home/Home'
import About from '../components/About/About'
import BookList from '../components/Books/BookList'
import BookDetails from '../components/Books/BookDetails'
import NoMatch from '../components/NoMatch/NoMatch'

class Main extends Component{
	
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
					<Switch>
						<Redirect exact from="/" to="/home" />
						<Route path="/home" render={() => <Home food="Squirel"/>} />
						<Route path="/about/:id?" component={About} /> 
						<Route path="/book-list" component={BookList} />
						<Route path="/book/:id" component={BookDetails} />
						<Route render={() => <NoMatch />} />
					</Switch>
				</div>
			)
	}
}

Main.propTypes = {
	food: PropTypes.string.isRequired
}

export default Main