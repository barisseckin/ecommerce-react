import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut(props) {
    return (
        <div>
            <Menu.Item>
                <Button onClick={props.signUp} primary>Giris Yap</Button>           
                <Link to= "/register"><Button primary style={{marginLeft: '0.5em'}}>Kayit Ol</Button></Link>
            </Menu.Item>
        </div>
    )
}
