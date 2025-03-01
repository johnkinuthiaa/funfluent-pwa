import "./styles/modal.css"
type ModalMessage ={
    message:string
}
const Modal =({message}:ModalMessage)=>{
    return(
        <template className={"modal"}>
            {message}
        </template>
    )
}
export default Modal