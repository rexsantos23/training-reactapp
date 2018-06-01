import React from 'react'
import { Link } from 'react-router-dom'

const BookItems = props => {

    const { book, author } = props
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
                            by: <Link to={`/author/${book.authorId}`}>{author}</Link>
                        </span>
                </div>
            </div>
        </li>
    )
}

export default BookItems