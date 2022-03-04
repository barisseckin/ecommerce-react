import React, { useState, useEffect } from 'react'
import ProductService from '../services/productService'
import { Button, Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

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
                                src={product.productImageUrl}
                            />
                            <Card.Header><Link to="/productDetail">{product.productName}</Link></Card.Header>
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
