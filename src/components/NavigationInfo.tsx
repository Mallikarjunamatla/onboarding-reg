import { Box } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import styles from "../styles/Form.module.css";
type Props = {};

function NavigationInfo() {
  return (
    <Box className={styles.nav}>
      <Box className={styles.nav1}>
        <Box className={styles.nav2}>
          <ArrowBackIosIcon sx={{
            color: "#8692A6",
            cursor: "pointer"
          }} />
          <span className={styles.nav3__back}>Back</span>
        </Box>
        <Box className={styles.nav3}>
          <span className={styles.nav3__span}>STEP 01/03</span>
        </Box>
      </Box>
      <Box className={styles.nav4}>
        <span className={styles.person__info}>Personal Info.</span>
      </Box>
    </Box>
  );
}

export default NavigationInfo;
