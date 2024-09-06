import About from "@/components/home/About";
import Category from "@/components/home/Category";
import Courses from "@/components/home/Courses";
import Hero from "@/components/home/Hero";
import Instructor from "@/components/home/Instructor";
import Newsletter from "@/components/home/Newsletter";
import Testimonial from "@/components/home/Testimonial";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section>
        <Category />
      </section>
      <section>
        <Testimonial />
      </section>
      <section>
        <Courses />
      </section>
      <section>
        <WhyChooseUs />
      </section>
      <section className=" max-w-[90%] mx-auto">
        <About />
      </section>
      <section>
        <Instructor />
      </section>
      <section>
        <Newsletter />
      </section>
    </div>
  );
}
