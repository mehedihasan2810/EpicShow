import { Link } from "react-router-dom";
import "./shows-card.css";

const ShowsCard = () => {
  return (
    <Link className="shows-card" to="/">
      <img
        className="shows-card__img"
        src="https://static.tvmaze.com/uploads/images/medium_portrait/413/1034988.jpg"
        alt=""
      />
      <div className="shows-card__content">
        <div>
          <div className="shows-card__title">All rise show whattt</div>
        </div>

        <div className="shows-card__content__bottom">
          <div className="shows-card__year">2020</div>
          <div className="shows-card__rating">
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
            <span>4.5</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ShowsCard;
