import styles from "./Cardtwo.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Cardtwo({
  name,
  price,
  discountedPrice,
  discountedPercent,
  image,
}) {
  return (
    <div className={styles.container}>
      <Image src={image} height={179} width={134} />
      <p className="p">{name}</p>
      <p className="pp">{discountedPrice}</p>
      <div className={styles.lower}>
        <p className="ppp">
          <s>{price}</s>
        </p>
        <p className="pppp">{discountedPercent}</p>
      </div>
      {/* <div className={styles.hoverButton}>
        <Link href="/" className={styles.link}>
          Add to Cart
        </Link>
      </div> */}
      <div className={styles.centered}>
        <div className={styles.hoverButtontwo}>
          <Link href="/" className={styles.linktwo}>
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
}
