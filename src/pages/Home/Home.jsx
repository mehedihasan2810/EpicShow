import HeroSlider from "../../components/Home/HeroSlider/HeroSlider";
import LatestShows from "../../components/Home/LatestShows/LatestShows";
import UpcomingShows from "../../components/Home/UpcomingShows/UpcomingShows";
import { useTitlePerPage } from "../../hooks/useTitlePerPage";
import "./home.css";

const Home = () => {
  useTitlePerPage("Home");
  return (
    <div className="home">
      <div className="home__left">
        <HeroSlider />
      <LatestShows />
      <UpcomingShows/>
      </div>

      <div className="home__right">
       <div>
        <div>helloo my name is mehedi hasan</div>
       </div>
      </div>
      
    </div>
  );
};

export default Home;
