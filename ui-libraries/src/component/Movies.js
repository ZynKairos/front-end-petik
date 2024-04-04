import React from 'react'
import { Card, CardBody, CardTitle, CardText, Col, Container, Row } from "reactstrap";

const Movies = () => {

    const movies = [
        {
            title: "Movie 1",
            year: "2020",
        },
        {
            title: "Movie 2",
            year: "2021",
        },
        {
            title: "Movie 3",
            year: "2023",
        },
        {
            title: "Movie 4",
            year: "2013",
        },
        {
            title: "Movie 5",
            year: "2026",
        },
        
    ]


  return (
    <div>
        <Container>
            <Row>
                {movies.map((movie) => {
                    return (
                        <Col md={3} className='my-3'>
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
                                    {movie.title}
                                </CardTitle>
                                <CardText>
                                    {movie.year}
                                </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    </div>
    )
}

export default Movies
