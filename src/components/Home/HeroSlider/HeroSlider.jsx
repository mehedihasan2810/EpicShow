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
        autoplay-delay="2500"
        autoplay-disable-on-interaction="false"
        slides-per-view="2"
      >
        {shows.map((show, i) => (
          <swiper-slide key={i}>
            <ShowsCard key={i} show={show} />
          </swiper-slide>
        ))}
      </swiper-container>
    </section>
  );
};

export default HeroSlider;
