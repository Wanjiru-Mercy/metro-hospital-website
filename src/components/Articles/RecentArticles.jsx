import React from "react";
import { motion } from "framer-motion";
import article1 from "../../assets/article1.jpg";
import article2 from "../../assets/article2.jpg";
import article3 from "../../assets/article3.jpg";


const articles = [
  {
    id: 1,
    title: "The Future of Healthcare: Trends to Watch",
    description:
      "Explore upcoming trends in healthcare technology and practices shaping patient care.",
    date: "January 10, 2025",
    image: article1,
  },
  {
    id: 2,
    title: "Tips for Healthy Living in 2025",
    description:
      "Practical advice for maintaining a healthy lifestyle amidst busy schedules.",
    date: "December 20, 2024",
    image: article2,
  },
  {
    id: 3,
    title: "Understanding Mental Health: Resources & Support",
    description:
      "Learn about mental health awareness and resources available to you.",
    date: "November 15, 2024",
    image: article3,
  },
];

const RecentArticles = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Recent Articles & News</h2>
          <p className="text-gray-600 text-lg mt-2">
            Stay updated with the latest insights and information.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <motion.div
              key={article.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Article Image */}
              <div className="relative h-56">
                <img
                  src={article.image}
                  alt={article.title}
                  className="object-cover w-full h-full"
                />
                <span className="absolute top-3 right-3 bg-secondary text-white text-sm px-3 py-1 rounded-full">
                  {article.date}
                </span>
              </div>

              {/* Article Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-primary">
                  {article.title}
                </h3>
                <p className="text-gray-600">{article.description}</p>
                <a
                  href="#"
                  className="text-secondary font-medium hover:underline"
                >
                  Read Full Article →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button  className="px-8 py-2 border border-secondary text-secondary font-medium rounded-md hover:bg-secondary hover:text-white duration-300">
            View More Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentArticles;
