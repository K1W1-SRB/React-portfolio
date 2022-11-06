import movieverseblack from "../images/captur.png";
import movieverseblack2 from "../images/capturslider.png";

export default function project3() {
  return (
    <div className="movieverse-container">
      <h1 className="movieverse-title">Captur</h1>
      <p>
        Technologies Used:
        <span className="technologies-highlight">
          {" "}
          NextJS, Javascript, Html, Css
        </span>
      </p>
      <p className="movieverse-description">
        Captur is a PhotoGraphy Portfolio for a made up client this project
        shows my design skills while i was learning a new framework NextJS{" "}
      </p>
      <p className="movieverse-links">
        <a href="https://captur-immk.vercel.app/" target="_blank">
          Live
        </a>{" "}
        <a href="https://github.com/K1W1-SRB/Captur" target="_blank">
          Repo
        </a>
      </p>
      <img className="movieverse-img" src={movieverseblack} />
      <img className="movieverse-img" src={movieverseblack2} />
    </div>
  );
}
