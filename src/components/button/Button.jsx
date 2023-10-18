import style from "./button.module.css";
import { StyledButton, StyledButtonColor } from "./styles";



const Button = ({text , number}) => {
 
    // Si en la función viene const Button = (props) => {
    // ponemos return <button>{props.text}</button>;
    // return <button className={style["rojo-suave"]}  >{text}:{number}</button>;
    
    // Para llamar a un estilo. NO es recomendable. Mejor utilizar lo siguiente
    // return <button className={style.red}  >{text}:{number}</button>;

    // Para utilizar un styles.js (es un css para un boton). aqui aplica el styledbutton a secas
    // return <StyledButton >{text}:{number}</StyledButton>;

    // Aqui aplica el StyledButtonColor pasando un color
    return <StyledButtonColor color = 'pink'>{text}:{number}</StyledButtonColor>;

}

export default Button;