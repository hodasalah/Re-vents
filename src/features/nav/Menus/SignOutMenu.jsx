import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

const SignOutMenu = (props) => {
	return (
    <Menu.Item position="right">
      <Button basic inverted content="Login" onClick={props.signIn}/>
      <Button
        basic
        inverted
        content="Register"
        style={{ marginLeft: "0.5em" }}
      />
    </Menu.Item>
  );
}

export default SignOutMenu
