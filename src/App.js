import"./App.css"
import React from "react";
import Listagem from './Componentes/Listagem'
import Cadastro from "./Componentes/Cadastro";

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
//console.log(usuario.endereco.rua)


 //como usar um array com objetos dentro 
  const usuarios_padrao = [
    
     { nome: "Grazy", email: "Grazielly@gmail.com", status: true },
     { nome: "Luana", email: "Luana@gmail.com", status: true },
     { nome: "Egmar", email: "Egmar@gmail.com", status: true },
     { nome: "Gabriel", email:"Gabriel@gmail.com", status: false },
     
    ]

    const [ usuarios,alteraUsuarios ] = React.useState( usuarios_padrao );

  // console.log(usuarios)



  return (
    <div className="container">
      
    <div className="d-flex justify-content-around"> 

        <Listagem usuarios={usuarios} />

        <Cadastro usuarios={usuarios} alteraUsuarios={alteraUsuarios}/>

    </div>

    </div>
  );
}

export default App;
