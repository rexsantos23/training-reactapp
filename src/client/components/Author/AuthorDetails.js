import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class AuthorDetails extends Component {

    constructor(){
        super()
        this.state = {
            hasDataLoaded: false,
            author: [],
            books: [],
            error: ''
        }
    }

    getData = () => {
        const { id } = this.props.match.params 

        const books = () => axios.get('./../../../data/books.json')
        const authors = () => axios.get('./../../../data/authors.json')

        axios
            .all([books(), authors()])
            .then(axios.spread((books,authors) => {
                let currentAuthor = authors.data.authors.find(author => author.id === parseInt(id))
                let authorBooks = books.data.books.filter(book => parseInt(book.authorId) === currentAuthor.id)
              
                this.setState({
                    hasDataLoaded: true,
                    books: authorBooks,
                    author:currentAuthor
                })
            }))
            .catch(error => {
                this.setState({
                    hasDataLoaded: true,
                    error: error.message
                })
            })
            
    }

    componentDidMount() {
        setTimeout(() => {
            this.getData()
        },2000)
    }

    render() {
        const {author, books, hasDataLoaded, error} = this.state

        return (
            <div>
                <h1 className="title">Viewing books of:</h1>
                <p className="subtitle">{ author.name } </p>
                <button onClick={() => this.props.history.goBack()}>Go Back</button>
                <hr />
                <p>List of books written</p>
                <ul>
                    {
                        books.map(book => {
                            return (
                                <li key={book.id}>
                                    <Link to={`/book/${book.id}`}> { book.title }</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    
}

export default AuthorDetails