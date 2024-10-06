import styles from "./Cardone.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Cardone({ name, image, width, height }) {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <p className={styles.p}>{name}</p>
      
        <div className={styles.image}>
          <Image src={image} width={width} height={height} />
        </div>
         <div className={styles.blackbgc}> 
       <div className={styles.hoverButton}>
          <Link href="/" className={styles.link}>
            View Products
          </Link>
        </div> 
        </div> 
      </div>
    </div>
  );
}
