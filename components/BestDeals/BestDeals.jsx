import styles from "./BestDeals.module.css";
import Link from "next/link";

const BestDeals = () => {
  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.mainleft}>
        <div className={styles.innermainleft}>
              <p className={styles.best}>Best Deals!</p>
              <h1 className={styles.h1}>Galaxy Watch5</h1>
              <p className={styles.description}>
                Find your starting line with Auto Workout Tracking and <br></br> BioActive
                Sensor to help see improvement with every <br></br> movement.
              </p>

              <div className={styles.shop}>
                <Link className={styles.shopLink} href="/">
                  Shop Now
                </Link>
              </div>

              <div className={styles.add}>
                <Link className={styles.addLink} href="/">
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.mainright}></div>
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
