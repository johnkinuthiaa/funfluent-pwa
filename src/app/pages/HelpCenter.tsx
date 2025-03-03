import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const HelpCenter =()=>{
    return (
        <div className={"help__center"}>
            <div className={"faq__header"}>
                <button onClick={()=>{
                    window.history.back()
                }}><ArrowBackIcon/></button>
                <h2>Help Center</h2>
            </div>
            <h3>
                <button>Start a Chat</button>
            </h3>
        </div>
    )
}
export default HelpCenter