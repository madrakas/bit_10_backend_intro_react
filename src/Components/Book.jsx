export default function Book( { book }) {
    const { id, title, author, type, price, img } = book; 

    return (
        <div className="book">
            <div className="book__image">
                <img src={img} alt={title} />
            </div>
            <div className="book_title">{title}</div>
            <div className="book_author">{author}</div>
            <div className="book_type">{type}</div>
            <div className="book_price">{price}</div>
        </div>
    );
}