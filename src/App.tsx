import AppLayout from "./components/AppLayout";
import "./sass/main.scss";
import Attribution from "./components/Attribution";

function App() {
  return (
    <div className="wrapper">
      <AppLayout>
        <div className="rating">
          <div className="icon-circle">
            <img
              className="rating__img"
              src="./assets/images/icon-star.svg"
              alt="gold star"
            />
          </div>

          <h1 className="rating__title">How did we do? </h1>
          <p className="rating__text">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="rating__score">
            <div className="icon-circle">1</div>
            <div className="icon-circle">2</div>
            <div className="icon-circle">3</div>
            <div className="icon-circle">4</div>
            <div className="icon-circle">5</div>
          </div>
          <div className="rating__cta">Submit</div>
        </div>
      </AppLayout>
      <Attribution />
    </div>
  );
}

export default App;
