import {useState} from "react";
import "./styles/GettingStarted.css"

const GetStarted =()=>{
    const[screenNumber,setScreenNumber] =useState<number>(1)

    return(
        <div className={"get__started__container"}>
            {screenNumber ===1&&(
                <div className={"container__content"}>
                    <img alt={"greetings"}/>
                    <div>
                        <h2>Fun adventures to learn language</h2>
                        <p>Deepen your language skills through reading stories</p>
                    </div>
                </div>
            )}
            {screenNumber ===2&&(
                <div className={"container__content"}>
                    <img alt={"greetings"}/>
                    <div>
                        <h2>Improve your language skills</h2>
                        <p>Be an expert in language and vocabulary</p>
                    </div>
                </div>
            )}
            {screenNumber ===3&&(
                <div className={"container__content"}>
                    <img alt={"greetings"}/>
                    <div>
                        <h2>Enter a world full of stories</h2>
                        <p>Choose your favourite book and start reading!</p>
                    </div>
                </div>
            )}
            <div className={""}>
                <div></div>
                <div></div>
            </div>
            <div className={"button__container"}>
                <button className={"get__started"}>Get Started</button>
                <button className={"have__account"}>I Already Have An Account</button>
            </div>

        </div>
    )
}
export default GetStarted