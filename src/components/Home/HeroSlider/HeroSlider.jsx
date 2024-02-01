import { useEffect } from "react";
import ShowsCard from "../../ui/ShowsCard/ShowsCard";
import "./hero-slider.css";

const HeroSlider = ({ shows }) => {
  useEffect(() => {
    const swiperEl = document.querySelector("swiper-container");
    Object.assign(swiperEl, {
      slidesPerView: 2,
      spaceBetween: 10,
      pagination: {
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      },
    });
    swiperEl.initialize();
  }, []);

  return (
    <section className="hero-slider">
      <swiper-container
        class="mySwiper"
        pagination="true"
        pagination-clickable="true"
        space-between="10"
        // slides-per-view="3"
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
