import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./styles/faq.css"
const Faq =()=>{
    return(
        <div className={"faq__page"}>
            <div className={"faq__header"}>
                <button onClick={()=>{
                    window.history.back()
                }}><ArrowBackIcon/></button>
                <h2>FAQ</h2>
            </div>
            <h3>Frequently Asked Questions (FAQ)</h3>
        </div>
    )
}
export default Faq