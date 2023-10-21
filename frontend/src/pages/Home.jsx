import { Link } from "react-router-dom";
import { BannerCarousel } from "../components";

const bgColors = [
  "from-yellow-300 to-yellow-200",
  "from-fuchsia-400 to-fuchsia-300",
  "from-cyan-300 to-cyan-200",
];

const faqData = [
  {
    question: "What are traditional and vintage products?",
    answer:
      "Traditional products reflect cultural heritage, while vintage products are older items with historical and aesthetic value.",
  },
  {
    question: "How can I tell if a product is truly vintage?",
    answer:
      "Look for unique design, wear consistent with age, manufacturer markings, or certificates of authenticity.",
  },
  {
    question: "Why choose traditional and vintage items for home decor?",
    answer: "They add character and history, creating a unique ambiance.",
  },
  {
    question: "Can I find products from different cultures?",
    answer: "Yes, we offer diverse items from various cultures.",
  },
  {
    question: "Are these products one-of-a-kind?",
    answer: "We have unique and limited-quantity items.",
  },
  {
    question: "What to consider when gifting traditional or vintage items?",
    answer: "Consider the recipient's interests and style.",
  },
  {
    question: "How to care for traditional and vintage items?",
    answer:
      "Store away from sunlight and moisture, and follow maintenance guidelines.",
  },
  {
    question: "Can I return or exchange if not satisfied?",
    answer: "Review the product's return policy on each product page.",
  },
  {
    question: "Are appraisals or certificates available for vintage items?",
    answer:
      "Check the product description for included appraisals or certificates.",
  },
  {
    question: "How to incorporate them into home decor?",
    answer:
      "Mix with modern decor for a unique and visually interesting space.",
  },
];

const Home = () => {
  return (
    <section>
      <div className="w-[90%] max-w-5xl mx-auto">
        <div className="py-20 lg:pt-28 lg:pb-40 flex flex-wrap lg:flex-nowrap">
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
              <Link to="/products" className="btn btn-secondary">
                Shop Now
              </Link>
            </div>
          </div>
          {/* Carousal */}
          <BannerCarousel />
        </div>
        {/*  */}
        <div className="pb-20">
          <h4 className="max-w-xl text-4xl font-semibold tracking-tight ">
            Discover more. Good things are waiting for you.
          </h4>
          {/* cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 my-5">
            {bgColors.map((card) => {
              return (
                <div
                  key={card}
                  className={`w-80 py-5 bg-gradient-to-r ${card}  rounded-lg`}>
                  <div className="flex flex-col gap-2 px-10 text-gray-900">
                    <p className="text-xs">Explore new arrivals</p>
                    <p className="text-xl font-bold max-w-[180px]">
                      Shop the latest from top brands.
                    </p>
                  </div>
                  <div className="px-3 py-[1px] bg-gray-200 mx-8 mt-3 rounded-lg inline-block font-medium">
                    <Link
                      to="/products"
                      className=" text-[0.85rem] tracking-wide text-gray-900">
                      Shop Now
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Accordion */}
          <div className="pt-24">
            <h3 className="text-2xl md:text-4xl font-semibold mb-6">
              Frequently Asked Questions
            </h3>
            {faqData.map((accordion) => {
              return (
                <div
                  key={accordion.question}
                  className="collapse collapse-arrow border border-base-300 bg-base-200 mb-4">
                  <input type="checkbox" />
                  <div className="collapse-title text-xl font-medium">
                    {accordion.question}
                  </div>
                  <div className="collapse-content">
                    <p>{accordion.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
