import { useState } from "react";
import "./show-details.css";

const tabBtns = [
  {
    id: 1,
    content: "Cast",
  },
  {
    id: 2,
    content: "Info",
  },
  {
    id: 3,
    content: "Trailer",
  },
  {
    id: 4,
    content: "Episodes",
  },
  ,
];

const ShowDetails = () => {
  const [activeTab, setActiveTab] = useState("cast");
  return (
    <section className="show-details__section">
      <figure className="show-details">
        <img
          className="show-details__img"
          src="https://static.tvmaze.com/uploads/images/original_untouched/413/1034988.jpg"
          alt=""
        />
        <figcaption>
          <h2 className="show-details__title">All rise movie title show foo</h2>
          <div>
            <p>
              <b>All Rise</b> is a courthouse drama that follows the chaotic,
              hopeful and sometimes absurd lives of its judges, prosecutors and
              public defenders, as they work with bailiffs, clerks and cops to
              get justice for the people of Los Angeles amidst a flawed legal
              process. Among them is newly appointed Judge Lola Carmichael, a
              highly regarded and impressive deputy district attorney who
              doesn't intend to sit back on the bench in her new role, but
              instead leans in, immediately pushing the boundaries and
              challenging the expectations of what a judge can be.
            </p>

            <div className="show-details__lang">
              <div>English</div>
              <div>|</div>
              <div>Drama</div>
              <div>|</div>
              <div>Scripted</div>
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
                <span>4.5</span>
              </div>
            </div>

            <div className="show-details_premiere">
              <div>
                Premiered - <div>2023-11-18</div>
              </div>
              <div>|</div>
              <div>
                Ended - <div>2023-11-18</div>
              </div>
            </div>

            <div className="cast">
              <div>Cast:</div>
              <div>Johnny |</div>
              <div>Johnny</div>
              <div>Johnny</div>
            </div>

            <div className="runtime">Runtime: 1hrs</div>
            <div className="country">Country: America</div>
            <div className="language">language: English</div>

            <button>Book Ticket</button>
          </div>
        </figcaption>
      </figure>
    </section>
  );
};

export default ShowDetails;
