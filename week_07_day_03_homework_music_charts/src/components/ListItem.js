import React from 'react';

const ListItem = ({song}) => {
  return (
    <>
    <p>{song['im:name'].label} - {song['im:artist'].label} </p>
    </>

  )

}

export default ListItem;