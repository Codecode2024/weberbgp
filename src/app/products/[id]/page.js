"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

const ProductDetail = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        const res = await fetch("/api/allproducts.json");
        const data = await res.json();
        const foundProduct = data.find((item) => item.id.toString() === id);
        setProduct(foundProduct);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p className="text-center m-5">Loading ...</p>;

  return (
    <Card>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="p-3 pb-md-4 m-auto text-center">
            <h1 className="display-6 fw-normal text-body-emphasis pt-4">
              產品詳情
            </h1>
            <div className="card mt-5 mb-5 m-auto" style={{ maxWidth: 940 }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <Image
                    className="img-fluid object-fit-xxl-contain w-100 h-auto rounded"
                    variant="top"
                    src={product.image}
                    width={160}
                    height={60}
                    alt={product.name}
                    priority="{true}"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body text-start">
                    <h5 className="card-title text-center py-4">
                      {product.name}
                    </h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">
                      <strong className="text-danger">H${product.price}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductDetail;
