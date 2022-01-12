import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import adress from './components/imagem/address.png'
import endereco from './components/imagem/endereco.png'
function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://lh3.googleusercontent.com/-tJCCfjTG7JpIbKFnhtRQugN2XJDa-bI3t8shqXLbZ5sh4QRQ4ERJARO2qkgsvL5KPIxUXJPqZFag8Sn1PeEE_IyC5sHw9e30M_jbFTdENwP9B2Qu3_NNqspT_1G9hwNBhQcrlM9_38zW0RfxXFkvOKjhOu7USFnclzniCgDtfr0zd5WOduXTW0MnJhiQjlz80Yy4P1grGxqKdqC2N4on4xkoT8cqylmqhpWVHFmNKzQDn-TNifu2HSpTbGd2bTm2AFuEnBjsWLSY0kTuEeyJHnpM8hCnS_Sh35X4SD01-MSM6UpeT0chg73h_pfQ-1UFALa0Yg4VOBfP5gL-7ITpsegtkXgSAnfWxsA6Em7OEoevdCJz84jsis0qhicfHJD9YoDDD2DNeIJPtzFD8ZyVO9TBBpyf4GxFTboYl3YrYnWUePOJP3taR52lHgCgFk3C_xlAKd6DdhMIVcrhiuPlxKMh_jbB9nxOnPED78DuiH9mrNHnCLG34qcMeezYTIt-ad9mWULID3oQ9AdedXAiT4F68KxN4RxHOzV41Vi3JNmgKoo6ag-jLEQc4R9H-_sdsd1mQwjC1tLIYyh-ouGK3eIi6Q9ODu8yPXlqEPiQNW3XMAjRw40_AbJ01DChaaGa7mfgmPyFDJKGVBsHa5wQe3sfRK-VS65ZO6gt_9Zy65kTjg4bjL4KHTmOwzis8zpJIs0Bw8pXF72wHGdfEsOiPGhzQ=w426-h568-no?authuser=0" 
          nome="Vitor Duarte" 
          descricao="Oi, eu sou o Vitor Duarte. Sou estudante de web full-stack, pela a Labenu. Sou extremamente fascinado em resolver problemas e busco sempre novos desafios, no que diz respeito a profissional, quanto pessoa e também sou muito proativo. Além disso, tenho uma ótima comunicação interpessoal."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem = {adress}
          texto = "Email: vitorsanta.cal.10@gmail.com"

        />
        <CardPequeno
        imagem = {endereco}
        texto = "Endereço: Rua Etevaldo Martins Ribeiro"
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://lh3.googleusercontent.com/c7PU9wm34zYAKglitSRaBrHLHWQ0x84uMWl2BxHOkWBVjuGLO-RGMFspBK8Fig6StZoXwWgp=w1080-h608-p-no-v0" 
          nome="Jr telecom" 
          descricao="Trabalhei na Jr telecom como assistente administrativo" 
        />
        <h2>Formação Acadêmica</h2>
        
        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Instituto_Federal_do_Piau%C3%AD_-_Marca_Vertical_2015.svg/1200px-Instituto_Federal_do_Piau%C3%AD_-_Marca_Vertical_2015.svg.png" 
          nome="Instituto Federal Do Piuaí" 
          descricao="Cursei técnico em informática integrado ao ensino médio" 
        />
          <CardGrande 
          imagem="https://www.ufpb.br/ufpb/contents/noticias/nota-de-repudio/logo-ufpb.png/@@images/6ab839bc-0d0c-4f09-8325-698542f409fe.png" 
          nome="Universidade Federal Da Paraíba" 
          descricao="Cursando Engenharia Elétrica Pela Universidade Federal Da Paraíba" 
        />

      </div>
    
      

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
