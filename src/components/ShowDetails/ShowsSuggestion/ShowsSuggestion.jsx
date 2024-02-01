import "./shows-suggestion.css";
import ShowsCard from "../../ui/ShowsCard/ShowsCard";

const ShowsSuggestion = ({ shows }) => {
  return (
    <section className="suggestion-shows">
      <div className="suggestion-shows__header">
        <h2>Shows you might be interested in</h2>
        <button>See All</button>
      </div>
      <div className="suggestion-shows-grid">
        {shows.map((show, i) => (
          <ShowsCard key={i} show={show} />
        ))}
      </div>
    </section>
  );
};

export default ShowsSuggestion;
