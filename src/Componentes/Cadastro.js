import React from "react";

function Cadastro({usuarios, alteraUsuarios}){

const [ nome, alteraNome ] = React.useState("");
const [ ativo, alteraAtivo] = React.useState(true);
const [ email, alteraemail] = React.useState();

function salvar(e){
  e.preventDefault()

  const usuario = {
      nome: nome,
      ativo: ativo,
      email: email
  }

  //o  operador ... se chama spread ou "despejar"
  alteraUsuarios( [ ...usuarios, usuario ] )
  //usuarios.push(usuario)

}

return(
<div className="caixa">
    <h2> Cadastro </h2>

     <form onSubmit={(e)=>salvar(e)} >
     <div class="mb-3" >
        
        <label for="txtNome" class="form-label">Nome</label> 
        <input onChange={ e => alteraNome(e.target.value) } class="form-control" id="txtNome" aria-describedby="emailHelp"/>
    
    </div>
        
    <div class="form-floating mb-3">
        <input onChange={ e => alteraemail(e.target.value) } type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
        <label for="floatingInput">Email address</label>
    </div>

     <div class="mb-3 form-check">
        <input checked={ativo} onChange={e=> alteraAtivo(e.target.checked)} type="checkbox" class="form-check-input" id="cboxStatus"/>
         <label class="form-check-label" for="cboxStatus">Ativo</label>
    </div>
        <button type="submit" class="btn btn-primary">Salvar</button>
    </form>

    </div>
        
);
}
export default Cadastro;        