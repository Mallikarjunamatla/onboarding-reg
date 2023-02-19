import {
  Box,
  Button,
  Dialog,
  DialogContent,
  List,
  ListItem,
} from "@mui/material";
import React, { useState } from "react";
import styles from "../../styles/Form.module.css";
import styles2 from "../../styles/Register.module.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  formType,
  selectRegister,
} from "../../features/register/registerSlice";
export default function ViewInfo() {
  const dispatch = useAppDispatch();
  const registerState = useAppSelector(selectRegister);
  const [open, setOpen] = useState(false);

  React.useEffect(() => {
    if (
      registerState.accountSelected === "business" &&
      registerState.selectType === "viewInfo"
    ) {
      dispatch(
        formType({
          preType: "BVN",
        })
      );
    }
    if (
      registerState.accountSelected === "individual" &&
      registerState.selectType === "viewInfo"
    ) {
      dispatch(
        formType({
          preType: "residency",
        })
      );
    }
  }, [dispatch, registerState.accountSelected, registerState.selectType]);
  const intro = (
    <Box sx={{ marginBottom: "20px" }}>
      <Box className={styles2.choose__reg}>
        <p className={styles2.join__us}>
          Thank you for filling out your information!
        </p>
        <p className={styles2.join__us__2}>
          We’ve sent you an email with [the coupon code/your file download
          link/your voucher] at the email address you provided. Please enjoy,
          and let us know if there’s anything else we can help you with.
        </p>
      </Box>
    </Box>
  );
  const onClickView = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(true);
  };
  const onClose = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <Box className={styles.form}>
      {intro}
      <Button onClick={onClickView} className={styles.submit} fullWidth>
        View Your Information
      </Button>
      <Dialog open={open} onClose={onClose}>
        <DialogContent>
          {registerState.accountSelected === "individual" && (
            <Box>
              {Object.keys(registerState.individual).length > 0 && (
                <List>
                  {Object.keys(registerState.individual).map((item: any) => (
                    <ListItem key={item}>
                      <span className={styles.country}>{`${item} : `}</span>{" "}
                      &nbsp; {` ${(registerState.individual as any)[item]}`}
                    </ListItem>
                  ))}
                </List>
              )}
            </Box>
          )}
          {registerState.accountSelected === "business" && (
            <Box>
              {Object.keys(registerState.business).length > 0 && (
                <List>
                  {Object.keys(registerState.business).map((item: any) => (
                    <ListItem key={item}>
                      <span
                        className={styles.country}
                      >{`Bank verification number (BVN) : `}</span>{" "}
                      &nbsp; {` ${(registerState.business as any)[item]}`}
                    </ListItem>
                  ))}
                </List>
              )}
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
