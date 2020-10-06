import React, { Component } from 'react'
import EventListItem from './EventListItem'

class EventList extends Component {
	render() {
		return (
			<>
				{this.props.events.map(ev=>(
					<EventListItem key={ev.id} event={ev}/>
				))}
			</>
		)
	}
}

export default EventList
