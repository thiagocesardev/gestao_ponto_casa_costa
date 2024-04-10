import React, {useState} from "react";
import {Title, H3, Records, ButtonRecords} from "./styles";


function Users(){
    const [records, setRecords] = useState ([]);

    const registered = (action)=>{
        const now = new Date();
        const timestamp = now.toLocaleString();
        const newRecord = `${action} - ${timestamp}`;

        setRecords([...records, newRecord]);
        alert (newRecord)

    }

    return (
        <Title>
            <H3>Registro de ponto</H3>
        
        <Records>
            <ButtonRecords onClick={()=> registered ('Entrada') }>Entrada 🕒</ButtonRecords>
            <ButtonRecords onClick={()=> registered ('Início Intervalo')}>Início Intervalo🍴</ButtonRecords>
            <ButtonRecords onClick={()=> registered ('Fim Intervalo')}>Fim Intervalo ☕</ButtonRecords>
            <ButtonRecords onClick={()=> registered ('Saída')}> Saída 🚪</ButtonRecords>
        </Records>
        </Title>
    )
    
}

export default Users