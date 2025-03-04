import {useEffect, useState} from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

type Chapter={
    id:number,
    chapterTitle:string,
    content:string
}
interface BookProps{
    id:string,
    category:string,
    image:string,
    title:string,
    author:string,
    synopsis:string,
    genre:string,
    chapters:Chapter[],
}
const ReadBook =()=>{
    const url =window.location.href
    const endpoint =url.match(/[^/]+$/)

    const[book,setBook] =useState<BookProps>({
        author: "",
        category: "",
        chapters: [],
        genre: "",
        id: "",
        image: "",
        synopsis: "",
        title: ""
    })
    const bookUrl =import.meta.env.VITE_STORYBOOK_BASE_URL+`/api/v1/storybook/${endpoint}/get`
    const getBookById =(async ()=>{
        const response =await fetch(bookUrl,{
            method:"GET"
        })
        if(response.ok){
            const data =await response.json()
            if(data.statusCode ===200){
                setBook(data?.storyBook)
            }else{
                throw new Error("error fetching data")
            }
        }
    })
    useEffect(() => {
        getBookById()
    }, []);

    return(
        <div className={"book__content"}>
            <div className={"faq__header"}>
                <button onClick={()=>{
                    window.history.back()}}><ArrowBackIcon/></button>
                <h2>{book.title}</h2>
            </div>
            <div className={"book__metadata"}>
                <img alt={"image"}/>
                <h4>{book.title}</h4>
                <h4>{book.author}</h4>
            </div>
            <h1>Synopsis</h1>
            <p>{book.synopsis}</p>
            <div className={"chapters"}>
                {book.chapters.map((chapter:Chapter,index:number)=>(
                    <div key={index}>
                        <p>chapter {chapter.id}</p>
                        <p>Title :{chapter.chapterTitle}</p>
                        <p>{chapter.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ReadBook