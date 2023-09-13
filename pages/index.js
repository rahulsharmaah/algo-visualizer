import Image from "next/image";
import styles from "./page.module.css";
import { Box, Container, Grid, Typography } from "@mui/material";
import SortingTabs from "../components/SortingTabs";

export default function Home() {
  return (
    <main className={styles.main}>
      <Container>
        <Box mb={9}>
          <Typography
            variant="h2"
            color="secondary"
            textAlign="center"
            style={{
              textTransform: "capitalize",
              color: "#00833E",
              fontWeight: 600,
            }}
          >
            {" "}
            Algorithm Visualizer
          </Typography>
        </Box>
      </Container>
      <Grid md={6} lg={6} xl={6} margin={"10px 3rem"}>
        {" "}
        <Box>
          <SortingTabs />
        </Box>
      </Grid>
    </main>
  );
}
