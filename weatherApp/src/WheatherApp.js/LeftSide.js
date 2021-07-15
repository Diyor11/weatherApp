import React from 'react';

const LeftSide = (props) => {
    return (
        <>
            <div className="inpSide">
                <input onChange={(e) => props.setQuery(e.target.value)} onKeyPress={props.search}/>
            </div>
        </>
    );
};

export default LeftSide;