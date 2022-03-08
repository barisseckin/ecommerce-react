import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  function handleSignOut() {
    setIsAuthenticated(false);
  }

  function handleSignUp() {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Menu inverted fixed size="small">
        <Container>
          <Link to="">
            <Menu.Item name="Anasayfa" />
          </Link>

          <Link to="/campaigns">
            <Menu.Item name="Kampanyalar" />
          </Link>

          <Menu.Menu position="right">
            <CartSummary />

            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} value="1" />
            ) : (
              <SignedOut signUp={handleSignUp} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
