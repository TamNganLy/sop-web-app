import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo/logo-mpcm.png";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="MPCM logo" priority />
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li><NavLink href="/manage-sop">SOP Management</NavLink></li>
            <li><NavLink href="/manage-accout">Account Management</NavLink></li>
            <li><NavLink href="/login">Login</NavLink></li>
          </ul>
        </nav>
      </header>
    </>
  );
}
