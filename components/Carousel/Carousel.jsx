
import styles from "./Carousel.module.css";
import Cardone from "@components/Cardone/Cardone";

export default function Carousel() {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.Card}>
            <Cardone
              name="Phones & Tablet"
              image="/assets/images/phone.svg"
              width={156}
              height={283}
            />
            <Cardone
              name="Accessories"
              image="/assets/images/headset.svg"
              width={405}
              height={344}
            />
            <Cardone
              name="Laptops"
              image="/assets/images/laptop.svg"
              width={333.38}
              height={248.64}
            />
          </div>
        
        </div>
      </div>
    </>
  );
}
