import { useContext } from "react";
import { BooksContext } from "./BooksContext";

export default function Book( { book }) {
    const { id, title, author, type, price, img } = book; 
    const { types } = useContext(BooksContext);
    return (
        <div className="book">
            <div className="book__image">
                <img src={img} alt={title} />
            </div>
            <div className="book_title">{title}</div>
            <div className="book_author">{author}</div>
            <div className="book_type">{types !== null ? types.find(t => t.id === type).title : ''}</div>
            <div className="book_price">{price} Eur</div>
        </div>
    );
}