import { Box, IconButton } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import styles from "../styles/Form.module.css";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { formType, selectRegister } from "../features/register/registerSlice";

function NavigationInfo() {
  const forms = useAppSelector(selectRegister);
  const dispatch = useAppDispatch();
  const onClickBack = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(
      formType({
        selectType: forms.preType,
      })
    );
  };
  const steps = [
    { step: "01", type: "individualForm", infoType: "Personal Info" },
    { step: "02", type: "residency", infoType: "Residency Info" },
    { step: "01", type: "BVN", infoType: "Bank Verification" },
  ];
  const currentStep = steps.findIndex((item) => item.type === forms.selectType);
  const total = forms.accountSelected === "individual" ? "02" : "01";
  return (
    <Box
      sx={{
        display: forms.selectType !== "accountType" ? "block" : "none",
      }}
      className={styles.nav}
    >
      <Box className={styles.nav1}>
        <Box className={styles.nav2}>
          <IconButton sx={{p : 0}} onClick={onClickBack}>
            <ArrowBackIosIcon
              sx={{
                color: "#8692A6",
                cursor: "pointer",
                width: "20px",
                height: "20px"
              }}
            />
            <span className={styles.nav3__back}>Back</span>
          </IconButton>
        </Box>
        {currentStep !== -1 && (
          <Box className={styles.nav3}>
            <span className={styles.nav3__span}>
              STEP {`${steps[currentStep].step}/${total}`}
            </span>
          </Box>
        )}
      </Box>
      {currentStep !== -1 && (
        <Box className={styles.nav4}>
          <span className={styles.person__info}>
            {`${steps[currentStep].infoType}`}.
          </span>
        </Box>
      )}
    </Box>
  );
}

export default NavigationInfo;
