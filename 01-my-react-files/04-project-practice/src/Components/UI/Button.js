import myClasses from './Button.module.css';

const Button = props => {
    return <button className={myClasses.myButton} type={props.type || 'button'} onClick={props.onClick || (() => { })} >{props.children}</button>
};

export default Button;