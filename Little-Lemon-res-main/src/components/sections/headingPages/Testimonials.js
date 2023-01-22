import Carousel from "./TestimonialCarousel";
import TestimonialCard from "./CardInfo/TestimonialCard";
export default function Testimonials() {
  return (
    <section className="testimonials">
      <article className="testimonials-topbar">
        <h1>Testimonials</h1>
      </article>

      <section className="testimonials-cards">
        <TestimonialCard
          name="Ethan Williams"
          description="The Little Lemon Restaurant is my go-to spot for a delicious and affordable meal. The staff are always friendly and the food is consistently great. I highly recommend it!"
        />
        <TestimonialCard
          name="Olivia Thompson"
          description="I had the pleasure of dining at the Little Lemon Restaurant and it exceeded all of my expectations. The atmosphere was cozy and inviting and the food was absolutely delicious. I will definitely be returning soon!"
        />
        <TestimonialCard
          name="Liam Rodriguez"
          description="The Little Lemon Restaurant is a hidden gem in the city. The service is outstanding and the food is always fresh and flavorful. I highly recommend the seafood dishes"
        />
        <TestimonialCard
          name="Ava Garcia"
          description="I had the most wonderful experience at the Little Lemon Restaurant. The service was excellent and the food was absolutely delicious. I can't wait to go back!"
        />
        <TestimonialCard
          name="Noah Martinez"
          description="The Little Lemon Restaurant is a must-visit for anyone looking for a great meal. The staff are friendly and the food is always cooked to perfection. I highly recommend the steak!"
        />
        <TestimonialCard
          name="Isabella Anderson"
          description="I recently dined at the Little Lemon Restaurant and was blown away by the quality of the food and service. The ambiance was also great, I highly recommend it!"
        />
        <TestimonialCard
          name="William Taylor"
          description="The Little Lemon Restaurant has quickly become one of my favorite places to eat. The menu is diverse, the food is always delicious and the staff is friendly. I highly recommend it."
        />
        <TestimonialCard
          name="Sophia Hernandez"
          description="I had the pleasure of dining at the Little Lemon Restaurant and it was a truly memorable experience. The food was delicious and the service was excellent. I highly recommend it."
        />
      </section>

      <section className="testimonials-carousel">
        <Carousel />
      </section>
    </section>
  );
}
