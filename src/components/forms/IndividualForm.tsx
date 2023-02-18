import {
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
  Input,
  FormControl,
} from "@mui/material";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Grid } from "@mui/material";
import styles from "../../styles/Form.module.css";
export default function IndividualForm() {
  const methods = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  return (
    <FormProvider {...methods}>
      <form
        className={styles.form}
        onSubmit={handleSubmit((data: any) => console.log(data))}
      >
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          className={styles.input}
          aria-invalid={errors.email ? "true" : "false"}
          {...register("email", {
            required: "Email required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          })}
          type="email"
          placeholder="Enter your email"
        />
        {errors.email?.message && (
          <span className={styles.error} role="alert">
            {errors.email.message?.toString()}
          </span>
        )}
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          className={styles.input}
          id="password"
          aria-invalid={errors.passward ? "true" : "false"}
          {...register("password", {
            required: "Password required",
            minLength: {
              value: 5,
              message: "min length is 5",
            },
          })}
          type="password"
          placeholder="password"
        />
        {errors.password?.message && (
          <span className={styles.error} role="alert">
            {errors.password.message.toString()}
          </span>
        )}
        <Button type="submit" className={styles.submit} fullWidth>
          Register Account
        </Button>
      </form>
    </FormProvider>
  );
}
