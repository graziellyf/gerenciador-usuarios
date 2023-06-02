function Listagem( props ){

function Remover(usuarios){
  const novos_usuarios = props.usuarios.filter(item =>item.nome != usuarios.nome)
  props.alteraUsuarios(novos_usuarios) 
}

    return(
        <div className="caixa">
          <h2> Listagem </h2>

          {
            props.usuarios.map( item => 
            <div style={{border: "1px solid #CCC"}} >
                <p> Nome: {item.nome} </p> 
                <p> Email: {item.email}</p>
                <p> Status: {item.status == true ? "Ativo" : "Banido"} </p>
                <button onClick={ ()=> Remover(item)} className="btn btn-primary btn-sm"> Remover </button>
               </div>

            )
          }

        </div>
        
    )
}

export default Listagem;