import React from 'react';

const Box = ({id, 
    handleRemove, 
    height = 50, 
    width = 50, 
    backgroundColor = 'grey'}) => {
    
        const remove = () => handleRemove(id);
        return (
            <div>
                <div style ={{
                    height: `${height}px`,
                    width: `${width}px`,
                    backgroundColor
                }} />
                    <button onClick={remove}>X</button>
               
            </div>
        );
}

export default Box;