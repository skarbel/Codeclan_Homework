import React from 'react';
import ListItem from './ListItem';

const InterpolList = ({interpol, onInterpolSelected}) => {

    const InterpolItems = interpol.map((interpol, index) => {
        return <ListItem interpol={interpol} key={index} onInterpolClick={onInterpolSelected} />
    })

    return (
        <div>
        <ul>
          {InterpolItems}
        </ul>
      </div>
      )
    }

export default InterpolList;