"use client";

import Layout from "@layout";
import "./Homepage.css";
import Link from "next/link";
import Image from "next/image";

const Homepage = () => {
  return (
    <Layout page="Home">
      <div className="containerhome">
        <div className="left">
          <div className="innerleft">
            <p className="discover">Discover the new</p>
            <p className="macbook">Macbook Pro 16"</p>
            <div className="Links">
              <div className="shopdiv">
                <Link className="shop" href="/">
                  Shop Now
                </Link>
              </div>

              <div className="adddiv">
                <Link className="add" href="/">
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Image
            src="/assets/icons/laptop.svg"
            width={704}
            height={469}
            className=""
          />
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
