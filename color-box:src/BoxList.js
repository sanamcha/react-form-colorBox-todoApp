import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';


const BoxList = () => {
    const [boxes, setBoxes] = useState([]);
    const add = boxObject => {
        setBoxes(boxes => [...boxes, boxObject]);
    };
    const remove = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    };

    const boxComponents = boxes.map(box => (
        <Box 
        key = {box.id}
        id = {box.id}
        height = {box.height}
        width = {box.width}
        handleRemove={remove}
        backgroundColor={box.backgroundColor} />

    ));

    return (
        <div>
            <NewBoxForm createBox ={add} />
            { boxComponents }
        </div>
    );

}

export default BoxList;