import { Link } from "react-router-dom";
export default function Heading() {
  return (
    <header>
      <article className="call-to-action">
        <section className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className="subsection">
            Located on Maldove Street in Chicago, Illinois, we are a
            Mediterranean restaurant operated by a family. We specialize in
            traditional recipes with a contemporary twist.
          </p>
          <br></br>
          <Link className="action-button" to="/reservations">
            Reserve a table
          </Link>
        </section>

        <section className="hero-image">
          <img
            src={require("../../../assets/food/food1.png")}
            alt="Little Lemon restaurant cuisine"
          ></img>
        </section>
      </article>
    </header>
  );
}
