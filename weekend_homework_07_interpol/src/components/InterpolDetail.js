import React, {useState, useEffect} from "react";


const InterpolDetail = ({ selectedInterpol}) => {

    

    return (

        <div>
            <img src={selectedInterpol._links.thumbnail.href}></img>
            <h2>Forename: {selectedInterpol.forename}</h2>
            <h2>Name: {selectedInterpol.name}</h2>
            <p>Date of Birth: {selectedInterpol.date_of_birth}</p>
            <p>Interpol Entity ID: {selectedInterpol.entity_id}</p>
            <p>Nationalities: {selectedInterpol.nationalities}</p>
        </div>
    )
}

export default InterpolDetail


// How to pull more than 20 items
// How to add additional information from a secondary source
// Why can't get the pulledImage to work anywhere else but the ListItem file