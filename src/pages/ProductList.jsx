import React, { useState, useEffect } from 'react'
import ProductService from '../services/productService'
import { Button, Card, Image } from 'semantic-ui-react'

export default function ProductList() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        let productService = new ProductService()
        productService.getProducts().then(result => setProducts(result.data))
    }, [])

    return (
        <div>
            {
                products.map(product => (
                    <Card>
                        <Card.Content>
                            <Image
                                floated='right'
                                size='medium'
                                src='https://thumbs.dreamstime.com/z/new-product-22853660.jpg'
                            />
                            <Card.Header>{product.productName}</Card.Header>
                            <Card.Meta>{product.productBrand}</Card.Meta>
                            <Card.Description>
                                {product.productDetails}<br />
                                <strong>{product.productPrice}</strong>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button basic color='blue'>
                                    Sepete Ekle
                                </Button>
                            </div>
                        </Card.Content>
                    </Card>
                ))
            }
        </div>
    )
}
