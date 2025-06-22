import Image from "next/image";
import classes from "./department-item.module.css";
import Link from "next/link";

export default function DepartmentItem({title, slug, image, detail }) {
  return (
    <article className={classes.department}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
        </div>
      </header>
      <div className={classes.contect}>
        <p className={classes.detail}>{detail}</p>
        <div className={classes.actions}>
          <Link href={`/${slug}`}>View</Link>
        </div>
      </div>
    </article>
  );

}