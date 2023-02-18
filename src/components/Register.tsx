import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import styles from "../styles/Register.module.css";
import SelectedAccount from "./forms/SelectedAccount";
import IndividualForm from "./forms/IndividualForm";

const theme = createTheme();

export default function SignInSide() {
 
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/Frame1.png)`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "auto",
            backgroundPosition: "flex-start",
          }}
        />
        <Grid item xs={12} sm={8} md={6}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <SelectedAccount /> */}
            <IndividualForm />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
