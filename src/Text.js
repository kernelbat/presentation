import React, { Component } from 'react';

class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value2: 0
        }
    }
    componentWillMount() {
        console.log('willMount child')
    }
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps child')
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate child')
        return true
    }
    componentWillUpdate() {
        console.log('componentWillUpdate child')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate child')
    }
    componentDidMount() {
        console.log('did mount child')
    }
    handleClick = () => {
        this.setState({ value2: this.state.value2 })
        // this.props.handleClick()
    }
    render() {
        return (
            <p onClick={this.handleClick}>Heloo2</p>
        );
    }
}

export default Text;