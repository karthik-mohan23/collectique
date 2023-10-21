import { Link } from "react-router-dom";
import { BannerCarousel } from "../components";

const Home = () => {
  return (
    <section>
      <div className="w-[90%] max-w-5xl mx-auto">
        <div className="py-20 flex flex-wrap lg:flex-nowrap">
          <div>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
              <span className="text-secondary-focus">Preserving</span> the Past,
              Sharing the{" "}
              <span className="text-secondary-focus">Tradition</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8">
              Rediscover Timeless Elegance: Shop Our Collection of Vintage and
              Traditional Treasures.
            </p>
            <div className="mt-5">
              <Link to="#" className="btn btn-secondary">
                Shop Now
              </Link>
            </div>
          </div>
          {/* Carousal */}
          <BannerCarousel />
        </div>
      </div>
    </section>
  );
};
export default Home;
