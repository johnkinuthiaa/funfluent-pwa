import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const PersonalInformation =()=>{
    return(
        <div className={"personal__information"}>
            <div className={"faq__header"}>
                <button onClick={()=>{
                    window.history.back()
                }}><ArrowBackIcon/></button>
                <h2>Personal Information</h2>
            </div>
        </div>
    )
}
export default PersonalInformation