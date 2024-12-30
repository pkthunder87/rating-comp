function Thanks() {
  return (
    <div className="thanks container">
      <img
        className="thanks__img"
        src="./assets/images/illustration-thank-you.svg"
        alt="gold star"
      />

      <p className="thanks__choice icon-circle">You selected 4 out of 5</p>

      <h1 className="thanks__title">Thank you!</h1>
      <p className="thanks__text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default Thanks;
