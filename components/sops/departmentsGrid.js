import DepartmentItem from "./departmentItem";
import classes from "./departments-grid.module.css";
import { DUMMY_DEPARTMENT } from "@/data/data";

export default function DepartmentsGrid() {
  return (
    <ul className={classes.departments}>
      {DUMMY_DEPARTMENT.map((department) => (
        <li key={department.id}>
          <DepartmentItem
            title={department.title}
            slug={department.slug}
            image={department.image}
            detail={department.detail}
          />
        </li>
      ))}
    </ul>
  );
}
