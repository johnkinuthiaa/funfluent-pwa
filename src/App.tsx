import './App.css'
import GetStarted from "./app/pages/GetStarted.tsx";
import {Routes,Route} from "react-router-dom"
import LoginPage from "./app/pages/LoginPage.tsx"
import Register from "./app/pages/Register.tsx"
import HomePage from "./app/pages/HomePage.tsx"
import SearchPage from "./app/pages/SearchPage.tsx";
import MyBooks from "./app/pages/MyBooks.tsx"
function App() {
  return (
      <>
          <Routes>
              <Route path={"/login"} element={<LoginPage/>}/>
              <Route path={"/register"} element={<Register/>}/>
              <Route path={"/"} element={<GetStarted/>}/>
              <Route path={"/home"} element={<HomePage/>}/>
              <Route path={"/search"} element={<SearchPage/>}/>
              <Route path={"/saved-books"} element={<MyBooks/>}/>
          </Routes>
      </>

  )
}

export default App
