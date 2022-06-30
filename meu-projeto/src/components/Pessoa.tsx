import * as React from 'react';
type Props = {
    idade: number
    prof: string
    nome: string
    foto: string
};
const Pessoa = ({idade, prof, nome, foto}: Props) => {
    return (
        <div>
            <img src={foto} alt={nome}/>
            <p>Idade: {idade}</p>
            <p>Profissão: {prof}</p>
        </div>
    );
};

export default Pessoa;