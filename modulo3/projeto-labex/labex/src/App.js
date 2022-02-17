import {BrowserRouter, Routes, Route} from "react-router-dom"
import ListTripsPage from "./pages/ListTripsPage/ListTripsPage"
import HomePage from "./pages/HomePage/HomePage"
import AdminHomePage from "./pages/AdminHomePage/AdminHomePage"
import ApplicationFormPage from "./pages/ApplicationFormPage/ApplicationFormPage"
import ErroPage from "./pages/ErroPage/ErroPage"
import Login from "./pages/Login/Login"
import CreateTripPage from "./pages/CreateTripPage/CreateTripPage"
import TripDetailsPage from "./pages/TripDetailsPage/TripDetailsPage"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route  path={"/"} element={<HomePage/>} />
      <Route  path={"viagem"} element={<ListTripsPage/>} />
      <Route  path={"/adm/viagem/lista"} element={<AdminHomePage/>} />
      <Route  path={"login"} element={<Login/>} />
      <Route  path={"/viagem/Application"} element={<ApplicationFormPage/>}/>
      <Route  exact  path={"/adm/viagem/lista/:id"} element={<TripDetailsPage/>} />
      <Route exact path={"/adm/viagem/criar"} element={<CreateTripPage/>} />
      <Route  path={"*"} element ={<ErroPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
