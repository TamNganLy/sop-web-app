import DepartmentsGrid from "@/components/sops/departmentsGrid";
import ImageSlideshow from "@/components/images/image-slideshow";
import classes from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>MPCM SOP Webpage</h1>
            <p>{"MPCM’s platform for streamlined, standardized SOP management."}</p>
          </div>
          <div className={classes.cta}>
            <Link href="/">SOP Management</Link>
            <Link href="/">Account Management</Link>
            <Link href="/">Login</Link>
          </div>
        </div>
      </header>
      <DepartmentsGrid />
    </>
  );
}
