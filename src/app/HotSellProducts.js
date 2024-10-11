import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const cards = [
  {
    id: 1,
    title: "已售罄",
    description: "廚具4件裝 (炒匙漏杓鑊鏟湯杓)",
    image: "/images/mainpage/card-image-1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "了解更多",
    description: "20厘米易潔深煎鍋",
    image: "/images/mainpage/card-image-2.jpg",
    link: "/products",
  },
  {
    id: 3,
    title: "了解更多",
    description: "22厘米韓版深煎鍋連蓋",
    image: "/images/mainpage/card-image-3.jpg",
    link: "/products",
  },
  {
    id: 4,
    title: "已售罄",
    description: "冰鑄不銹鋼20cm廚師刀",
    image: "/images/mainpage/card-image-4.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "了解更多",
    description: "不銹鋼多士爐",
    image: "/images/mainpage/card-image-5.jpg",
    link: "/new",
  },
  {
    id: 6,
    title: "已售罄",
    description: "球釜電飯煲 (1升)",
    image: "/images/mainpage/card-image-6.jpg",
    link: "#",
  },
];

const HotSellProducts = () => {
  return (
    <div className="container mt-4">
      <h1 className={styles.hotProducts}>熱賣產品</h1>
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

export default HotSellProducts;
