"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Card from "react-bootstrap/Card";
const Products = ({ products }) => {
  if (!products || !products.length)
    return <p className="text-center m-5">No products available.</p>;
  return (
    <div className="row py-3 py-md-5">
      {products.map((product) => (
        <div className="col-md-4 col-lg-3" key={product.id}>
          <Card style={{ margin: "1rem" }}>
            <Image
              className="card-img img-fluid"
              variant="top"
              src={product.image}
              width={160}
              height={60}
              alt={product.name}
              priority={true}
            />
            <Card.Body>
              <Card.Title className="py-3">{product.name}</Card.Title>
              <Link
                href={`/products/${product.id}`}
                variant="primary"
                className="btn btn-outline-primary"
              >
                了解更多
              </Link>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};
export default Products;
