import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import EventDashboard from '../../features/event/EventDashboard/EventDashboard'
import NavBar from '../../features/nav/NavBar/NavBar'

// import {Button} from 'semantic-ui-react'

export default class App extends Component {
	render() {
		return (
			<React.Fragment>
				<NavBar />
				<Container className="main">
					<EventDashboard/>
				</Container>
				
			</React.Fragment>
		)
	}
}
