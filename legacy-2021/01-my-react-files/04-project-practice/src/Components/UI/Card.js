import styles from './Card.module.css';

const Card = props => {
    return <div className={`${styles.card} ${props.myClassName}`}> {props.children}</div >;
};

export default Card;