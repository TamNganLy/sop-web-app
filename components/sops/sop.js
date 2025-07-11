"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./sop.module.css";

export default function SOP({ steps, id }) {
  const [imageExists, setImageExists] = useState(true);
  // if (!step) return <p>No steps found.</p>;

  const imagePath = `/sops/${id}${steps.id}.png`;

  return (
    <>
      <p className={classes.text}>
        {steps.text}
      </p>
      {imageExists && (
        <Image
          className={classes.image}
          src={imagePath}
          alt={`Step ${steps.id}`}
          width={800}
          height={500}
        />
      )}
    </>
  );
}
