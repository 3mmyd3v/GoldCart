import styles from "./Carouseltwo.module.css";

import Cardtwo from "@components/Cardtwo/Cardtwo";

const Carouseltwo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.trending}>
        <h2 className={styles.h2}>Trending Product</h2>
        <div className={styles.totalCard}>
          <div className={styles.cardtwo}>
            <Cardtwo
              name="Logitech MX2 Mo..."
              discountedPrice="$24.19"
              price="$35.56"
              discountedPercent="-7%"
              image="/assets/images/mouse.svg"
            />
            <Cardtwo
              name="Samsung S23 Ultra"
              discountedPrice="$24.19"
              price="$35.56"
              discountedPercent="-7%"
              image="/assets/images/samsung.svg"
            />
            <Cardtwo
              name="Samsung S23 Ultra"
              discountedPrice="$24.19"
              price="$35.56"
              discountedPercent="-7%"
              image="/assets/images/samsung.svg"
            />
            <Cardtwo
              name="Samsung S23 Ultra"
              discountedPrice="$24.19"
              price="$35.56"
              discountedPercent="-7%"
              image="/assets/images/samsung.svg"
            />
            <Cardtwo
              name="Samsung S23 Ultra"
              discountedPrice="$24.19"
              price="$35.56"
              discountedPercent="-7%"
              image="/assets/images/samsung.svg"
            />
            <Cardtwo
              name="Logitech MX2 Mo..."
              discountedPrice="$24.19"
              price="$35.56"
              discountedPercent="-7%"
              image="/assets/images/mouse.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carouseltwo;
