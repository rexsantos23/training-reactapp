import React, { Component } from 'react'

class BookDetails extends Component {

    constructor(){
        super()
        this.state = {
            hasDataLoaded: false,
            book: [],
            author: '',
            error: ''
        }
    }
    getAuthorName = id => { 
        fetch('../../../../data/authors.json')
        .then(response => response.json())
        .then(json => {

            let author = json.authors.find( author => author.id === parseInt(id) )
            
            this.setState({
                author: author.name
            })
            
        })
        .catch(error => {
           
            this.setState({
                hasDataLoaded: true,
                error: error.message
            })
        })
    }
    getBookDetails = () => {
        const { id } = this.props.match.params
       
        fetch('../../../../data/books.json')
            .then(response => response.json())
            .then(json => {

                let currentBook = json.books.find( book => book.id === parseInt(id) )

                this.setState({
                    hasDataLoaded:true,
                    book:currentBook,
                }, () => {
                    this.getAuthorName(currentBook.authorId)
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
            this.getBookDetails()
        },2000)
    }

 
    render() {

        const { book,author, hasDataLoaded, error } = this.state
        if(!hasDataLoaded){
            return "Loading book list....."
        }

        if(error.length !==0 ) return "Err fetching book details, please try again"
        
        return (
            <div>
                <p className="is-text-6">Viewing current book:</p>
                <h1 className="title">Title: {book.title}</h1>
                <p className="subtitle">Author: {author}</p>
                <hr />
                <p>{book.summary}</p>
            </div>
        )
    }
}

export default BookDetails