import {FcGoogle} from "react-icons/fc";

const Register =()=>{
    return(
        <div className={"login__container"}>
            <div className={"form__holder"}>
                <h1>Register for an account!</h1>
                <button className={"google__login"}><FcGoogle/>Register with Google</button>
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