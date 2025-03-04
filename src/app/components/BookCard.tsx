import "./styles/bookCard.css"
import BookmarkIcon from '@mui/icons-material/Bookmark';
import {useNavigate} from "react-router-dom";
interface BookCardProps{
    id:string,
    category:string,
    image:string,
    title:string,
    author:string
}
const BookCard =({category,image,title,author,id}:BookCardProps)=>{
    const USERID =1
    const SAVE_BOOK_ENDPOINT =import.meta.env.VITE_STORYBOOK_BASE_URL+`/api/v1/users/save?userId=${USERID}&bookId=${id}`
    const navigate =useNavigate()

    return(
        <div className={"book_card"} id={id} onClick={()=>{
            navigate(`/read/${id}`)
        }}>
            <img src={image} alt={title}/>
            <div className={"book__category"}>{category}</div>
            <h4>{title}</h4>
            <div className={"save__container"}>
                <p className={"author"}>Author : {author}</p>
                <button className={"save__book"}><BookmarkIcon/></button>
            </div>
        </div>
    )
}
export default BookCard