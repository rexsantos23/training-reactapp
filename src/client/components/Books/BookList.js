import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import BookItems from './BookItems'
import bookData from '../../../../data/books.json'
import authorData from '../../../../data/authors.json'

class BookList extends Component {
 
    constructor(){
        super()
        this.state = {
            hasDataLoaded: false,
            books: [],
            authors: [],
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

    getData = () => {

        const books = () => axios.get('./../../../data/books.json')
        const authors = () => axios.get('./../../../data/authors.json')

        axios
            .all([books(), authors()])
            .then(axios.spread((books,authors) => {

                this.setState({
                    hasDataLoaded: true,
                    books: books.data.books,
                    authors: authors.data.authors
                })
            }))
    }

    getAuthorName = id => {
        const { authors } = this.state
        const author = authors.find(author => author.id === parseInt(id))
        
        return author.name 
    }

    componentDidMount() {
        setTimeout(() => {
            this.getData()
        },2000)
    }

    render() {
        const { books, authors, hasDataLoaded, error } = this.state
        if(!hasDataLoaded){
            return "Loading book list....."
        }

        if(error.length !==0 ) return "Err fetching book details, please try again"
        
        return (
            <div>
                <h1 className="title">Top 100 Books</h1>
                <ul className="book-list columns is-multiline">
                    {
                        books.map(book => {
                            return (
                               <BookItems 
                                    key={book.id}
                                    book={book}
                                    author={this.getAuthorName(book.authorId)}
                                >
                                </BookItems>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default BookList