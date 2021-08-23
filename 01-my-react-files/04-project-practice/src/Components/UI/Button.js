import myClasses from './Button.module.css';

const Button = props => {
    return <button className={myClasses.myButton} type={props.type}>{props.value}</button>
};

export default Button;