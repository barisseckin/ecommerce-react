import React from 'react'
import { Button, Dropdown } from 'semantic-ui-react'

export default function CartSummary() {
  return (
    <div>
       <Dropdown item text='Sepet'>
            <Dropdown.Menu>
              <Dropdown.Item></Dropdown.Item>
              <Dropdown.Item></Dropdown.Item>
              <Dropdown.Item></Dropdown.Item>
              <Button color='blue'>Sepete Git</Button>
            </Dropdown.Menu>
          </Dropdown>
    </div>
  )
}
