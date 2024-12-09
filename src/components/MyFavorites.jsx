import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyFavorites = () => {
  const favoriteMovieData = useLoaderData();
  
  const handleRemove=(id)=>{
    Swal.fire({
      title: "Are you sure? Remove Favorite!",
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
        })
      }
    });
      }
  return (<>
  <h1 className="text-5xl font-extrabold text-center mt-10 mb-10 animate__slower animate__animated animate__bounce animate__delay-2s">My Favorites Movie</h1>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {
        favoriteMovieData.map(movie=> <div key={movie._id} className="card h-[500px] w-auto border">
            <figure className="rounded-xl">
              <img src={movie.image} alt="Shoes" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Movie Name: {movie.title}</h2>
              <h2 className="">Release Year: {movie.year}</h2>
              <h2 className="">Ratting: {movie.rating}*</h2>
              <p>Duration: {movie.duration} Min</p>
            </div>           
                <button onClick={()=>handleRemove(movie._id)} className="btn text-center">Remove From Favorite</button>            
          </div>)
      }
    </div>
  </>);
};

export default MyFavorites;
