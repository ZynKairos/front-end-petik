import React from 'react'
import CourseCard from '../component/CourseCards'
import NavbarComponent from '../component/Navbar'
import Footer from '../component/Footer'

const Courses = () => {
  return (
    <div>
      <NavbarComponent />
      <h1>Courses</h1>
      <CourseCard />
      <Footer />
    </div>
  )
}

export default Courses
