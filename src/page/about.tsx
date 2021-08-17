import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="page">
      <Link to="/"> back </Link>
      <div>game of life:</div>
      <hr />
      <div>about me</div>
      <a href="#">github repo account</a>
    </div>
  );
};

export default About;
