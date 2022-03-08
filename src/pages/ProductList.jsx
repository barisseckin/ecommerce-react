import React, { useState, useEffect } from 'react'
import ProductService from '../services/productService'
import { Button, Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../App.css'
import Categories from '../layouts/Categories'
import { useDispatch } from 'react-redux'
import {addToCart} from "../store/actions/cartActions"
import { toast } from 'react-toastify'

export default function ProductList() {

    const dispach = useDispatch()

    const [products, setProducts] = useState([])

    useEffect(() => {
        let productService = new ProductService()
        productService.getProducts().then(result => setProducts(result.data))
    }, [])

    const handleAddToCart = (product) => {
        dispach(addToCart(product))
        toast.success(`${product.productName} sepete eklendi`)
    }

    return (
        <div className='product-card'>
            <Categories />
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
                                <Button basic color='blue' onClick={() => handleAddToCart(product)}>
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
