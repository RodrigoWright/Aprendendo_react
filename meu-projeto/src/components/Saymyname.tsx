import * as React from 'react';

interface Props{
    name: string;
}

function Saymyname(props: Props) {
    return (  
        <div>
            <h2>Olá {props.name}!</h2>
        </div>
    );
}

export default Saymyname;