import {
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
  Input,
  FormControl,
  Icon,
} from "@mui/material";
import React from "react";
import {
  useForm,
  FormProvider,
  useFormContext,
  Controller,
} from "react-hook-form";
import { Grid } from "@mui/material";
import styles from "../../styles/Form.module.css";
import styles2 from "../../styles/Register.module.css";
import IconButton from "@mui/material/IconButton";
import CardMedia from "@mui/material/CardMedia";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import LockIcon from "@mui/icons-material/Lock";
export default function BankVerificationNumberForm() {
  const methods = useForm();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = methods;
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
  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit((data: any) => console.log(data))}
    >
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
        <LockIcon
          className={styles.lockIcon}
        />{" "}
        <span className={styles.info}>Your Info is safely secured</span>
      </Box>
    </form>
  );
}
