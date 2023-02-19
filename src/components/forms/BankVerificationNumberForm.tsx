import {
  Box,
  Button,
} from "@mui/material";
import React from "react";
import {
  useForm,
} from "react-hook-form";
import styles from "../../styles/Form.module.css";
import styles2 from "../../styles/Register.module.css";
import LockIcon from "@mui/icons-material/Lock";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  formType,
  selectRegister,
} from "../../features/register/registerSlice";
export default function BankVerificationNumberForm() {
  const registerState = useAppSelector(selectRegister);
  const methods = useForm();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;
  React.useEffect(() => {
    if (registerState.selectType === "BVN") {
      dispatch(
        formType({
          preType: "accountType",
        })
      );
    }
  }, [dispatch, registerState.selectType]);
  const intro = (
    <Box sx={{ marginBottom: "20px" }}>
      <Box className={styles2.choose__reg}>
        <p className={styles2.join__us}>Complete Your Profile!</p>
        <p className={styles2.join__us__2}>
          For the purpose of industry regulation, your details are required.
        </p>
      </Box>
    </Box>
  );
  const onSubmit = (data: any) => {
    dispatch(
      formType({
        backAnim: false,
        selectType: "viewInfo",
        business: data
      })
    );
    reset()
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {intro}

      <label className={styles.label} htmlFor="email">
        Bank verification number (BVN)
      </label>
      <input
        id="BVN"
        className={styles.input}
        aria-invalid={errors.address ? "true" : "false"}
        {...register("BVN", {
          required: "Bank verification number (BVN) required",
        })}
        type="text"
        placeholder="Please enter Bank verification number (BVN)"
      />
      {errors.BVN?.message && (
        <span className={styles.error} role="alert">
          {errors.BVN.message?.toString()}
        </span>
      )}
      <div style={{ height: "100px" }}></div>

      <Button type="submit" className={styles.submit} fullWidth>
        Save & continue
      </Button>
      <Box className={styles.lock}>
        <LockIcon className={styles.lockIcon} />{" "}
        <span className={styles.info}>Your Info is safely secured</span>
      </Box>
    </form>
  );
}
