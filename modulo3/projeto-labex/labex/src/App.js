import Home from "./pages/HomePage/HomePage"
import { useState } from "react"
import AdminHomePage from "./pages/AdminHomePage/AdminHomePage";
import ListTripsPage from "./pages/ListTripsPage/ListTripsPage";
function App() {
  const [trocaTela, setTrocaTela] = useState("viagem")

  const mudandoTela = ()=>{
      switch (trocaTela) {
          case "home":
              return <Home/>
          case "viagem":
              return <ListTripsPage 
              telaViagens={telaViagens}
              telaAdm={telaAdm}
              />
          case "adm":
              return <AdminHomePage/>
              
          default:
              return (
                  <h1>Erro 404</h1>
              )
      }
  }

  const telaViagens = () =>{
      setTrocaTela("viagem")
      console.log("Alô viagem")
  }
  const telaAdm = () =>{
      setTrocaTela("adm")
      console.log("Alô adm")
  }

  return (
    <div className="App">
      <h1>Alo labex</h1>
      {mudandoTela()}
      <Home/>
    </div>
  );
}

export default App;
