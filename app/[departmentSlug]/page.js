import Link from "next/link";
import { DUMMY_SOP } from "@/data/data";
import { DUMMY_DEPARTMENT } from "@/data/data";
import classes from "./page.module.css";

export default async function Department({params}) {
  const param = (await params).departmentSlug;
  const department = DUMMY_DEPARTMENT.find((d) => d.slug === param);
  const sops = DUMMY_SOP.filter((sop) => sop.depId === department.id);

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{department.title}</h1>
      <ul className={classes.list}>
        {sops.map((sop) => (
          <li key={sop.id}  className={classes.item}>
            <Link href={`${department.slug}/${sop.slug}`}>
              <div>
                <h2 className={classes.itemTitle}>{sop.title}</h2>
                <p className={classes.itemDetail}>{sop.detail}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}