import {BrowserRouter, Routes, Route} from "react-router-dom"
import ListTripsPage from "./pages/ListTripsPage/ListTripsPage"
import HomePage from "./pages/HomePage/HomePage"
import AdminHomePage from "./pages/AdminHomePage/AdminHomePage"
import ApplicationFormPage from "./pages/ApplicationFormPage/ApplicationFormPage"
import ErroPage from "./pages/ErroPage/ErroPage"

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route  path={"/"} element={<HomePage/>} />
      <Route  path={"viagem"} element={<ListTripsPage/>} />
      <Route  path={"adm"} element={<AdminHomePage/>} />
      <Route  path={"/viagem/Application"} element={<ApplicationFormPage/>}/>
      <Route  path={"*"} element ={<ErroPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
