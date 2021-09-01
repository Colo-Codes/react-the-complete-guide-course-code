const MyParagraph = props => {
    // As the state of the parent changes, this child component will be re-evaluated
    console.log('(CHILD) MyParagraph re-evaluation');
    // The props are being changed by a changed in the parent's state, so props and context changes boil down to state changes

    return (
        <p>{props.children}</p>
    );
};

export default MyParagraph;