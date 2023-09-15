import Image from "next/image";
import styles from "./page.module.css";
import { Box, Container, Grid, Typography } from "@mui/material";
import SortingTabs from "../components/SortingTabs";
import Footer from "../components/Footer";
import Gutter from "../components/Gutter";

export default function Home() {
  return (
    <Gutter xs={12}>
      <>
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
        <Grid container justifyContent={"center"}>
          {" "}
          <Box>
            <SortingTabs />
          </Box>
        </Grid>
        <Footer />
      </>
    </Gutter>
  );
}
