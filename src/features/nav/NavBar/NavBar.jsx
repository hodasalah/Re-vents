import React, { Component } from 'react'
import {Menu , Container , Button} from 'semantic-ui-react'
import {Link, NavLink, withRouter} from 'react-router-dom';
import SignOutMenu from '../Menus/SignOutMenu';
import SignInMenu from '../Menus/SignInMenu';

class NavBar extends Component {
	state={
		authenticated:false
	}
	handleSignIn=()=>{
		this.setState({
			authenticated:true
		})
	}
	handleSignOut=()=>{
		this.setState({
			authenticated:false
		});
		this.props.history.push('/')
	}
	render() {
		const {authenticated} = this.state;
		return (
			<Menu inverted fixed="top">
				<Container>
					<Menu.Item as={NavLink} exact to="/" header>
						<img src="/assets/logo.png" alt="logo" />
						Re-vents
					</Menu.Item>
					<Menu.Item name="Events" as={NavLink} to="/events"/>
					<Menu.Item name="People" as={NavLink} to="/people"/>
					<Menu.Item>
						<Button 
						as={Link} 
						to="/createEvent" 
						floated="right" 
						positive inverted 
						content="Create Event" />
					</Menu.Item>
					{authenticated?	<SignInMenu signOut={this.handleSignOut}/>:<SignOutMenu signIn={this.handleSignIn}/>}
				</Container>
			</Menu>
		)
	}
}

export default withRouter(NavBar);
