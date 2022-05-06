import React, { useEffect, useState } from "react";
import CartService from "../services/cartService";
import { Button, Card, Image } from "semantic-ui-react";

export default function CartDetails() {
  const [carts, setCart] = useState([]);

  useEffect(() => {
    let cartService = new CartService();
    cartService.getCart().then((result) => setCart(result.data));
  }, []);

  return (
    <Card.Group>
      {carts.map((cart) => (
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src={cart.productImageUrl}
            />
            <Card.Header>{cart.productName}</Card.Header>
            <Card.Meta>{cart.productBrand}</Card.Meta>
            <Card.Description>
              {cart.productDetails} <strong>{cart.productPrice}</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Satin Al
              </Button>
              <Button basic color="red">
                Sil
              </Button>
            </div>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
}
