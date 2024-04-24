import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';

// const DetailCourse = () => {
//     const [name, setName] = useState("");
//     const [desc, setDesc] = useState("");
//     const {id} = useParams();

//     useEffect(() => {
//         getCoursesById();
//     }, []);

//     const getCoursesById = async () => {
//         const response = await axios.get(`http://api.sukmax.my.id/course/${id}`);
//         setName(response.data.name);
//         setDesc(response.data.desc);
//     };
// }

const DetailCourse = () => {
    let {id} = useParams();

    useEffect(() => {
        getCourses();
    }, []);

    const [courses, setCourses] = useState([]);

    const getCourses = async () => {
        const response = await axios.get(`http://api.sukmax.my.id/course/${id}`);
        setCourses(response.data)
    }
  return (
    <section className='section mt-5'>
      <div className="container">
        <div className="columns">
            <div className="column is-half">
                <figure className='image is4by3'>
                    <img src={courses.url} alt="product" />
                </figure>
            </div>
            <div className="column">
                <div className="content"></div>
                <div className="title is-4">{courses.name}</div>                            
                <p>{courses.desc}</p>
                <p>
                    <strong>Price : </strong> Rp 1.000.000,-
                </p>
                <p>Stock</p>
                <div className="field p-5">
                    <button className='button is-primary is-fullwidth has-text-white mb-3'>Add to Cart</button>
                    <button className='button is-primary is-outlined is-fullwidth'>Buy Now</button>
                </div>      
            </div>
        </div>
      </div>
    </section>
  )
}

export default DetailCourse
