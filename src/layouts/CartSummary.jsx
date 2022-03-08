import React from 'react'
import { Button, Dropdown, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../App.css'
import { useSelector } from 'react-redux'
import { Image } from 'semantic-ui-react'

export default function CartSummary() {

const {cartItems} = useSelector(state => state.cart)

  return (
    <div>
       <Dropdown item text='Sepet'>
            <Dropdown.Menu>
              {
                cartItems.map((cartItem) => (
                  <Dropdown.Item key={cartItem.product}>
                    <Label>
                      {cartItem.product.productName}
                    </Label>
                    <Image src={cartItem.product.productImageUrl}></Image>
                  </Dropdown.Item>
                ))
              }
              
              <Link to="/cartDetail"><Button color='blue'>Sepete Git</Button></Link>
            </Dropdown.Menu>
          </Dropdown>
    </div>
  )
}
