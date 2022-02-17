import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced='right' src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                <Dropdown pointing='top left' text='Jack'>
                    <Dropdown.Menu>
                        <Dropdown.Item text= 'Bilgilerim' icon='info' />
                        <Dropdown.Item onClick= {props.signOut} text= 'Cikis Yap' icon='sign-out' />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
