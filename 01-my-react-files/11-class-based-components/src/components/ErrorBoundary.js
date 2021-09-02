import { Component } from "react";

class ErrorBoundary extends Component {

    constructor() {
        super();
        this.state = { myHasError: false }
    }

    // Using componentDidCatch() method on a component makes the component an 'Error Boundary'.
    // The componentDidCatch() method will be triggered whenever one of the child components throws an error.
    componentDidCatch(error) {
        console.error('😥 >>', error);
        this.setState({ myHasError: true });
    }

    render() {
        if (this.state.myHasError) {
            return <p>Error: User not found!</p>
        }
        return this.props.children;
    }
}

export default ErrorBoundary