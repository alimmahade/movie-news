import { useLoaderData } from "react-router-dom";
import MovieCards from "../components/MovieCards";
import Bannar from "../components/Bannar";
import Marquee from "react-fast-marquee";


const Home = () => {
    const loadedMovie=useLoaderData()
    return (
        <div>
            <Bannar></Bannar>
            <h1 className="text-5xl font-extrabold text-center mt-10 mb-10 animate__slower animate__animated animate__bounce animate__delay-2s">Featured Movies</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
                {
                    loadedMovie.map(movie=><MovieCards key={movie._id} movieDetails={movie} ></MovieCards>)
                }
            </div>
            <div className="mt-10 mb-10">
                <h1 className="mb-10 text-5xl text-center font-extrabold animate__slower animate__animated animate__bounce animate__delay-2s">Our Upcoming Movie News</h1>
                <div className="mb-4">
                <Marquee>
                THE GORGE Official Trailer (2025) Miles Teller and Anya Taylor-Joy, Juliette Binoche raves about working with Ralph Fiennes again nearly 30 years later: ohnotheydidnt.Juliette Binoche raves about working with Ralph Fiennes again nearly 30 years later: ohnotheydidnt
                </Marquee>
                </div>
             
                <Marquee pauseOnHover={true}>                
                {
                    loadedMovie.map(movie=><div key={movie._id}>
                        <img src={movie.image} alt="" className="w-[300px] h-[200px] border-2" />
                    </div>)
                }               
                </Marquee>
            </div>
            <div>
            <div className="lg:w-3/4 mx-auto">
      <div className="text-center p-10 border">
    <h1 className="text-5xl font-bold">Please Give Feedback </h1>
    <p className="py-6">
    Meta introduced its Movie Gen text-to-video-and-sound generator, that uses AI to create video clips of up to 16 seconds at a rate of 16 fps.
    </p>
  </div>
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form className="card-body">
          <input
            type="texa"
            name="feedback"
            placeholder="feedback text"
            required
            className="input input-bordered"
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="your email"
            required
            className="input input-bordered"
          />
       
          <br />
          <input
            type="submit"
            name="give feedback"
            value="Submit"
            className="btn input input-bordered"
          />
          <br />
        </form>
        </div>
      </div>
            </div>
        </div>
    );
};

export default Home;
