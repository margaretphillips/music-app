import React from 'react';

const results = ({ id, name, image, popularity }) => {
    return (
        <div className="d-flex flex-row justify-content-start align-items-start py-3 px-3">


            <div className="box">

                <h5>{name}</h5>
                <h5>Popularity: {popularity}</h5>
                <img src={image[0]} alt={name} />
            </div>



        </div>
    );
}

export default results;