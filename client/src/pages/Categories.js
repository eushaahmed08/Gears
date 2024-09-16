import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
import "../styles/Categories.css";

const Categories = () => {
  const categories = useCategory();

  return (
    <Layout title={"All Categories"}>
      <div className="categories-container">
        <h1 className="categories-title">Browse Categories</h1>
        <div className="categories-grid">
          {categories.map((c) => (
            <div
              className="category-card"
              key={c._id}
              style={{
                // Remove the backgroundImage styling since we're not using images
                backgroundColor: "#f0f0f0", // Optional: You can use a solid color or any other placeholder styling
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
              }}
            >
              <Link to={`/category/${c.slug}`}>
                <div className="category-card-content">
                  <h2>{c.name}</h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
