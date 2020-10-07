import React, { Component } from 'react'
import EventListItem from './EventListItem'

class EventList extends Component {
	render() {
		return (
			<>
				{this.props.events.map(ev=>(
					<EventListItem key={ev.id} event={ev} selected={this.props.selectEvent}
					deleted={this.props.DeleteEvent}/>
				))}
			</>
		)
	}
}

export default EventList
