import React from "react";

const Details = (props) => {
  return (
    <div>
      <div className="image">
        <img src={props.images.lg} alt={props.name} />
      </div>

      <section id="info">
        <article>
          <ul>
            <li className="name">name: {props.name}</li>
            <li className="race">race: {props.appearance.race}</li>
            <li className="height">height: {props.appearance.height}</li>
            <li className="weight">weight: {props.appearance.weight}</li>
            <li className="occupation">occupation: {props.work.occupation}</li>
            <li className="alignment">
              alignment: {props.biography.alignment}
            </li>
          </ul>
        </article>
      </section>

      <section id="appearance">
        <article>
          Appearance:
          <ul>
            <li>gender: </li>
            <li>eyes: </li>
            <li>hair: </li>
          </ul>
        </article>
      </section>
    </div>
  );
};

export default Details;
