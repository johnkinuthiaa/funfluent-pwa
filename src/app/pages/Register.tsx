import {FcGoogle} from "react-icons/fc";
import {signInWithPopup} from "firebase/auth";
import {auth,provider} from "../../firebase.ts"
import {useNavigate} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import {useState} from "react";
import Modal from "../components/Modal.tsx";

const Register =()=>{
    const navigate =useNavigate()
    const[username,setUsername] =useState<string>("")
    const[email,setEmail] =useState<string>("")
    const[password,setPassword] =useState<string>("")
    const[modalColor,setModalColor] =useState<string>("")
    const[message,setMessage] =useState<string>("")
    const[initialPassword,setInitialPassword] =useState<string>("")
    const[finalPassword,setFinalPassword] =useState<string>("")
    const user =useAuthState(auth)
    const [userId,setUserId] =useState<number>(0);


    const registerWithGoogle =(async ()=>{
        const response =await signInWithPopup(auth,provider)
        if(response){
            navigate("/")
            console.log(user)
        }
    })
    const registerNewUser =(async ()=>{
        const myHeaders =new Headers()
        myHeaders.append("Content-Type","application/json")
        try{
            const response =await fetch(import.meta.env.VITE_STORYBOOK_BASE_URL+"/api/v1/users/register",{
                method:"POST",
                body:JSON.stringify({
                    username: username,
                    password: password,
                    email: email
                }),
                headers:myHeaders
            })
            if(response.ok){
                const data =await response.json()
                if(data?.statusCode !=200){
                    setMessage(data?.message)
                    setModalColor("red")
                    setTimeout(()=>{
                        setMessage("")
                        setModalColor("")
                    },3000)
                }else{
                    setMessage(data?.message)
                    setUserId(data?.user?.id)
                    setModalColor("green")
                    setTimeout(()=>{
                        setMessage("")
                        setModalColor("")
                        navigate(`/select-country/${userId}`)
                    },3000)
                }
            }
        }catch (e) {
            throw new Error("error"+e)
        }
    })
    const passwordChecker =()=>{
        if(initialPassword ===finalPassword){
            setPassword(finalPassword)
            registerNewUser()
        }else{
            setMessage("passwords do not match")
            setModalColor("red")
            setTimeout(()=>{
                setMessage("")
                setModalColor("")
            },3000)
        }
    }

    return(
        <div className={"login__container"}>
            <div className={"form__holder"}>
                <h1>Register for an account!</h1>
                <button className={"google__login"} onClick={()=>{
                    registerWithGoogle()
                }}><FcGoogle/>Register with Google</button>
                <div className={"alternative"}>
                    <div></div>
                    <p>or</p>
                    <div></div>
                </div>
                <form className={"login__form"} onSubmit={(e)=>{
                    e.preventDefault()
                    passwordChecker()
                }}>
                    <input type={"text"} placeholder={"Enter your username..."} minLength={4} required={true} onChange={(e)=>{
                        setUsername(e.target.value)
                    }}/>
                    <input type={"email"} placeholder={"Enter your email..."} minLength={8} required={true} onChange={(e)=>{
                        setEmail(e.target.value)
                    }}/>
                    <input type={"password"} placeholder={"Enter your password..."} minLength={6} required={true} onChange={(e)=>{
                        setInitialPassword(e.target.value)
                    }}/>
                    <input type={"password"} placeholder={"Confirm your password..."} minLength={6} required={true} onChange={(e)=>{
                        setFinalPassword(e.target.value)
                    }}/>
                    <button className={"login__button"} type={"submit"}>Register</button>
                </form>
                {message !=""&&<Modal message={message} color={modalColor}/>}
            </div>

        </div>
    )
}
export default Register