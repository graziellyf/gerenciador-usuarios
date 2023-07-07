import"./App.css"
import React from "react";
import Listagem from './Componentes/Listagem'
import Cadastro from "./Componentes/Cadastro";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import supabase from "./supabase";


function App() {

    const [ usuarios,alteraUsuarios ] = React.useState( [] );

    function buscaTodos(){
        supabase.from("usuarios").select()
        .then( response => {
          console.log("Conexão bem sucedida!");
          console.log(response)
          alteraUsuarios(response.data);
        } )
        .catch( response => {
          console.log("Deu erro na conexão")
          console.log(response)
        })
    }

    React.useEffect( ()=> {
      buscaTodos();
    }, [] )

  return (
    <div className="container">

      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
          {/* Same as */}
      <ToastContainer />
      
    <div className="d-flex justify-content-around"> 

        <Listagem usuarios={usuarios} alteraUsuarios={alteraUsuarios} />

        <Cadastro usuarios={usuarios} alteraUsuarios={alteraUsuarios}/>

    </div>

    </div>
  );
}

export default App;
