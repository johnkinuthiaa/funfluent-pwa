import "./styles/modal.css"
type ModalMessage ={
    message:string
    color: string
}
const Modal =({message,color}:ModalMessage)=>{
    return(
        <template className={"modal"}>
            <>{message}</>
            <div className={"line__animation"} style={{backgroundColor:color}}></div>
        </template>
    )
}
export default Modal