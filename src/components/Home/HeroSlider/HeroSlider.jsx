import ShowsCard from "../../ui/ShowsCard/ShowsCard";
import "./hero-slider.css";

const HeroSlider = ({ shows }) => {
  return (
    <section className="hero-slider">
      <swiper-container
        class="mySwiper"
        pagination="true"
        pagination-clickable="true"
        space-between="10"
        slides-per-view="4"
        autoplay-delay="2500"
        autoplay-disable-on-interaction="false"
      >
        {shows.map((show, i) => (
          // <ShowsCard key={i} show={show} />

          <swiper-slide key={i}>
          <ShowsCard key={i} show={show} />
        </swiper-slide>
        ))}

        {/* <swiper-slide>
          <img
            src="https://static.tvmaze.com/uploads/images/original_untouched/413/1034988.jpg"
            alt="Poster of all rise show"
          ></img>
        </swiper-slide>
        <swiper-slide>
          {" "}
          <img
            src="https://static.tvmaze.com/uploads/images/original_untouched/413/1034988.jpg"
            alt="Poster of all rise show"
          ></img>
        </swiper-slide>
        <swiper-slide>
          {" "}
          <img
            src="https://static.tvmaze.com/uploads/images/original_untouched/413/1034988.jpg"
            alt="Poster of all rise show"
          ></img>
        </swiper-slide>
        <swiper-slide>
          {" "}
          <img
            src="https://static.tvmaze.com/uploads/images/original_untouched/413/1034988.jpg"
            alt="Poster of all rise show"
          ></img>
        </swiper-slide>
        <swiper-slide>
          {" "}
          <img
            src="https://static.tvmaze.com/uploads/images/original_untouched/413/1034988.jpg"
            alt="Poster of all rise show"
          ></img>
        </swiper-slide>
        <swiper-slide>
          {" "}
          <img
            src="https://static.tvmaze.com/uploads/images/original_untouched/413/1034988.jpg"
            alt="Poster of all rise show"
          ></img>
        </swiper-slide> */}
        {/* <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide> */}
      </swiper-container>
    </section>
  );
};

export default HeroSlider;
