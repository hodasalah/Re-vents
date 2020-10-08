import React from 'react'
import { Button, Container, Header, Icon, Image, Segment } from 'semantic-ui-react'

const Home = ({history}) => {
	return (
		    <Segment inverted textAlign='center' vertical className='masthead'>
				<Container text>
					<Header as='h1' inverted>
						<Image
							size='massive'
							src='/assets/logo.png'
							alt='logo'
							style={{ marginBottom: 12 }}
						/>
						Re-vents
					</Header>
					<Button size='huge' inverted onClick={()=>history.push('/events')}>
						Get started
						<Icon name='right arrow' inverted />
					</Button>
				</Container>
			</Segment>
	)
}

export default Home
