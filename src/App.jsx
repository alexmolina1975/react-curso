/* eslint-disable no-unused-vars */
import Button from './components/button/Button';
import Subtitle from './components/subtitle/Subtitle';
import Title from './components/title/Title';

import Div from './components/capa/Div';
import Parrafo from './components/textos/Parrafo';
import { StyledDiv } from './components/capa/styles';

import { GlobalStyles } from './styles/GlobalStyles';
import DivSup from './components/capa/DivSuperior';
import ButtonEscucha from './components/button/ButtonEscucha';
import { useState } from 'react';

// Arrancar npm run dev

// const App2 = () => {

// 	// Esto devuelve un boton
// 	// return <Button text="PEPITO" number="45"/>;

// 	// Si queremos devolver varios
// 	return (
// 		// <> Se pone etiqueta vacia para que devuelva un padre con dos botones
// 		<>
// 			<Title text="Esto es el H1"></Title>

// 			<Subtitle text="Esto es un H2"></Subtitle>
        
//             <Button text="UNO" number="13" />
// 			<Button text="DOS" number="15" />
//         </>
//     )
// };

const AppPractica1 = () => {

	return (
		
		// <> Se pone etiqueta vacia para que devuelva un padre con dos botones

		
		<>

			{/* Forma de utilizar los estilos globales */}
			<GlobalStyles></GlobalStyles>

			<DivSup left='450' top='80' textT='NUESTRA PRIMERA APP' textP='Esto es muuuu difícil' ></DivSup>

			<Div shadowcolor='#EA5454' left='545' top='312' textT='Team Builder' textP='Hola Alexandra' srcImage='icon-team-builder.svg'></Div>

			<Div shadowcolor='#549EF2' left='925' top='452' textT='Calculator' textP='Hola Alexandra' srcImage='icon-calculator.svg'></Div>

			<Div shadowcolor='#FCAE4A' left='545' top='592' textT='Karma' textP='Hola Alexandra' srcImage='icon-karma.svg'></Div>

			<Div shadowcolor='#44D3D2' left='165' top='452' textT='Supervisor' textP='Hola Alexandra' srcImage='icon-supervisor.svg'></Div>
        </>
    )
};

// Boton con evento
const AppEvento = () => {
	return (
		<>
			<ButtonEscucha></ButtonEscucha>
		</>

	)
}


// Estados
let n = 0;

const AppEvent = () => {

	// Los nombres: number(estado) y set + estado. Estado SIEMPRE const, no let
	const [number, setNumber] = useState(0);

	console.log('render')
	
	return (
		<>
			<h1>{ number }</h1>
			<button onClick={() => increment(number, setNumber)} > CAMBIA H1 </button>
			<br></br>
			<br></br>
			<button onClick={increment2} > +1 </button>
		</>

	)
}

const App = () => {

	// Los nombres: number(estado) y set + estado. Estado SIEMPRE const, no let
	const [number, setNumber] = useState(0);

	console.log('render')
	
	return (
		<>
			<h1>{ number }</h1>
			<button onClick={() => increment(number, setNumber)} > CAMBIA H1 </button>
			<br></br>
			<br></br>
			<button onClick={increment2} > +1 </button>
		</>

	)
}

const increment2 = () => {
	
	n++;
	console.log("CONT " + n)

}


const increment = (number, setNumber) => {
	
	setNumber(number + 1);

}



export default App;
