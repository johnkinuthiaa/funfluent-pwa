import './App.css'
import GetStarted from "./app/pages/GetStarted.tsx";
import {Routes,Route} from "react-router-dom"
import LoginPage from "./app/pages/LoginPage.tsx"
import Register from "./app/pages/Register.tsx"
import HomePage from "./app/pages/HomePage.tsx"
import SearchPage from "./app/pages/SearchPage.tsx";
import MyBooks from "./app/pages/MyBooks.tsx"
import ProfilePage from "./app/pages/ProfilePage.tsx";
import SelectCountry from "./app/pages/SelectCountry.tsx";
import Faq from "./app/pages/Faq.tsx";
import HelpCenter from "./app/pages/HelpCenter.tsx";
import PersonalInformation from "./app/pages/PersonalInformation.tsx";
import ReadBook from "./app/pages/ReadBook.tsx";
function App() {
  return (
      <>
          <Routes>
              <Route path={"/login"} element={<LoginPage/>}/>
              <Route path={"/register"} element={<Register/>}/>
              <Route path={"/"} element={<GetStarted/>}/>
              <Route path={"/home"} element={<HomePage/>}/>
              <Route path={"/search"} element={<SearchPage/>}/>
              <Route path={"/profile"} element={<ProfilePage/>}/>
              <Route path={"/saved-books"} element={<MyBooks/>}/>
              <Route path={"/faq"} element={<Faq/>}/>
              <Route path={"/help"} element={<HelpCenter/>}/>
              <Route path={"/read/:id"} element={<ReadBook/>}/>
              <Route path={"/personalInformation"} element={<PersonalInformation/>}/>
              <Route path={"/select-country/:userId"} element={<SelectCountry/>}/>
          </Routes>
      </>

  )
}

export default App
