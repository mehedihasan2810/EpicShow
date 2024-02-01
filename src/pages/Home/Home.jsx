import { Link } from "react-router-dom";
import HeroSlider from "../../components/Home/HeroSlider/HeroSlider";
import LatestShows from "../../components/Home/LatestShows/LatestShows";
import UpcomingShows from "../../components/Home/UpcomingShows/UpcomingShows";
import { useTitlePerPage } from "../../hooks/useTitlePerPage";
import "./home.css";
import { useQuery } from "react-query";

const Home = () => {
  useTitlePerPage("Home");

  const { isLoading, error, data } = useQuery("book-ticket", () =>
    fetch("https://api.tvmaze.com/search/shows?q=all").then((res) => res.json())
  );

  return (
    <div className="home">
      <div className="home__left">
        {isLoading ? (
          <div style={{ height: "60vh", fontSize: "1.2rem" }}>Loading...</div>
        ) : error ? (
          <div style={{ height: "60vh", fontSize: "1.2rem" }}>
            Something went wrong! Please try again
          </div>
        ) : (
          <>
            <HeroSlider shows={data} />
            <LatestShows shows={data} />
            <UpcomingShows shows={data} />
          </>
        )}
      </div>

      <div className="home__right">
        <div className="latest-updates">
          <div className="latest-updates__header">
            <h2>Latest Updates</h2>
            <button>See All</button>
          </div>
          <ul className="latest-updates__list">
            {isLoading
              ? "Loading..."
              : error
              ? "Something went wrong! Please try again"
              : data.map((show) => (
                  <Link key={show.show.id} to={`/${show.show.id}`}>
                    <li className="latest-updates__item">
                      <img
                        className="latest-updates__img"
                        src={
                          show.show.image?.medium || "/placeholder-image.jpg"
                        }
                        alt={show.show.name}
                      />

                      <div>
                        <div className="latest-updates__title">
                          {show.show.name}
                        </div>
                        <div className="latest-updates__release">
                          {show.show.ended}
                        </div>
                        <div className="latest-updates__rating">
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
                          </svg>{" "}
                          <span>{show.show.rating.average}</span>
                        </div>
                      </div>
                    </li>
                  </Link>
                ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
