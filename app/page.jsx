import React from "react";
import Homepage from "@components/Homepage/Homepage";
import Carousel from "@components/Carousel/Carousel";
import Carouseltwo from "@components/Carouseltwo/Carouseltwo";
import BestDeals from "@components/BestDeals/BestDeals";

export default function page() {
  return (
    <>
      <Homepage />
      <Carousel />
      <Carouseltwo />
      <BestDeals />
    </>
  );
}
