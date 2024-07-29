import MyParagraph from "./MyParagraph";
import React from "react";

const DemoOutput = props => {
    // As the state of the parent changes, this child component will be re-evaluated
    console.log('(CHILD) DemoOutput re-evaluation');
    // The props are being changed by a changed in the parent's state, so props and context changes boil down to state changes

    return (
        <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>
    );
};

// By using React.memo() we tell React to re-evaluate this component only if its props have changed
export default React.memo(DemoOutput);