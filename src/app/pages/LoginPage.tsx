import "./styles/Login.css"
import { FcGoogle } from "react-icons/fc";
const LoginPage =()=>{
    return (
        <div className={"login__container"}>
            <div className={"form__holder"}>
                <h1>Welcome Back!</h1>
                <button className={"google__login"}><FcGoogle/>Log in with Google</button>
                <div className={"alternative"}>
                    <div></div>
                    <p>or</p>
                    <div></div>
                </div>
                <form className={"login__form"}>
                    <input type={"text"} placeholder={"Enter your username..."}/>
                    <input type={"email"} placeholder={"Enter your email..."}/>
                    <input type={"password"} placeholder={"Enter your password..."}/>
                    <button className={"login__button"}>Login</button>
                </form>
            </div>
        </div>
    )
}
export default LoginPage