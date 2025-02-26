import Stats from "../components/Stats.tsx";
import "./styles/homepage.css"

const HomePage =()=>{
    const username ="Riko"
    return(
        <div className={"homepage"}>
            <div className={"top__container"}>
                <Stats/>
                <img alt={"homepage image"} src={"/src/assets/LoginImage.jpg"} className={"homepage__image"}/>
                <h1>Welcome back, <span className={"username__span"}>{username}</span></h1>
            </div>
            <div>
            </div>
            <div>
                <h2>Books category</h2>
            </div>
        </div>
    )
}
export default HomePage