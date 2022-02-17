import React, {useState} from 'react'
import { Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  function handleSignOut() {
    setIsAuthenticated(false)
  }

  function handleSignUp() {
    setIsAuthenticated(true)
  }

  return (
    <div>
      <Menu inverted fixed size='small'>
        <Container>
          <Menu.Item 
            name='Anasayfa'
          />
          <Menu.Item
            name='Kampanyalar'
          />
          <Menu.Menu position='right'>
            <CartSummary />

          {isAuthenticated? <SignedIn signOut={handleSignOut} value="1"/>: 
          <SignedOut signUp={handleSignUp}/>}

          </Menu.Menu>
        </Container>

      </Menu>
    </div>
  )
}
