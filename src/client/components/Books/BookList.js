import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import bookData from '../../../../data/books.json'
import authorData from '../../../../data/authors.json'

class BookList extends Component {

    constructor(){
        super()
        this.state = {
            hasDataLoaded: false,
            books: [],
            error: ''
        }
    }

    getBooks = () => {
        fetch('../../../../data/books.json')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    hasDataLoaded:true,
                    books:json
                })
            })
            .catch(error => {
                this.setState({
                    hasDataLoaded: true,
                    error: error.message
                })
            })
    }
    componentDidMount() {
        setTimeout(() => {
            this.getBooks()
        },2000)
    }

    render() {
        const { books, hasDataLoaded, error } = this.state
        if(!hasDataLoaded){
            return "Loading book list....."
        }

        if(error.length !==0 ) return "Err fetching book details, please try again"
        
        return (
            <div>
                <h1 className="title">Top 100 Books</h1>
                <ul className="book-list columns is-multiline">
                    {
                        books.books.map(book => {
                            return (
                                <li key={book.id}
                                    className="column is-one-quarter boo-item"
                                 >
                                    <div className="card">
                                        <div className="card-content">
                                            <div className="content">
                                                <Link to={`/book/${book.id}`}>
                                                    { book.title }
                                                </Link>
                                            </div>
                                            <span className="is-size-7">
                                                    by: {book.authorId}
                                                </span>
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

export default BookList