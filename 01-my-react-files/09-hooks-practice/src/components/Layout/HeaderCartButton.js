import classes from './HeaderCartButton.module.css';

import CartIcon from '../Cart/CartIcon';
import { useContext } from 'react';
import CardContext from '../../store/cart-context';

const HeaderCartButton = props => {
    // NOTE: The context is managed by the closest provider.
    // NOTE: Whenever the context changes, this component will be re-evaluated by React.
    const cartCtx = useContext(CardContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => curNumber + item.amount, 0);

    return (
        <button className={classes.button} onClick={props.myOnClick}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;