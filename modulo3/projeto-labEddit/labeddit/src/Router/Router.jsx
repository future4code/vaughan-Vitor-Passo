import { BrowserRouter, Route, Routes } from "react-router-dom"
import FeedPage from "../pages/FeedPage/FeedPage"
import PostDatailPage from "../pages/PostDatailPage/PostDatailPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import Headers from "../components/Headers/Headers"
const Router = () =>{
    return(
        <BrowserRouter>
        <Headers/>
        <Routes>
            <Route  path="/" element={<FeedPage/>} />
            <Route  exact path="/detalhes/:id" element={<PostDatailPage/>} />
            <Route  exact path="login" element={<LoginPage/>} />
            <Route exact path="cadastro" element={<SignUpPage/>} />
        </Routes>
        </BrowserRouter>
    )
}
export default Router