import "./show-details.css";
import BookTicketModal from "../../components/ui/BookTicketModal/BookTicketModal";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import ShowsSuggestion from "../../components/ShowDetails/ShowsSuggestion/ShowsSuggestion";

const ShowDetails = () => {
  const [openModal, setOpenModal] = useState(false);

  let { showId } = useParams();

  const { isLoading, error, data } = useQuery("book-ticket", () =>
    fetch("https://api.tvmaze.com/search/shows?q=all").then((res) => res.json())
  );

  if (isLoading) return <div className="loading-error-content">Loading...</div>;
  if (error)
    return <div className="loading-error-content">Something went wrong!</div>;

  const { show } = data.find((show) => show.show.id === Number(showId));

  return (
    <>
      <section className="show-details__section">
        <figure className="show-details">
          <img
            className="show-details__img"
            src={show.image?.original}
            alt={show.name}
          />
          <figcaption>
            <h2 className="show-details__title">{show.name}</h2>
            <div>
              {show.summary
                .replace("<p>", "")
                .replace("</p>", "")
                .replace("<b>", "")
                .replace("</b>", "")}
            </div>

            <div className="show-details__lang">
              <div>{show.language}</div>
              <div>|</div>
              <div>{show.genres[0]}</div>
              <div>|</div>
              <div>{show.type}</div>
              <div>|</div>
              <div className="show-details__rating">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fbbf24"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#fbbf24"
                  width={16}
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <span>{show.rating.average}</span>
              </div>
            </div>

            <div className="show-details_premiere">
              <div>
                Premiered - <div>{show.premiered}</div>
              </div>
              <div>|</div>
              <div>
                Ended - <div>{show.ended}</div>
              </div>
            </div>

            <div className="cast">
              <div>Cast:</div>
            </div>

            <div className="runtime">Runtime: {show.runtime}</div>
            <div className="country">Country: {show.network.country.name}</div>
            <div className="language">Language: {show.language}</div>

            <Link to={show.officialSite} target="blank" className="v-off-site">
              Visit official site -
            </Link>

            <button
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Book Ticket
            </button>
          </figcaption>
        </figure>
      </section>

      <ShowsSuggestion shows={data} />

      {createPortal(
        <BookTicketModal
          show={show}
          openModal={openModal}
          onCloseModal={(e) => {
            e.preventDefault();
            setOpenModal(false);
          }}
        />,
        document.body
      )}
    </>
  );
};

export default ShowDetails;
