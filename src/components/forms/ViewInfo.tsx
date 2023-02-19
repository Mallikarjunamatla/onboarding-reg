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
export default function ViewInfo() {
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
  return (
    <Box
      className={styles.form}
      onSubmit={handleSubmit((data: any) => console.log(data))}
    >
      {intro}

      <Button className={styles.submit} fullWidth>
        View Your Information
      </Button>
    </Box>
  );
}
