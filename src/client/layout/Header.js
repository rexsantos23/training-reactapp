import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom'

class Header extends Component{

	render(){
		return (
				<div id="header" className="section has-background-primary">
					<div className="columns">
						<h1 className="title has-text-white">The Book List</h1>
						<p className="subtitle">My Favorite Book</p>
					</div>
					<div>
						<nav>
				
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
						</nav>
					</div>
				</div>
			)
	}
}

export default Header