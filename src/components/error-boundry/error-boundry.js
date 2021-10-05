import React, {Component} from 'react';
import Error from '../error';

export default class ErrorBoundry extends Component {

    state = {
        isError: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({isError: true});
    }

    render() {
        if (this.state.isError) {
            return(<Error/>);
        }

        return this.props.children;
    }
}
