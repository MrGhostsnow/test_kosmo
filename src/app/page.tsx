import Footer from "./components/Footer";
import HomePage from "./components/Home";
import LogIn from "./components/LogIn";
import NavBar from "./components/NavBar";
import TopHeader from "./components/TopHeader";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <TopHeader />
      <NavBar />
      {/* <LogIn /> */}
      <HomePage />
      <Footer />
    </main>
  );
}
