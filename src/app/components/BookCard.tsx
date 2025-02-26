import "./styles/bookCard.css"
interface BookCardProps{
    category:string,
    image:string,
    title:string,
    author:string
}
const BookCard =({category,image,title,author}:BookCardProps)=>{
    return(
        <div className={"book_card"}>
            <img src={image} alt={title}/>
            <div className={"book__category"}>{category}</div>
            <h4>{title}</h4>
            <p className={"author"}>Author : {author}</p>
        </div>
    )
}
export default BookCard