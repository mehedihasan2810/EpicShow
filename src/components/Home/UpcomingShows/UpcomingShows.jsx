import ShowsCard from "../../ui/ShowsCard/ShowsCard";
import "./upcoming-shows.css";

const UpcomingShows = ({ shows }) => {
  return (
    <section className="upcoming-shows">
      <div className="upcoming-shows__header">
        <h2>Upcoming Shows</h2>
        <button>See All</button>
      </div>
      <div className="upcoming-shows-grid">
        {shows.map((show, i) => (
          <ShowsCard key={i} show={show} />
        ))}
      </div>
    </section>
  );
};

export default UpcomingShows;
