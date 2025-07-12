import Image from "next/image";
import classes from "./sop.module.css";

export default function SOP({ steps, id }) {
  const imagePath = `/sops/${id}${steps.id}.png`;

  return (
    <>
      <p className={classes.text}>
        {steps.text}
      </p>
      {steps.image && (
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
