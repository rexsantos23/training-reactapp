import React, { Component, createContext } from 'react'
import ErrorBoundary from './ErrorBoundary';

import { HashRouter } from 'react-router-dom'

import { Provider as UserContextProvider } from './utils/providers/UserContext'
import { Provider as ThemeContextProvider } from './utils/providers/ThemeContext'

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
				{/* <ThemeContextProvider>
					<UserContextProvider> */}
						<div className="container">
							<Header />
							<ErrorBoundary>
								<Main food="Squirel"/>
							</ErrorBoundary>
							<Footer />
						</div>
					{/* </UserContextProvider>
				</ThemeContextProvider> */}
			</HashRouter>
		)
	} 
}

export default App