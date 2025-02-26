import "./styles/bottomNavigation.css"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import QuizIcon from '@mui/icons-material/Quiz';
import {useNavigate} from "react-router-dom"
const BottomNavigation =()=>{
    const navigate =useNavigate()
    return(
        <div className={"bottom__navigation"}>
            <nav>
                <ul>
                    <li onClick={()=>{
                        navigate("/home")
                    }}>
                        <HomeIcon/>
                        <p>Home</p>
                    </li>
                    <li onClick={()=>{
                        navigate("/search")
                    }}>
                        <SearchIcon/>
                        <p>Search</p>
                    </li>
                    <li onClick={()=>{
                        navigate("/home")
                    }}>
                        <LibraryBooksIcon/>
                        <p>My Book</p>
                    </li>
                    <li onClick={()=>{
                        navigate("/home")
                    }}>
                        <QuizIcon/>
                        <p>Quiz</p>
                    </li>
                    <li onClick={()=>{
                        navigate("/home")
                    }}>
                        <AccountCircleIcon/>
                        <p>Profile</p>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default BottomNavigation