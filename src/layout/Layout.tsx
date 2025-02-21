import { NavLink, Outlet } from "react-router-dom";
import styles from "./layout.module.css";

export default function Layout() {
  return (
    <>
      <header className={styles.header}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"/"}
        >
          homepage
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"fellowship"}
        >
          fellowship
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"fetchfox"}
        >
          fetchfox
        </NavLink>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>footer</footer>
    </>
  );
}
