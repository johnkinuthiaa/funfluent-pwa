import {FcGoogle} from "react-icons/fc";
import {signInWithPopup} from "firebase/auth";
import {auth,provider} from "../../firebase.ts"
import {useNavigate} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";

const Register =()=>{
    const navigate =useNavigate()
    const user =useAuthState(auth)
    const registerWithGoogle =(async ()=>{
        const response =await signInWithPopup(auth,provider)
        if(response){
            navigate("/")
            console.log(user)
        }
    })


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
                <form className={"login__form"}>
                    <input type={"text"} placeholder={"Enter your username..."}/>
                    <input type={"email"} placeholder={"Enter your email..."}/>
                    <input type={"password"} placeholder={"Enter your password..."}/>
                    <input type={"password"} placeholder={"Confirm your password..."}/>
                    <button className={"login__button"}>Register</button>
                </form>
            </div>
        </div>
    )
}
export default Register