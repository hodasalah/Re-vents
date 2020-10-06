import React, { Component } from 'react'
import { Image, List } from 'semantic-ui-react'

export class EventListAttendee extends Component {
	render() {
		return (
			<List.Item>
				<Image as="a" size="mini" circular src={this.props.img}/>
			</List.Item>
		)
	}
}

export default EventListAttendee
