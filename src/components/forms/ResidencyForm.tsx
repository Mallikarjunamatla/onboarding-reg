import {
  Box,
  Button,
} from "@mui/material";
import React from "react";
import {
  useForm,
  Controller,
} from "react-hook-form";
import styles from "../../styles/Form.module.css";
import styles2 from "../../styles/Register.module.css";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import {
  formType,
  selectRegister,
} from "../../features/register/registerSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { CountryDropdown } from "react-country-region-selector";

export default function ResidencyForm() {
  const registerState = useAppSelector(selectRegister);
  const methods = useForm();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = methods;
  React.useEffect(() => {
    if (registerState.selectType === "residency") {
      dispatch(
        formType({
          preType: "individualForm",
        })
      );
    }
  }, [dispatch, registerState.selectType]);
  const intro = (
    <Box className={styles2.choose__reg}>
      <p className={styles2.join__us}>Complete Your Profile!</p>
      <p className={styles2.join__us__2}>
        For the purpose of industry regulation, your details are required.
      </p>
    </Box>
  );

  const onSubmit = (data: any) => {
    dispatch(
      formType({
        backAnim: false,
        selectType: "viewInfo",
        individual: data
      })
    );
    reset()
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
            value={value}

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
      <Controller
        control={control}
        defaultValue={""}
        name={"country"}
        rules={{
          required: "Please select a country",
        }}
        render={({ field: { onChange, value } }) => (
          <CountryDropdown
          classes={styles.input}
            onChange={onChange}
            value={value}
          />
        )}
      />
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
