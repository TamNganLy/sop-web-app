"use client";

import { useState } from "react";
import SOP from "./sop";
import classes from "./sopBox.module.css";

export default function SOPBox({ props, sop, className }) {
  const [order, setOrder] = useState(0);
  const step = sop.sop?.[order];

  function prevClickHandle() {
    setOrder((pre) => (pre === 0 ? sop.sop.length-1 : pre - 1));
  }

  function nextClickHandle() {
    setOrder((pre) => (pre === sop.sop.length-1 ? 0 : pre + 1));
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.detailBox}>
        <h1>{sop.detail}</h1>
      </div>
      <div className={classes.main}>
        <SOP steps={step} id={sop.id} />
      </div>
      <div className={classes.move}>
        <button
          className={classes.action}
          onClick={prevClickHandle}
        >
          Previous
        </button>
        <button className={classes.action} onClick={nextClickHandle}>
          Next
        </button>
      </div>
    </div>
  );
}
