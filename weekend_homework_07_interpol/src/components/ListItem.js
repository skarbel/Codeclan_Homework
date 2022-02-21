import React from "react";
import './ListItem.css'

const ListItem = ({interpol,onInterpolClick}) => {

    const handleClick = function() {
        onInterpolClick(interpol)
    }


    return (<ul onClick={handleClick}>
    <div class="list">
        <div class="listImage">
            <img src={interpol._links.thumbnail.href}></img>
        </div>
        <div class="listForename">
            {interpol.forename}
        </div>
        <div class="listName">
            {interpol.name}
        </div>
        <div class="listName">
            {interpol.date_of_birth}
        </div>
    </div>
    </ul>

    )
}

export default ListItem

// import React, {useState, useEffect} from "react";

// const ListItem = ({interpol, onInterpolClick}) => {

//     const [pulledImage, setPulledImage] = useState("")

//     const getImage = () => {
//         fetch(interpol._links.images.href)
//         .then(res => res.json())
//         .then(data => setPulledImage(data._embedded.images[0]._links.self.href))
//     }

//     useEffect(() => {
//         getImage()
//     }, [])

//     const handleClick = function() {
//         onInterpolClick(interpol)
//     }


//     return (<ul onClick={handleClick}> 
//     <img src={pulledImage}></img> 

//     Forename: {interpol.forename}
//     <br></br> 
//     Name: {interpol.name}
//     <br></br>
//     Name: {interpol.entity_id}
//     <br></br>
//     </ul>

//     )
// }

// export default ListItem