import BottomNavigation from "../components/BottomNavigation.tsx"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SecurityIcon from '@mui/icons-material/Security';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import InfoIcon from '@mui/icons-material/Info';
import AddIcon from '@mui/icons-material/Add';
import "./styles/profile.css"
import {useNavigate} from "react-router-dom";
const ProfilePage =()=>{
    const navigate =useNavigate()
    return (
        <div className={"profile__page"}>
            <img src={"src/assets/profile.png"} alt={"banner image"} className={"banner__profile"}/>
            <div className={"profile__container"}>
                <div className={"user__information"}>
                    <img alt={"profile photo"} src={"src/assets/profile.png"} className={"profile__photo"}/>
                    <div className={"profile__view"}>
                        <AddIcon/>
                    </div>
                    <h2>Zaara toria</h2>
                    <p>zaara.toria@gmail.com</p>
                </div>
                <div className={"profile__content__container"}>
                    <h2>Account settings</h2>
                    <div className={"profile__content"} onClick={()=>navigate("/personalInformation")}>
                        <div>
                            <AccountCircleIcon/>
                            <h4>Personal Information</h4>
                        </div>
                        <KeyboardArrowRightIcon/>
                    </div>
                    <div className={"profile__content"}>
                        <div>
                            <SecurityIcon/>
                            <h4>Passwords and Security</h4>
                        </div>
                        <KeyboardArrowRightIcon/>
                    </div>
                    <div className={"profile__content"} onClick={()=>navigate("/faq")}>
                        <div>
                            <HelpCenterIcon/>
                            <h4>FAQ</h4>
                        </div>
                        <KeyboardArrowRightIcon/>
                    </div>
                    <div className={"profile__content"} onClick={()=>navigate("/help")}>
                        <div>
                            <InfoIcon/>
                            <h4>Help Center</h4>
                        </div>
                        <KeyboardArrowRightIcon/>
                    </div>
                </div>


            </div>

            <BottomNavigation/>
        </div>
    )
}
export default ProfilePage