import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    // menggunakan useParams untuk menangkap parameter id darai URL
    let { id } = useParams();
    return (
        <div>
            <h1>Detail</h1>
            <p>Parameter id : {id}</p>
        </div>
    );
};

export default Detail;