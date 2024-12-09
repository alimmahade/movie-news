import { useLoaderData } from "react-router-dom";
import MovieCards from "./MovieCards";

const AllMovies = () => {
    const loadedMovie=useLoaderData();
    return (
        <div>
           <div>
            <h1 className="text-4xl font-bold text-center mt-10 mb-10">
                All Latest Movies
            </h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                {
                    loadedMovie.map(movie=><MovieCards key={movie._id} movieDetails={movie} ></MovieCards>)
                }
            </div>
        </div>
        </div>
    );
};

export default AllMovies;