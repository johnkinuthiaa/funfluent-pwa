import {countries} from "../utils/countries.ts"
import "./styles/SelectCountry.css"
import SearchIcon from "@mui/icons-material/Search";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

type Country ={
    name:string,
    flag:string,
    shortName:string

}

const SelectCountry =()=>{
    const URL =window.location.href
    // const userId =URL.match(/[^/]+$/)
    const userId =2
    const ENDPOINT =`/api/v1/users/${userId}/update/country`
    const[language,setLanguage] =useState<string>("")
    const[flag,setFlag] = useState<string>("")
    const[shortName,setShortName] = useState<string>("")
    const[message,setMessage] =useState<string>("")
    const navigate =useNavigate()

    const setInfo =(flag:string,name:string,shortName:string)=>{
        setLanguage(name)
        setFlag(flag)
        setShortName(shortName)
    }
    const updateLanguageInfo =(async ()=>{
        const myHeaders =new Headers()
        myHeaders.append("Content-Type","application/json")
        try{
            const response =await fetch(import.meta.env.VITE_STORYBOOK_BASE_URL+ENDPOINT,{
                method:"PUT",
                body:JSON.stringify({
                    countryDetails:[flag,shortName,language]
                }),
                headers:myHeaders
            })
            if(response.ok){
                const data =await response.json()
                if(data?.statusCode !=200){
                    setMessage(data?.message)
                }else{
                    setMessage(data?.message)
                    navigate("/home")
                }
            }
        }catch (e) {
            throw new Error("Error "+e)

        }

    })
    console.log(message)

    return(
        <div className={"select__country"}>
            <div className={"country__container"}>
                <div>
                    <img alt={"homepage image"} src={"/src/assets/SearchPage.jpg"} className={"searchPage__image"}/>
                    <div className={"search__country__text"}>
                        <h1>Select Language</h1>
                        <p>What language would you want to learn ?</p>
                    </div>
                </div>
                <div className={"search"}>
                    <button className={"search__button"} type={"submit"} ><SearchIcon/></button>
                    <input type={"search"} placeholder={"Search country ..."}/>
                </div>
                {countries.map(({flag,name,shortName}:Country)=>(
                    <div className={"country"} onClick={()=>{
                        setInfo(flag,name,shortName)
                    }}>
                        <p className={"flag"}>{flag}</p>
                        <p>{name}</p>
                    </div>
                ))}
            </div>
            <div className={"bottom__container"}>
                <button className={"continue__button"} onClick={(e)=>{
                    e.preventDefault()
                    updateLanguageInfo()
                }}>Continue</button>
            </div>
        </div>
    )
}
export default SelectCountry