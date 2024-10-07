"use client";
import { useEffect, useState } from "react";
import Products from "../components/Products";
const CategoryPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/allproducts.json");
        if (!res.ok) throw new Error("Network response was not okay");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-6 fw-normal text-body-emphasis">新品上架</h1>
            <p className="text-danger pt-2">產品眾多，不能盡錄</p>
            <Products products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPage;
