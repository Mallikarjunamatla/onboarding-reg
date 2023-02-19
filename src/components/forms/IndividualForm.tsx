import {
  Box,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import styles from "../../styles/Form.module.css";
import styles2 from "../../styles/Register.module.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { formType, selectRegister } from "../../features/register/registerSlice";

export default function IndividualForm() {
  const methods = useForm();
  const dispatch = useAppDispatch();
  const registerState = useAppSelector(selectRegister)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;
  React.useEffect(()=>{
   if(registerState.selectType === "individualForm"){
    dispatch(formType({
      preType: "accountType"
    }))
   }
 },[dispatch, registerState.selectType])
  const intro = (
    <Box className={styles2.choose__reg}>
      <p className={styles2.join__us}>Register Individual Account!</p>
      <p className={styles2.join__us__2}>
        For the purpose of industry regulation, your details are required.
      </p>
    </Box>
  );
  const onSubmit = (data: any)=>{
    dispatch(formType({
      backAnim: false,
      selectType: "residency",
      individual: data
    }))
    reset()
  }
  return (
    <FormProvider {...methods}>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        {intro}

        <label className={styles.label} htmlFor="email">
          Your full name*
        </label>
        <input
          id="name"
          className={styles.input}
          aria-invalid={errors.name ? "true" : "false"}
          {...register("name", {
            required: "Name required",
          })}
          type="text"
          placeholder="Enter your name"
        />
        {errors.name?.message && (
          <span className={styles.error} role="alert">
            {errors.name.message?.toString()}
          </span>
        )}
        <label className={styles.label} htmlFor="email">
          Email address*
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
          Create password*
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
        <FormControlLabel
          sx={{
            marginTop: "24px",
          }}
          control={
            <Checkbox
              aria-invalid={errors.passward ? "true" : "false"}
              {...register("terms", {
                required: "Terms accept required",
              })}
            />
          }
          label="I agree to terms & conditions"
          classes={{
            label: styles.label___check,
          }}
        />
        {errors.terms?.message && (
          <span className={styles.error} role="alert">
            {errors.terms.message.toString()}
          </span>
        )}
        <Button type="submit" className={styles.submit} fullWidth>
          Register Account
        </Button>
        <div className={styles.or__div}>
          <span className={styles.or}>Or</span>
        </div>
        <Button className={styles.submit__google} fullWidth>
          <img
            className={styles.google}
            alt="google-logo"
            src={`${process.env.PUBLIC_URL}/google.svg`}
          />
          Register with Google
        </Button>
      </form>
    </FormProvider>
  );
}
