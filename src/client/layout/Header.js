import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom'

import { connect } from 'react-redux'
import ThemeChanger from '../components/ThemeChanger'
import WelcomeLogin from '../components/WelcomeLogin'

import { Consumer as ThemeContextConsumer } from '../utils/providers/ThemeContext'
class Header extends Component{

	render(){

		const { theme } = this.props

		const headerColor = () => {
			switch(theme) {
				//case 'default': return 'has-background-primary'
				case 'green': return 'has-background-success'
				case 'red': return 'has-background-danger'
				case 'yellow': return 'has-background-warning'
				default: return 'has-background-primary'
			}
		}
		return (
				
				// <ThemeContextConsumer>
				// 	{value => {
				// 		const { theme } = value
				// 		const headerColor = () => {
				// 			switch(theme) {
				// 				//case 'default': return 'has-background-primary'
				// 				case 'green': return 'has-background-success'
				// 				case 'red': return 'has-background-danger'
				// 				case 'yellow': return 'has-background-warning'
				// 				default: return 'has-background-primary'
				// 			}
				// 		}

				// 		return (
					
							<div id="header" className={`section ${headerColor()}`}>
								<div className="columns">
									<div className="column">
										<h1 className="title has-text-white">The Book List</h1>
										<p className="subtitle">My Favorite Book</p>
									</div>
									<div className="column">
										<WelcomeLogin />
									</div>
								</div>
								<div>
									<ul className="navbar-brand">
										<li >
											<NavLink to="/" className="navbar-item" >Home </NavLink>
										</li>
										<li>
											<NavLink to="/about" activeClassName="navbar-item is-active">About </NavLink>
										</li>
										<li>
											<NavLink to="/book-list" activeClassName="navbar-item is-active">Books </NavLink>
										</li>
									</ul>
								</div>
								{/* <ThemeChanger theme={value} /> */}
								<ThemeChanger />
							</div>
							
				// 		)
				// 	}}
				// </ThemeContextConsumer>
				
			)
	}
}

const mapStateToProps = state => ({
	theme: state.theme
})
export default connect(mapStateToProps)(Header)