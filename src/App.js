import"./App.css"

import Listagem from './Componentes/Listagem'

function App() {

//como funciona objetos em javascript
const usuario = {
  // chave: valor
  nome:"Grazy",
  idade: 18,
  status:true,
  endereco: {
    rua: "Rua X",
    numero: 139,
    complemento: "ap 20"
  },
  vacinasCovid19: ["Pfizer", "Pfizer", "Pfizer", "J&J"]
}

//console.log(usuario)
console.log(usuario.endereco.rua)


 //como usar um array com objetos dentro 
  const usuarios = [
    
     { nome: "Grazy", status: true },
     { nome: "Luana", status: true },
     { nome: "Egmar", status: true },
     { nome: "Gabriel", status: false },
    ]

   console.log(usuarios)



  return (
    <div className="container">
      
    <div className="d-flex justify-content-around"> 

        <Listagem usuarios={usuarios} />

        <div className="caixa">
          <h2> Cadastro </h2>
        </div>

    </div>

    </div>
  );
}

export default App;
