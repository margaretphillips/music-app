import React from 'react';

const artist = ({ id, name, image }) => {
    return (
        <div className="d-flex flex-row justify-content-start align-items-start py-3 px-3">


            <div className="box">
                <h5>{name}</h5>
                <img src={image[0]} />
            </div>



        </div>
    );
}

export default artist;