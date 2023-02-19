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

export default function ResidencyForm() {
  const methods = useForm();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = methods;
  const intro = (
    <Box className={styles2.choose__reg}>
      <p className={styles2.join__us}>Complete Your Profile!</p>
      <p className={styles2.join__us__2}>
        For the purpose of industry regulation, your details are required.
      </p>
    </Box>
  );
  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit((data: any) => console.log(data))}
    >
      {intro}

      <label className={styles.label} htmlFor="email">
        Phone Number
      </label>
      {/* <input
          id="phone"
          className={styles.input}
          aria-invalid={errors.name ? "true" : "false"}
          {...register("phone", {
            required: "Phone number required",
          })}
          type="text"
          placeholder="Enter your phone number"
        /> */}
      <Controller
        control={control}
        defaultValue={""}
        name={"phone"}
        rules={{
          required: "Please enter phone number",
        }}
        render={({ field: { onChange, value } }) => (
          <PhoneInputWithCountrySelect
            // className="form-control PhoneInputInput"
            international
            className={styles.input}
            defaultCountry="IN"
            placeholder="Please enter phone number"
            country="IN"
            onChange={onChange}
            
            //   value={value}
          />
        )}
      />
      {errors.phone?.message && (
        <span className={styles.error} role="alert">
          {errors.phone.message?.toString()}
        </span>
      )}
      <label className={styles.label} htmlFor="email">
        Your address
      </label>
      <input
        id="address"
        className={styles.input}
        aria-invalid={errors.address ? "true" : "false"}
        {...register("address", {
          required: "Address required",
        })}
        type="text"
        placeholder="Please enter address"
      />
      {errors.address?.message && (
        <span className={styles.error} role="alert">
          {errors.address.message?.toString()}
        </span>
      )}
      <label className={styles.label} htmlFor="password">
        Country of residence
      </label>
      <select
        className={styles.input}
        id="country"
        aria-invalid={errors.passward ? "true" : "false"}
        {...register("country", {
          required: "Country required",
        })}
      >
        <option value="">Please select </option>
        <option value="hello">Hello</option>
      </select>
      {errors.country?.message && (
        <span className={styles.error} role="alert">
          {errors.country.message.toString()}
        </span>
      )}

      <Button type="submit" className={styles.submit} fullWidth>
        Save & continue
      </Button>
    </form>
  );
}
