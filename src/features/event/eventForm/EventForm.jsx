import React, { Component } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

class EventForm extends Component {
	state={
		title:'',
		date:'',
		city:'',
		hostedBy:'',
		venue:''
	}
	handleFormSubmit=(e)=>{
		e.preventDefault();
		this.props.createEvent(this.state);
	}
	handleInputChange=({target:{name,value}})=>{
		this.setState({
			[name]:value
		});

	}
	render() {
		const{cancelFormOpen}=this.props;
		const{title ,date,city,hostedBy,venue}=this.state;
		return (
			      <Segment>
							<Form onSubmit={this.handleFormSubmit}>
								<Form.Field>
									<label>Event Title</label>
									<input name="title" value={title}  
										onChange={(e)=>this.handleInputChange(e)}placeholder="First Name"/>
								</Form.Field>
								<Form.Field>
									<label>Event Date</label>
									<input type="date" placeholder="Event Date" name="date" value={date}  
										onChange={(e)=>this.handleInputChange(e)}/>
								</Form.Field>
								<Form.Field>
									<label>City</label>
									<input name="city" value={city}  
										onChange={(e)=>this.handleInputChange(e)} 
										placeholder="City event is taking place" />
								</Form.Field>
								<Form.Field>
									<label>Venue</label>
									<input name="venue" value={venue}  
										onChange={(e)=>this.handleInputChange(e)}placeholder="Enter the Venue of the event" />
								</Form.Field>
								<Form.Field>
									<label>Hosted By</label>
									<input name="hostedBy" value={hostedBy}  
										onChange={(e)=>this.handleInputChange(e)} 
										placeholder="Enter the name of person hosting" />
								</Form.Field>
								<Button positive type="submit">
									Submit
								</Button>
								<Button type="button" onClick={cancelFormOpen}>Cancel</Button>
							</Form>
						</Segment>
		)
	}
}

export default EventForm
