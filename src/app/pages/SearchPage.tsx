import Stats from "../components/Stats.tsx";
import "./styles/SearchPage.css"
import SearchIcon from '@mui/icons-material/Search';
import BookCard from "../components/BookCard.tsx";
import {useState} from "react";
import useSWR from "swr";
import BottomNavigation from "../components/BottomNavigation.tsx";

interface BookProps{
    id:number
    title:string
    synopsis:string
    genre:string
    language:string
    chapters:object[]
    imageCover:string
}
const SearchPage =()=>{
    const BOOKS_ENDPOINT:string =import.meta.env.VITE_STORYBOOK_BASE_URL+"/api/v1/storybook/get/all"
    const[allBooks,setAllBooks] =useState<BookProps[]>([])
    const[message,setMessage] =useState<string>("")

    const fetchAllBooks =(async ()=>{
        const response =await fetch(BOOKS_ENDPOINT)
        if(response.ok){
            const data =await response.json()
            setAllBooks(data?.storyBookList)
        }else{
            setMessage("Error fetching data from the servers")
        }
    })
    const {isLoading,data}=useSWR(BOOKS_ENDPOINT,fetchAllBooks)
    if(isLoading){
        return <p>Loading...</p>
    }
    if(data){
        setAllBooks(data)
    }


    return (
        <div className={"search__page"}>
            <div className={"top__container"}>
                <Stats/>
                <img alt={"homepage image"} src={"/src/assets/SearchPage.jpg"} className={"searchPage__image"}/>
                <div className={"discover"}>
                    <h2>Discover</h2>
                    <p>Find your favourite book</p>
                </div>
                <div className={"search"}>
                    <button className={"search__button"} type={"submit"} ><SearchIcon/></button>
                    <input type={"search"} placeholder={"Search by title & more ..."}/>
                </div>
            </div>
            <div className={"popular__books"}>
                <h4>All books</h4>
                <div className={"books__container"}>
                    {allBooks.length >0?(
                        allBooks.map((book:BookProps,index:number)=>(
                            <BookCard key={index} image={book.imageCover} category={book.genre} title={book.title} author={"Roald Dahl"}/>
                        ))
                    ):(
                        <>
                            <p>{message}</p>
                        </>
                    )}

                    </div>
            </div>
            <BottomNavigation/>
        </div>
    )
}
export default SearchPage