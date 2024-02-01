import ShowsCard from "../../ui/ShowsCard/ShowsCard";
import "./latest-shows.css";

const LatestShows = () => {
  return (
    <section className="latest-shows">
      <div className="latest-shows__header">
        <h2>Latest Shows</h2>
        <button>See All</button>
      </div>
      <div className="latest-shows-grid">
        {Array.from({ length: 10 }).map((_, i) => (
          <ShowsCard key={i} />
        ))}
      </div>
    </section>
  );
};

export default LatestShows;
