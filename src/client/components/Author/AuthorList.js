import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class AuthorList extends Component {

    constructor() {
        super()
        this.state = {
            hasDataLoaded: false,
            authors: [],
            error: ''
        }
    }

    getAuthors = () => {
        axios.get('./../../../data/authors.json')
            .then( response => {
                this.setState({
                    hasDataLoaded: true,
                    authors: response.data.authors
                })
            })
            .catch( function (error) {
                console.log(error);
            })
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.getAuthors()
        },2000)
    }

    render() {
        const {authors, hasDataLoaded, error} = this.state 

        if(!hasDataLoaded){
            return "Loading author list....."
        }

        if(error.length !== 0 ) return "Err fetching authors"

        
        return (
            <div>
                <h1 className="title">Authors List</h1>
                <ul className="author-list columns is-multiline">
                    {
                        authors.map(author => {
                            return (
                                <li key={author.id}
                                    className="column is-one-quarter author-item"
                                >
                                    <div className="card">
                                        <div className="card-content">
                                            <div className="content">
                                                <Link to={`/author/${author.id}`}>
                                                    Name: {author.name} <br />
                                                    
                                                </Link>
                                                Age: {author.age} <br />
                                            </div>
                                        </div>
                                    </div>   
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default AuthorList