import React from "react";

const Card = ( {favoritePlace, person, feeling} ) => {
    return (
    <div className="card">
        <h2>Hi, your favorite place to be is: {favoritePlace} </h2>
        <h2>The person you imagine being with is: {person} </h2>
        <h2>Your feeling is: {feeling} </h2>
    </div>
    );
};

export default Card;