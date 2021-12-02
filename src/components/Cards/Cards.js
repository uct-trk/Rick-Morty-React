import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

const Cards = ({ results, page }) => {
  console.log(results);
  let display;
  if (results) {
    display = results.map((char) => {
      let { name, id, image, location, status } = char;
      return (
        <Link
          to={`${page}${id}`}
          key={id}
          className='col-4 position-relative mb-4 text-decoration-none text-dark'
        >
          <div className={styles.cards}>
            <img src={image} alt='' className={`${styles.imgCustom} img-fluid`} />
            <div className='content p-2'>
              <div className='fs-4 fw-bold mb-4'>{name}</div>
              <div className=''>
                <div className='fs-6'>Last location</div>
                <div className='fs-5'>{location.name}</div>
              </div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div className={`${styles.badge} position-absolute badge bg-danger`}>
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div className={`${styles.badge} position-absolute badge bg-success`}>
                  {status}
                </div>
              );
            } else {
              return (
                <div className={`${styles.badge} position-absolute badge bg-secondary`}>
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = "No Characters Found";
  }

  return <>{display}</>;
};

export default Cards;
