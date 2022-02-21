import React, { useState, useEffect } from 'react';
import InterpolList from '../components/InterpolList';
import InterpolDetail from '../components/InterpolDetail';


const InterpolContainer = () => {

    const [interpol, setInterpol] = useState([]);
    const [selectedInterpol, setSelectedInterpol] = useState(null);
    const [showInterpolList, setInterpolList] = useState(true);

    useEffect(() => {
        getInterpol()
    },[])


    const getInterpol = function () {
        fetch('https://ws-public.interpol.int/notices/v1/red')
        .then (result => result.json())
        .then (data => setInterpol(data._embedded.notices))
    }


    const onInterpolSelected = function(interpol) {
        setSelectedInterpol(interpol)
        setInterpolList(false)
    }

    

    return (
    
    <>
    <h3> This is the container List:</h3>

    {/* {interpol ? <InterpolList interpol={interpol} onInterpolSelected={onInterpolSelected}/> : null} */}

    <div>
    {selectedInterpol ? <InterpolDetail selectedInterpol={selectedInterpol}/> : null}
    </div>
    <div>
    {showInterpolList ? <InterpolList interpol={interpol} onInterpolSelected={onInterpolSelected}/> : null}
    </div>

    </>

)}

export default InterpolContainer