import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const cards = [
  {
    id: 1,
    title: "了解更多",
    description: "炒鍋",
    image: "/images/mainpage/card-class-image-1.jpg",
    link: "/wok",
  },
  {
    id: 2,
    title: "了解更多",
    description: "煎鍋",
    image: "/images/mainpage/card-class-image-2.jpg",
    link: "/fryingpan",
  },
  {
    id: 3,
    title: "了解更多",
    description: "洗碗碟機適用系列",
    image: "/images/mainpage/card-class-image-3.jpg",
    link: "/new",
  },
  {
    id: 4,
    title: "已售罄",
    description: "廚刀",
    image: "/images/mainpage/card-class-image-4.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "已售罄",
    description: "廚房用具",
    image: "/images/mainpage/card-class-image-5.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "已售罄",
    description: "廚房電器",
    image: "/images/mainpage/card-class-image-6.jpg",
    link: "#",
  },
];

const ProductCategories = () => {
  return (
    <div className="container mt-4">
      <h1 className={styles.hotProducts}>產品類別</h1>
      <div className="row">
        {cards.map((card) => (
          <div key={card.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card" style={{ background: "#222529" }}>
              <div
                className="card-img-top"
                style={{ backgroundColor: "white" }}
              >
                <Image
                  src={card.image}
                  className="card-img-top img-fluid"
                  width={"160"}
                  height={"60"}
                  alt={card.title}
                />
              </div>
              <div className="card-body">
                <p
                  className="card-text text-center"
                  style={{
                    color: "#CBD5E1",
                    fontWeight: "bold",
                    fontSize: "18px",
                    borderColor: "#CBD5E1",
                    borderRadius: "10px",
                  }}
                >
                  {card.description}
                </p>
              </div>
              <div className="card-footer text-center">
                <Link
                  href={card.link}
                  className={`btn btn-primary my-3 ${styles.heroBtn}`}
                >
                  {card.title}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
