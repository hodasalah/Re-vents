import React, { Component } from "react";
import {Segment  , Item ,Icon ,List ,Button} from 'semantic-ui-react';
import EventListAttendee from "./EventListAttendee";

class EventListItem extends Component {
  render() {
		const{event,selected,deleted}=this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header>{event.title}</Item.Header>
                <Item.Description>
                  Hosted by {event.hostedBy}
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {event.date}|
            <Icon name="marker" />{event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
						{this.props.event.attendees && this.props.event.attendees.map(at=>(
							<EventListAttendee key={at.id} img={at.photoURL}/>
						))}
						
						
					</List>
        </Segment>
        <Segment clearing>
					{event.description}
					<Button as="a" color="red" floated="right" content="Delete" onClick={()=>deleted(event.id)}/>
          <Button as="a" color="teal" floated="right" content="View" onClick={()=>selected(event)}/>
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;
