function Pessoa({foto, nome, idade, prof}){
    return(
        <div>
            <img src={foto} alt={nome} />
            <p>Idade: {idade}</p>
            <p>Profissão: {prof}</p>
        </div>
    )
}

export default Pessoa