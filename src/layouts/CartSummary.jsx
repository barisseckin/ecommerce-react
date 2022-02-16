import React from 'react'
import { Dropdown } from 'semantic-ui-react'

export default function CartSummary() {
  return (
    <div>
       <Dropdown item text='Sepet'>
            <Dropdown.Menu>
              <Dropdown.Item></Dropdown.Item>
              <Dropdown.Item></Dropdown.Item>
              <Dropdown.Item></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
    </div>
  )
}
