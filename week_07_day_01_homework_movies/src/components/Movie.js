import React from "react";


const Movie = ({name, children}) => {

    return (
        <>
        <h4>{children}</h4>
        <p>{name}</p>
        </>
    )
}

export default Movie;