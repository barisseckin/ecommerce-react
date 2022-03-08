import React from 'react'
import { Button, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function CartSummary() {
  return (
    <div>
       <Dropdown item text='Sepet'>
            <Dropdown.Menu>
              <Dropdown.Item></Dropdown.Item>
              <Dropdown.Item></Dropdown.Item>
              <Dropdown.Item></Dropdown.Item>
              <Link to="/cartDetail"><Button color=''>Sepete Git</Button></Link>
            </Dropdown.Menu>
          </Dropdown>
    </div>
  )
}
