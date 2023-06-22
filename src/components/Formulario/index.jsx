import { useState, useEffect } from "react"

    const Formulario = () => {

        const [peso, setPeso] = useState(0);
        const [altura, setAltura] = useState(0);


    const calcularIMC = () => {
        const IMC = (peso / ((altura * altura) / 10000)).toFixed(2);

        if(IMC >= 40) {
            return (
                <h1>O seu IMC é {IMC} e você está com Obesidade Mórbida</h1>
            )
        }
        else if(IMC >= 35) {
            return (
                <h1>O seu IMC é {IMC} e você está com Obesidade Severa</h1>
            )
        }
        else if(IMC >= 30) {
            return (
                <h1>O seu IMC é {IMC} e você está com Obesidade</h1>
            )
        }
        else if(IMC >= 25) {
            return (
                <h1>O seu IMC é {IMC} e você está Acima do peso</h1>
            )
        }
        else if(IMC >= 18.5) {
            return (
                <h1>O seu IMC é {IMC} e você está com Peso normal</h1>
            )
        }
        else if(IMC >= 17) {
            return (
                <h1>O seu IMC é {IMC} e você está Abaixo do peso</h1>
            )
        }
        else {
            return (
                <h1>O seu IMC é {IMC} e você está Muito abaixo do peso</h1>
            )
        }
    }

    return (
        <div className="container"> 
            <h1>Calculadora de IMC</h1>
            <label htmlFor="peso">Peso</label>
            <input id="peso" type="text" placeholder="Coloque o seu peso em kg" onChange={evento => setPeso(parseFloat(evento.target.value))}></input>
            <br />
            <label htmlFor="altura">Altura</label>
            <input id="altura" type="text" placeholder="Coloque a sua altura em cm" onChange={evento => setAltura(parseFloat(evento.target.value))} ></input>
            {calcularIMC()}
        </div>
    )

}


export default Formulario;