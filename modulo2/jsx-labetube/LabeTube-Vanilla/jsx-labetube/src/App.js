
import './App.css';
import vetorHome from './img/home.png'
import emAlta from './img/trending_avatar.png'
import biblioteca from './img/biblioteca.png'
import historico from './img/historico.png'

function App() {
  const titulo = "Titulo do vídeo";
  const reproduzVideo = () =>{
    alert("O vídeo está sendo reproduzido");
  }
  return (

    
   
      <div>
        
        <div className="tela-inteira">
        <header>

            <h1>Lab Tube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca"/>
     </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                   <img className = "vetor-home" src = {vetorHome} /> <li className="botoes-meunu-vertical">Início</li>
                   <img className = "vetor-home" src = {emAlta} /> <li className="botoes-meunu-vertical">Em alta</li>
                   <li className="botoes-meunu-vertical">Inscrições</li>
                    <hr/>
                    <img className = "vetor-home"  src = {biblioteca} /> <li className="botoes-meunu-vertical">Biblioteca</li>
                    <img className = "vetor-home"  src = {historico} /> <li className="botoes-meunu-vertical">Histórico</li>
                </ul>
            </nav>

            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onclick="reproduzVideo()">
                    <img onClick={reproduzVideo} src="https://picsum.photos/400/400?a=1 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media2" onclick="reproduzVideo()">
                    <img onClick={reproduzVideo} src="https://picsum.photos/400/400?a=2 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media3" onclick="reproduzVideo()">
                    <img onClick={reproduzVideo} src="https://picsum.photos/400/400?a=3 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media4" onclick="reproduzVideo()">
                    <img onClick={reproduzVideo} src="https://picsum.photos/400/400?a=4 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media5" onclick="reproduzVideo()">
                    <img onClick={reproduzVideo} src="https://picsum.photos/400/400?a=5 " alt=""></img>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media6" onclick="reproduzVideo()">
                    <img onClick={reproduzVideo} src="https://picsum.photos/400/400?a=6 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media7" onclick="reproduzVideo()">
                    <img onClick={reproduzVideo} src="https://picsum.photos/400/400?a=7 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media8" onclick="reproduzVideo()">
                    <img onClick={reproduzVideo} src="https://picsum.photos/400/400?a=8 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
            </section>
        </main>

        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
    </div>

      </div>
  );
}

export default App;
