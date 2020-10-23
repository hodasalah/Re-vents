import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Button} from 'semantic-ui-react'
import {incrementCounter ,decrementCounter} from './testActions'
const mapStateToProps = (state)=>{
	return {
		data:state.test.data
	}
}
const mapDispatchToProps ={
	incrementCounter , decrementCounter
}
class TestComponent extends Component {
	render() {
		return (
			<div>
				<h1>Test Component</h1>
				<h3>our State is {this.props.data}</h3>
				<Button onClick={this.props.incrementCounter}
				content="Increment" positive/>
				<Button onClick={this.props.decrementCounter}
				content="Decrement" negative/>
			</div>
		)
	}
}
export default connect(mapStateToProps , mapDispatchToProps)(TestComponent);
