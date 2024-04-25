import Footer from "./components/Footer";
import HomePage from "./components/Home";
import LogIn from "./components/LogIn";
import NavBar from "./components/NavBar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      {/* <LogIn /> */}
      <HomePage />
      <Footer />
    </main>
  );
}
