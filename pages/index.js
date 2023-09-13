import Image from "next/image";
import styles from "./page.module.css";
import { Box } from "@mui/material";
import SortingTabs from "../components/SortingTabs";

export default function Home() {
  return (
    <main className={styles.main}>
      <Box md={12}>
        <SortingTabs />
      </Box>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
