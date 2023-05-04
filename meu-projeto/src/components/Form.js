function Form(){

    function cadastrarUsuario(e){
        e.preventDefault() /*o 'e' é o evento da submissão mas pode ser qualquer nome e preventDefault para o comportamento padrão do html e processa oq está abaixo dele */
        console.log("Cadastrou o usuário")
    }

    return (
        <div>
            <h1> Meu cadastros:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form