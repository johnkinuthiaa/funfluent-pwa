import Stats from "../components/Stats.tsx";
import "./styles/SearchPage.css"
import SearchIcon from '@mui/icons-material/Search';
import BookCard from "../components/BookCard.tsx";

const SearchPage =()=>{
    return (
        <div className={"search__page"}>
            <div className={"top__container"}>
                <Stats/>
                <img alt={"homepage image"} src={"/src/assets/SearchPage.jpg"} className={"searchPage__image"}/>
                <div className={"discover"}>
                    <h2>Discover</h2>
                    <p>Find your favourite book</p>
                </div>
                <div className={"search"}>
                    <button className={"search__button"} type={"submit"} ><SearchIcon/></button>
                    <input type={"search"} placeholder={"Search by title & more ..."}/>
                </div>
            </div>
            <div className={"popular__books"}>
                <h4>Popular books</h4>
                <div className={"books__container"}>
                    <BookCard image={"https://i.pinimg.com/736x/fe/06/2a/fe062ad4acbaf7948297708e4c82fae4.jpg"} category={"Adventure"} title={"Jack's Adventure in Search of Treasure"} author={"Roald Dahl"}/>
                    <BookCard image={"https://i.pinimg.com/236x/15/2f/30/152f30a1ff6e9d96a751c9fb354d2e98.jpg"} category={"Adventure"} title={"Jack's Adventure in Search of Treasure"} author={"Roald Dahl"}/>
                    <BookCard image={"https://i.pinimg.com/236x/00/5c/00/005c00d69c0eb18b3463a051bca2d53d.jpg"} category={"Adventure"} title={"Jack's Adventure in Search of Treasure"} author={"Roald Dahl"}/>
                    <BookCard image={"https://i.pinimg.com/236x/b9/65/fe/b965fe961390fcb597012d5e49fc6863.jpg"} category={"Adventure"} title={"Jack's Adventure in Search of Treasure"} author={"Roald Dahl"}/>
                    <BookCard image={"https://i.pinimg.com/236x/7b/58/3b/7b583bb3992f25f2cd578cb8dd979513.jpg"} category={"Adventure"} title={"Jack's Adventure in Search of Treasure"} author={"Roald Dahl"}/>
                </div>
            </div>
        </div>
    )
}
export default SearchPage