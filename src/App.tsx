import React, { useState } from 'react';
import './App.css';

function App() {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [ratingSelected, setRatingSelected] = useState<Number>(0);
  const ratings = [1, 2, 3, 4, 5];

  if (isSubmitted === false) {
    return (
      <>
      <div className="rating__modal">
        <div className="rating__image">
          <img src="icon-star.svg" alt="star" />
        </div>
        <h2>How did we do?</h2>
      
        <p>
          Please let us know how we did with your support request. All feedback is appreciated 
          to help us improve our offering!
        </p>
      
        <div className="rating__value">
          {ratings.map((rating: number) => (
            ratingSelected === rating
            ? <div key={rating} className="rating__values" id="selected" onClick={() => setRatingSelected(rating)}>{rating}</div>
            : <div key={rating} className="rating__values" onClick={() => setRatingSelected(rating)}>{rating}</div>
          ))}
        </div>
        <button className="rating__button" onClick={() => setIsSubmitted(true)}>
          SUBMIT
        </button>
      </div>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'>Frontend Mentor</a>. 
        Coded by <a href="https://github.com/fermidrates">Farand Albert S</a>.
      </div>
      </>
    )
  } else {
    return (
      <>
      {/* <!-- Thank you state start --> */}
      <div className="rating__confirmation">
        <img src="illustration-thank-you.svg" alt="terimakasih" />
        <div className="rating__chosen">
          You selected {ratingSelected} out of 5
        </div>
      
        <h2>Thank you!</h2>

        <p>
          We appreciate you taking the time to give a rating. If you ever need more support, 
          don’t hesitate to get in touch!
        </p>
      </div>
      
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'>Frontend Mentor</a>. 
        Coded by <a href="https://github.com/fermidrates">Farand Albert S.</a>.
      </div>
      </>
    )
  }
}

export default App;
