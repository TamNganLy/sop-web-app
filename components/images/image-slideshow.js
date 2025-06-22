'use client';

import { useEffect, useState } from "react";

import Image from "next/image";
import { DUMMY_DEPARTMENT } from "@/data/data";
import classes from "./image-slideshow.module.css";

import shippingImg from "@/assets/shipping.png";
import inventoryImg from "@/assets/inventory.jpg";
import customerServiceImg from "@/assets/customer-service.jpg";
import salesImg from "@/assets/sales.png";
import financeImg from "@/assets/finance.jpg";
import supplyChainImg from "@/assets/supply-chain.jpg";
import assemblyImg from "@/assets/assembly.jpg";
import qualityControlImg from "@/assets/quality-control.jpg";
import ITSystemImg from "@/assets/IT-system.jpg";

const images = [
  { image: shippingImg, alt: "Shipping and Logistics" },
  { image: inventoryImg, alt: "Warehouse and Inventory" },
  { image: customerServiceImg, alt: "Customer Service" },
  { image: salesImg, alt: "Sales" },
  { image: financeImg, alt: "Finance" },
  { image: supplyChainImg, alt: "Supply Chain" },
  { image: assemblyImg, alt: "Assembly and Production" },
  { image: qualityControlImg, alt: "Quality Control" },
  { image: ITSystemImg, alt: "IT System" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ""}
          alt={image.alt}
        />
      ))}
    </div>
  );

  // return (
  //   <div className={classes.slideshow}>
  //     {DUMMY_DEPARTMENT.map((item) => (
  //       <Image
  //         key={item.id}
  //         src={item.image}
  //         className={item.id === currentImageIndex ? classes.active : ""}
  //         alt={item.title}
  //         fill
  //         style={{ objectFit: "cover" }}
  //       />
  //     ))}
  //   </div>
  // );
}
