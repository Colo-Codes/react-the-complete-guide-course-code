import classes from './Checkout.module.css';

const Checkout = props => {
    const confirmHandler = event => {
        event.preventDefault();

    };

    return (
        <form onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor='name'>Your name</label>
                <input type='text' id='name' />
            </div>
            <div className={classes.control}>
                <label htmlFor='street'>Street address</label>
                <input type='text' id='street' />
            </div>
            <div className={classes.control}>
                <label htmlFor='postal'>Postal code</label>
                <input type='text' id='postal' />
            </div>
            <div className={classes.control}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' />
            </div>
            {/* A button of type button will not submit the form */}
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button>Confirm</button>
        </form>
    );
};

export default Checkout;