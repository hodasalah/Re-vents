import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import EventDashboard from '../../features/event/EventDashboard/EventDashboard'
import NavBar from '../../features/nav/NavBar/NavBar'
import Home from '../../features/Home/Home'
import EventDetailPage from '../../features/event/EventDetail/EventDetailPage'
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard'
import UserDetailedPage from '../../features/user/userDetailed/UserDetailedPage'
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard'
import EventForm from '../../features/event/eventForm/EventForm'


export default class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Route path="/" exact component={Home}/>
				<Route path="/(.+)" render={()=>(
					<React.Fragment>
						<NavBar />
						<Container className="main">

							<Route path="/events" component={EventDashboard}/>
							<Route path="/events/:id" component={EventDetailPage}/>
							<Route path="/people" component={PeopleDashboard}/>
							<Route path="/profile/:id" component={UserDetailedPage}/>
							<Route path="/settings" component={SettingsDashboard}/>
							<Route path="/createEvent" component={EventForm}/>
						</Container>
					
					</React.Fragment>
				)}/>
			</React.Fragment>
			
		)
	}
}
