import React from "react";
import "./card.css";

function Card({ data }) {
  const { id, url, breeds } = data[0];
  const isBreeds = breeds.length !== 0;

  return (
    <div className="card">
      <img src={url} key={id} alt={isBreeds ? breeds[0].name : 'Dog'} />
      {isBreeds ? (
        <section className="characteristics">
          <p>
            <i>Raza:</i> {breeds[0].name}
          </p>
          <p>
            <i>Especialidad:</i> {breeds[0].bred_for}
          </p>
          <p>
            <i>Categoría:</i> {breeds[0].breed_group}
          </p>
          <p>
            <i>Espectativa de vida:</i> {breeds[0].life_span}
          </p>
          <p>
            <i>Cualidades:</i> {breeds[0].temperament}
          </p>
        </section>
      ) : (
        <section className="error">
          <p>Uppss, ocurrió un error, inténtalo de nuevo</p>
        </section>
      )}
    </div>
  );
}

export default Card;
