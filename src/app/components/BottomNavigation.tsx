import "./styles/bottomNavigation.css"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import QuizIcon from '@mui/icons-material/Quiz';
const BottomNavigation =()=>{
    return(
        <div className={"bottom__navigation"}>
            <nav>
                <ul>
                    <li>
                        <HomeIcon/>
                        <p>Home</p>
                    </li>
                    <li>
                        <SearchIcon/>
                        <p>Search</p>
                    </li>
                    <li>
                        <LibraryBooksIcon/>
                        <p>My Book</p>
                    </li>
                    <li>
                        <QuizIcon/>
                        <p>Quiz</p>
                    </li>
                    <li>
                        <AccountCircleIcon/>
                        <p>Profile</p>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default BottomNavigation