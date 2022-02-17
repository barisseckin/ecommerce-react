import React from 'react'
import { Menu } from 'semantic-ui-react'

export default function Categories() {
    return (
        <div>
            <Menu vertical>
                <Menu.Item 
                    name='Ev'
                />
                <Menu.Item
                    name='Saglik'
                />
                <Menu.Item
                    name='Elektronik'
                />
                <Menu.Item
                    name='Oyun'
                />
                <Menu.Item
                    name='Giyim'
                />
            </Menu>
        </div>
    )
}
