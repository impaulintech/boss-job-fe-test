import Header from "/components/Header";
import styles from "../styles/Home.module.css";
import { SearchBar } from "../components/SearchBar";
import { JobTemplate } from "../components/JobTemplate";
import { Pagination } from "../components/Pagination";

export default function Home() {
  return (
    <div className={styles.app}>
      <div className={styles.appWrapper}>
        <Header />
        <SearchBar />
        <div className={styles.total_jobs}>
          <span>1231 jobs found</span>
        </div>
        <JobTemplate />
        <JobTemplate />
        <JobTemplate />
        <Pagination />
      </div>
    </div>
  );
}
