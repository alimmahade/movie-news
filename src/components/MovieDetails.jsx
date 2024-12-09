import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MovieDetails = () => {
  const navigate=useNavigate();
  const movieData = useLoaderData();
    const handleAddFavorite=(id)=>{
    console.log('favorite',id);
    fetch('https://movie-news-server.vercel.app/moviedetails',{method:'post', headers: {
      'content-type': 'application/json'
  }, body: JSON.stringify(movieData)})
    .then(res=>res.json())
    .then(data=>{
      console.log(data)})
  }
  const handleDelete=(id)=>{
Swal.fire({
  title: "Are you sure? Delete!",
  text: "won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
})
.then((result) => {
  if (result.isConfirmed) {   
    fetch(`https://movie-news-server.vercel.app/moviedetails/${id}`,{method:'delete'})
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.deletedCount>0){
        Swal.fire({
          title: "Deleted!",
          text: "Your Movie has been deleted.",
          icon: "success"
        });
      }
      navigate('/allmovies');
    })
  }
});
  }

  return (
    <div>
      <div>
        <h1 className="text-5xl text-center font-bold">{movieData.title}: Movie Details</h1>
      </div>
      <div className="card shadow-lg">
        <figure className="px-10 pt-10">
          <img src={movieData.image} alt="movie-poster" className="rounded-xl h-[600px] w-auto" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Movie Name:{movieData.title}</h2>
          <p>Duration: {movieData.duration}</p>
          <p>Ratings: {movieData.rating}</p>
          <p>Summary: {movieData.summary}</p>
          {/* image, title, duration,_id,year,rating,summary */}
        </div>
        <div className="flex justify-center gap-4 mb-10">
          <button className="btn" onClick={()=>handleDelete(movieData._id)}>Delete</button>

          <button className="btn" onClick={()=>{
            handleAddFavorite(movieData._id)
          }}>Add to Favorite</button>

        </div>
      </div>
      <div className="flex justify-center items-center mt-10 mb-10">
        <Link to={"/allmovies"}>
          <button className="btn btn-primary">Show All Movies</button>
        </Link>
      </div>
    </div>
  );
};

export default MovieDetails;
