import Image from "next/image";
import Link from "next/link";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import styles from "./page.module.css";

const products = [
  { id: 1, name: "Nón sơn ", image: "/anh1.png", price: "4.100.000₫", oldPrice: "4.700.000₫", discount: "-7%", remain: "Còn 12/30 suất" },
  { id: 2, name: " Nón sơn", image: "/anh2.png", price: "4.590.000₫", oldPrice: "4.900.000₫", discount: "-8%", remain: "Còn 10/30 suất" },
  { id: 3, name: "Nón sơn", image: "/anh3.png", price: "3.790.000₫", oldPrice: "3.990.000₫", discount: "-7%", remain: "Còn 18/30 suất" },
  { id: 4, name: "Nón sơn", image: "/anh4.png", price: "2.890.000₫", oldPrice: "3.200.000₫", discount: "-6%", remain: "Còn 15/30 suất" },
  { id: 5, name: "Nón sơn ", image: "/anh5.png", price: "2.200.000₫", oldPrice: "2.880.000₫", discount: "-6%", remain: "Còn 14/30 suất" },
  { id: 6, name: "Nón sơn", image: "/anh6.png", price: "2.600.000₫", oldPrice: "3.500.000₫", discount: "-6%", remain: "Còn 16/30 suất" },
  { id: 7, name: "Nón sơn", image: "/anh7.png", price: "2.500.000₫", oldPrice: "3.000.000₫", discount: "-7%", remain: "Còn 13/30 suất" },
  { id: 8, name: "Nón sơn", image: "/anh8.png", price: "2.300.000₫", oldPrice: "3.990.000₫", discount: "-7%", remain: "Còn 17/30 suất" },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.mainArea}>
        <div className={styles.mainContent}>
          {products.map((product) => (
            <div key={product.id} className={styles.product}>
              <div className={styles.mainProduct}>
                {/* Lưu ý: Thẻ bao quanh Image phải có position: relative trong CSS */}
                <div className={styles.productImage}>
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 25vw"
                    style={{ objectFit: "cover" }} 
                    priority={product.id <= 4} // Ưu tiên load 4 ảnh đầu
                  />
                  <span className={styles.badge}>HOT</span>
                </div>

                <div className={styles.productInfo}>
                  <h5 className={styles.productName}>{product.name}</h5>
                  
                  <div className={styles.productPrice}>
                    <strong className={styles.price}>{product.price}</strong>
                    <div className={styles.discount}>
                      <span className={styles.oldPrice}>{product.oldPrice}</span>
                      <small className={styles.percent}>{product.discount}</small>
                    </div>
                  </div>

                  <div className={styles.productRemain}>
                    <div className={styles.progressBar}>
                        {/* Bạn có thể thêm thanh progress ở đây */}
                    </div>
                    <span>{product.remain}</span>
                  </div>
                </div>
              </div>

              <Link href={`/san-pham/${product.id}`} className={styles.buyButton}>
                Mua ngay
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}