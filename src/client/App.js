import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundary';

import { HashRouter } from 'react-router-dom'

import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'


const book = {
	title: "Sample",
	author: "Sample"
}

class App extends Component{

	constructor(){
		super()
		this.state = {
			animal: {
				name: 'Malaya',
				animalType: 'Eagle'
			},
			food: 1,
			place: 'bar'
		}
	}
	render(){

		return (
			<HashRouter>
				<div className="container">
					<Header />
					<ErrorBoundary>
						<Main food="Squirel"/>
					</ErrorBoundary>
					<Footer />
				</div>
			</HashRouter>
		)
	} 
}

export default App