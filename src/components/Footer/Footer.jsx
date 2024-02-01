import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <Link to="/">Live shows</Link>
        <Link to="/">Live News</Link>
        <Link to="/">Live Sports</Link>
        <Link to="/">Streaming Library</Link>
      </div>
      <div>
        <Link to="/">TV shows</Link>
        <Link to="/">Movies</Link>
        <Link to="/">Originals</Link>
        <Link to="/">Networks</Link>
        <Link to="/">Kids</Link>
        <Link to="/">Streaming Library</Link>
        <Link to="/">Live Sports</Link>
      </div>
      <div>
        <Link to="/">Max</Link>
        <Link to="/">Cinemax</Link>
        <Link to="/">STARZ</Link>
        <Link to="/">Disney Premium</Link>
        <Link to="/">Live shows</Link>
      </div>
      <div>
        <Link to="/">Hulu Premium</Link>
        <Link to="/">Premium Subscription</Link>
        <Link to="/">About us</Link>
        <Link to="/">Careers</Link>
        <Link to="/">Terms $ conditions</Link>
      </div>
    </footer>
  );
};

export default Footer;
