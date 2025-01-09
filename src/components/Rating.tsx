import { Link } from "react-router";

type RatingProps = {
  userRating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
};

function Rating({ userRating, setRating }: RatingProps) {
  // @ts-expect-errors still works
  const handleClick = (event: MouseEvent<HTMLUListElement>) => {
    const target = event.target as HTMLLIElement;
    setRating(Number(target.innerText));
  };

  return (
    <div className="rating container">
      <div className="icon-circle">
        <img
          className="rating__img"
          src="./assets/images/icon-star.svg"
          alt="gold star"
        />
      </div>

      <h1 className="rating__title">How did we do? </h1>
      <p className="rating__text">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating__score">
        <button onClick={handleClick} className="icon-circle">
          1
        </button>
        <button className="icon-circle" onClick={handleClick}>
          2
        </button>
        <button className="icon-circle" onClick={handleClick}>
          3
        </button>
        <button className="icon-circle" onClick={handleClick}>
          4
        </button>
        <button className="icon-circle" onClick={handleClick}>
          5
        </button>
      </div>
      <Link to={"/thanks"}>
        <button disabled={Boolean(!userRating)} className="rating__cta">
          Submit
        </button>
      </Link>
    </div>
  );
}

export default Rating;
