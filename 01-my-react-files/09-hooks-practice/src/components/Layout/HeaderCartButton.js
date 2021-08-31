import classes from './HeaderCartButton.module.css';

import CartIcon from '../Cart/CartIcon';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    // NOTE: The context is managed by the closest provider.
    // NOTE: Whenever the context changes, this component will be re-evaluated by React.
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => curNumber + item.amount, 0);

    const btnClasses = `${classes.button} ${btnIsHighlighted && classes.bump}`;

    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        // Remove the class so it can be added on new item addition
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        // Use the cleaner function in case the component is removed (good practice on all side effects)
        return () => {
            clearTimeout(timer);
        };

    }, [cartCtx.items]);

    return (
        <button className={btnClasses} onClick={props.myOnClick}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;