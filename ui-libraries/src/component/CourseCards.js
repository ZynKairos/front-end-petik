import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardTitle, CardText, Col, Row } from "reactstrap";
import { NavLink } from 'react-router-dom';
import axios, {  } from 'axios';

const CourseCard = () => {

    useEffect(() => {
        getCourses();
    }, []);

    const [courses, setCourses] = useState([]);

    const getCourses = async () => {
        const response = await axios.get("http://api.sukmax.my.id/course");
        setCourses(response.data)
    }
  return (
    <div>
        <Row>
            {courses.map((data, index) => {
                return (
                    <Col sm={6} md={4} lg={3} key={index} className='mb-4'>
                        <NavLink to={`/course/${data.id}`}>
                            <Card
                                body
                                color="light"
                                style={{
                                width: '18rem'
                            }}>
                                <img
                                alt="Sample"
                                src={data.url}
                                />
                                <CardBody className='text-center'>
                                <CardTitle tag="h5">
                                    {data.name}
                                </CardTitle>                             
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

export default CourseCard
