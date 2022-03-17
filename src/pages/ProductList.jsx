import React, { useState, useEffect } from "react";
import ProductService from "../services/productService";
import { Button, Card, Container, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../App.css";
import Categories from "../layouts/Categories";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cartActions";
import { toast } from "react-toastify";
import { Grid } from "semantic-ui-react";

export default function ProductList() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    let productService = new ProductService();
    productService.getProducts().then((result) => setProducts(result.data));
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.productName} sepete eklendi`);
  };

  return (
    <div>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column width={3}>
          <Container className="ui container">
            <Categories />
            </Container>
          </Grid.Column>
          <Grid.Column width={13}>

          <Card.Group itemsPerRow={6}>
            {products.map((product) => (
              <Card>
                <Card.Content>
                  <Image
                    floated="right"
                    size="medium"
                    src={product.productImageUrl}
                  />
                  <Card.Header>
                    <Link to="/productDetail">{product.productName}</Link>
                  </Card.Header>
                  <Card.Meta>{product.productBrand}</Card.Meta>
                  <Card.Description>
                    {product.productDetails}
                    <br />
                    <strong>{product.productPrice + " TL"}</strong>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button
                      basic
                      color="blue"
                      onClick={() => handleAddToCart(product)}
                    >
                      Sepete Ekle
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
