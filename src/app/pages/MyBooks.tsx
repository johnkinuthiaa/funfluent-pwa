import {useEffect, useState} from "react";
import BookCard from "../components/BookCard.tsx";
import Modal from "../components/Modal.tsx";

type Book ={
    id:number |string,
    title:string,
    imageCover:string,
    author:string,
    genre:string
}
const MyBooks =()=>{
    const userId :number=1
    const[message,setMessage] =useState<string>("")
    const[modalColor,setModalColor] =useState<string>("green")
    const[books,setAllBooks] =useState<Book[]>([])
    useEffect(() => {
        fetchAllSavedBooks()
    }, []);
    const fetchAllSavedBooks =(async ()=>{
        try{
            const response=await fetch(import.meta.env.VITE_STORYBOOK_BASE_URL+`/api/v1/users/${userId}/saved-books`,{
                method:"GET"
            })
            if(response.ok){
                const data =await response.json()
                if(data?.statusCode !=200){
                    setMessage(data?.message)
                }else{
                    setAllBooks(data?.bookList)
                }
            }
        }catch (e) {
            setModalColor("red")
            setMessage(" Error: "+e)
        }

    })
    return(
        <div className={"my__books"}>
            <h1>My Saved books</h1>
            <div>
                {books?.length>0?(
                    books?.map(({id,title,imageCover,author,genre}:Book,index:number)=>(
                        <div key={index} id={id.toString()}>
                            <BookCard category={genre} image={imageCover} title={title} author={author} />
                        </div>
                    ))
                ):(
                    <div>Book list is empty</div>
                )}
            </div>
            {message&&<Modal message={message} color={modalColor} />}
        </div>
    )
}
export default MyBooks