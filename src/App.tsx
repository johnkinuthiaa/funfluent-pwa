import './App.css'
import GetStarted from "./app/pages/GetStarted.tsx";
import {Routes,Route} from "react-router-dom"
import LoginPage from "./app/pages/LoginPage.tsx"
import Register from "./app/pages/Register.tsx"
function App() {
  return (
    <Routes>
        <Route path={"/login"} element={<LoginPage/>}/>
        <Route path={"/register"} element={<Register/>}/>
        <Route path={"/"} element={<GetStarted/>}/>
    </Routes>
  )
}

export default App
