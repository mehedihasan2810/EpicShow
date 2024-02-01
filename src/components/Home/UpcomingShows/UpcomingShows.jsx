import ShowsCard from "../../ui/ShowsCard/ShowsCard";
import "./upcoming-shows.css";

const UpcomingShows = () => {
  return (
    <section className="upcoming-shows">
      <div className="upcoming-shows__header">
        <h2>Upcoming Shows</h2>
        <button>See All</button>
      </div>
      <div className="upcoming-shows-grid">
        {Array.from({ length: 10 }).map((_, i) => (
          <ShowsCard key={i} />
        ))}
      </div>
    </section>
  );
};

export default UpcomingShows;
