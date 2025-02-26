interface BookProps{
    name:string
}
const BookCategory =({name}:BookProps)=>{
    return(
        <div className={"book__category"}>
            <p>{name}</p>
        </div>
    )
}
export default BookCategory