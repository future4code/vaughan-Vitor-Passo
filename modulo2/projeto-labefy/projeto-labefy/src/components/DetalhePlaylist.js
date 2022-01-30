import react from "react";
import WindowPlaylist from "./WindowPlaylist";

class DetalhePlaylist extends react.Component{

    state = {
        

    }

    detalhes = () =>{
        console.log("Cassin rei delas")
    }
    render(){
        return(
            


            <h1>
            {this.detalhes}
            </h1>
        )
    }
}

export default DetalhePlaylist