import ShowsCard from "../../ui/ShowsCard/ShowsCard";
import "./latest-shows.css";

const LatestShows = ({ shows }) => {
  return (
    <section className="latest-shows">
      <div className="latest-shows__header">
        <h2>Latest Shows</h2>
        <button>See All</button>
      </div>
      <div className="latest-shows-grid">
        {shows.map((show, i) => (
          <ShowsCard key={i} show={show} />
        ))}
      </div>
    </section>
  );
};

export default LatestShows;
