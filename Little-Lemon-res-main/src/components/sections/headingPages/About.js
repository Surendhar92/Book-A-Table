export default function About() {
  return (
    <article className="about-us">
      <section className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="about-subtext">
          In 1995, Adrian and Mario, two Italian brothers, opened Little Lemon.
          They noticed a gap in the Chicago culinary scene and decided to
          introduce the flavors of their hometown in Italy to the city. Nearly
          30 years later, they still run the restaurant with their own hands.
        </p>
      </section>

      <section className="double-image">
        <img
          className="about-1"
          src={require("../../../assets/food/food3.jpeg")}
          alt="Little Lemon restaurant cuisine 1"
        ></img>
        <img
          className="about-2"
          src={require("../../../assets/food/food2.jpeg")}
          alt="Little Lemon restaurant cuisine 2"
        ></img>
      </section>
    </article>
  );
}
