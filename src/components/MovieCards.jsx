import { Link } from "react-router-dom";

const MovieCards = ({ movieDetails }) => {
  const { image, title, duration,_id,year,rating,summary } = movieDetails;
  return (
    <div className="card h-[500px] w-auto border">
      <figure className="rounded-xl">
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Movie Name: {title}</h2>
        <h2 className="">Release Year: {year}</h2>
        <h2 className="">Ratting: {rating}*</h2>
        <p>Duration: {duration} Min</p>
        <div className="card-actions">
          <Link to={`/moviedetails/${_id}`}><button className="btn btn-primary">Show Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCards;

