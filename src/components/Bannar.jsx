import { Link } from "react-router-dom";

const Bannar = () => {
  return (
    <div className="carousel w-full h-[600px] mx-auto">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/dWWbCMr/pexels-cottonbro-2773515.jpg"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between items-center">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold uppercase">latest entertainment news here</h1>
                <p className="mb-5">
                  Entertainment News Live Today December 6, 2024: Allu Arjun fans go wild in USA, pour milk on Pushpa 2 posters, throw confetti, chant…
                </p>
                <Link to={"/allmovies"}>
                <button className="btn btn-primary">Latest Movie</button>
                </Link>
              </div>
            </div>
          </div>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/gTZGjtT/pexels-rpnickson-2659629.jpg"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between items-center">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold uppercase">latest entertainment news here</h1>
                <p className="mb-5">
                  Entertainment News Live Today December 6, 2024: Allu Arjun fans go wild in USA, pour milk on Pushpa 2 posters, throw confetti, chant…
                </p>
                <Link to={"/allmovies"}>
                <button className="btn btn-primary">Latest Movie</button>
                </Link>
              </div>
            </div>
          </div>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/f4Gtnz4/pexels-davidgomes-2752777.jpg"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between items-center">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold uppercase">latest entertainment news here</h1>
                <p className="mb-5">
                  Entertainment News Live Today December 6, 2024: Allu Arjun fans go wild in USA, pour milk on Pushpa 2 posters, throw confetti, chant…
                </p>
                <Link to={"/allmovies"}>
                <button className="btn btn-primary">Latest Movie</button>
                </Link>
              </div>
            </div>
          </div>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/d76QCSF/pexels-pixabay-275977.jpg"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between items-center">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold uppercase">latest entertainment news here</h1>
                <p className="mb-5">
                  Entertainment News Live Today December 6, 2024: Allu Arjun fans go wild in USA, pour milk on Pushpa 2 posters, throw confetti, chant…
                </p>
                <Link to={"/allmovies"}>
                <button className="btn btn-primary">Latest Movie</button>
                </Link>
              </div>
            </div>
          </div>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
