import React from 'react'
import { Card, CardBody, CardTitle, CardText, Col, Row } from "reactstrap";
import { NavLink } from 'react-router-dom';

const Products = () => {

    const products = [
        {
            title: "Product 1",
            price: "10000",
        },
        {
            title: "Product 2",
            price: "15000",
        },
        {
            title: "Product 3",
            price: "20000",
        },
        {
            title: "Product 4",
            price: "30000",
        },
        {
            title: "Product 5",
            price: "40000",
        },
        
    ]


  return (
    <div>
        <Row>
            {products.map((product, index) => {
                return (
                    <Col sm={6} md={4} lg={3} key={index} className='mb-4'>
                        <NavLink to={'/detail'}>
                            <Card
                                body
                                color="light"
                                style={{
                                width: '18rem'
                            }}>
                                <img
                                alt="Sample"
                                src="https://picsum.photos/300/200"
                                />
                                <CardBody className='text-center'>
                                <CardTitle tag="h5">
                                    {product.title}
                                </CardTitle>
                                <CardText>
                                    {product.price}
                                </CardText>
                                </CardBody>
                            </Card>
                        </NavLink>
                    </Col>
                )
            })}
        </Row>
    </div>
    )
}

export default Products
