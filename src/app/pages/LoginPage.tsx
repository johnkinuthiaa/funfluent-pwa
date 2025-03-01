import "./styles/Login.css"
import { FcGoogle } from "react-icons/fc";
import {signInWithPopup} from "firebase/auth"
import {auth,provider} from "../../firebase.ts"
import {useNavigate} from "react-router-dom";
import Modal from "../components/Modal.tsx";
import {useState} from "react";


const LoginPage =()=>{
    const navigate =useNavigate()

    const [email,setEmail] =useState<string>("")
    const [password,setPassword] =useState<string>("")
    const[message,setMessage] =useState<string>("")
    const[modalColor,setModalColor] =useState<string>("green")
    const logInWithGoogle =(async ()=>{
        const response = await signInWithPopup(auth, provider)
        if(response){
            navigate("/home")
        }

    })
    const loginWithUsernameAndPassword =(async ()=>{
        const myHeaders =new Headers()
        myHeaders.append("Content-Type","application/json")
        try{
            const response =await fetch(import.meta.env.VITE_STORYBOOK_BASE_URL+"/api/v1/users/login",{
                method:"POST",
                body:JSON.stringify({
                    password: password,
                    email: email,
                }),
                headers:myHeaders
            })
            if(response.ok){
                const data =await response.json()
                if(data?.statusCode !==200){
                    setMessage(data?.message)
                    setModalColor("red")
                    setTimeout(()=>{
                        setMessage("")
                        setModalColor("")
                    },3000)
                }else{
                    setMessage(data?.message)
                    setModalColor("green")
                    setTimeout(()=>{
                        setMessage("")
                        setModalColor("")
                    },3000)
                    navigate("/home")
                }
            }
        }catch (error) {
            setMessage("Error logging you in because"+error)

            setModalColor("red")
            setTimeout(()=>{
                setMessage("")
                setModalColor("")
            },3000)
        }
    })
    return (
        <div className={"login__container"}>
            <div className={"form__holder"}>
                <h1>Welcome Back!</h1>
                <button className={"google__login"}
                        onClick={(e)=>{
                            e.preventDefault()
                            logInWithGoogle()
                        }}
                ><FcGoogle/>Log in with Google</button>
                <div className={"alternative"}>
                    <div></div>
                    <p>or</p>
                    <div></div>
                </div>
                <form className={"login__form"} onSubmit={(e)=>{
                    e.preventDefault()
                    loginWithUsernameAndPassword()
                }}>
                    <input type={"email"} placeholder={"Enter your email..."} minLength={4} required={true} onChange={(e)=>{
                        setEmail(e.target.value)
                    }}/>
                    <input type={"password"} placeholder={"Enter your password..."} minLength={6} required={true} onChange={(e)=>{
                        setPassword(e.target.value)
                    }}/>
                    <button className={"login__button"} type={"submit"}>Login</button>
                </form>
                {message !=""&&<Modal message={message} color={modalColor}/>}
            </div>

        </div>
    )
}
export default LoginPage