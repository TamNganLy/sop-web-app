import Link from "next/link";
import classes from "./page.module.css";
import { DUMMY_SOP } from "@/data/data";
import SOPBox from "@/components/sops/sopBox";

export default async function Sop({ params }) {
  const param = (await params).sopsSlug;
  const departmentSlug = (await params).departmentSlug;
  const departmentID = DUMMY_SOP.find((s) => s.slug === param)?.depId;
  const sops = DUMMY_SOP.filter((sop) => sop.depId === departmentID);
  const sop = DUMMY_SOP.find((sop) => sop.slug === param);
  return (
    <div className={classes.container}>
      <ul className={classes.nav}>
        {sops.map((s) => (
          <li
            key={s.id}
            className={`${classes.item} ${
              s.slug === param ? classes.itemActive : classes.item
            }`}
          >
            <Link href={`/${departmentSlug}/${s.slug}`} className={classes.link}>{s.title}</Link>
          </li>
        ))}
      </ul>
      <div className={classes.main}>
        <SOPBox sop={sop} />
      </div>
    </div>
  );
}
