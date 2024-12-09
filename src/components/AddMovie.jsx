import Swal from "sweetalert2";

const AddMovie = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const title = form.title.value;
    const duration = form.duration.value;
    const year = form.year.value;
    const rating = form.rating.value;
    const summary = form.summary.value;
    const movie = { image, title, duration,year,rating,summary };
    console.log(movie);
    fetch(`https://movie-news-server.vercel.app/addmovie`, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(movie),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "movie added successfully!",
            text: "Good job!",
            icon: "success"
          });
          form.reset();
        }
      });
  };

  return (
    <>
      <div className="lg:w-3/4 mx-auto">
      <div className="text-center p-10">
    <h1 className="text-5xl font-bold">Add Movie!</h1>
    <p className="py-6">
    Meta introduced its Movie Gen text-to-video-and-sound generator, that uses AI to create video clips of up to 16 seconds at a rate of 16 fps.
    </p>
  </div>
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          <input
            type="url"
            name="image"
            placeholder="imageUrl"
            required
            className="input input-bordered"
          />
          <br />
          <input
            type="text"
            name="title"
            placeholder="MovieTitle"
            minlength="2"
            required
            className="input input-bordered"
          />
          <br />
          <input
            type="number"
            name="duration"
            placeholder="duration"
            required
            min="61"
            className="input input-bordered"
          />
          <input
            type="number"
            name="year"
            placeholder="Release Year"
            required
            min="1970"
            className="input input-bordered"
          />
          <input
            type="number"
            name="rating"
            placeholder="Give Rate of 5"
            required
            max="5"
            className="input input-bordered"
          />
          <br />
          <input
            type="text"
            name="summary"
            placeholder="write summary at least 10 word"
            required
            minLength="10"
            className="input input-bordered"
          />
          <br />
          <input
            type="submit"
            name="add Movie"
            value="Submit"
            className="btn input input-bordered"
          />
          <br />
        </form>
        </div>
      </div>
    </>
  );
};

export default AddMovie;

// https://i.ibb.co.com/3fgFBjt/pexels-cottonbro-8273643.jpg
// https://i.ibb.co.com/jksp8pd/pexels-tima-miroshnichenko-7991498.jpg
// https://i.ibb.co.com/MMZGYDY/pexels-koolshooters-8102524.jpg
// https://i.ibb.co.com/dWWbCMr/pexels-cottonbro-2773515.jpg
// https://i.ibb.co.com/gTZGjtT/pexels-rpnickson-2659629.jpg
// https://i.ibb.co.com/f4Gtnz4/pexels-davidgomes-2752777.jpg
// https://i.ibb.co.com/d76QCSF/pexels-pixabay-275977.jpg;
