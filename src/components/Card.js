import React from "react";
import "tachyons";
function Card({ name, email, id }) {
  return (
    <div className="bg-light-green dib br3  pa3 ma2 grow shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
