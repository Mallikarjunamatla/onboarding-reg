import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SelectedAccount from "./forms/SelectedAccount";
import IndividualForm from "./forms/IndividualForm";
import ResidencyForm from "./forms/ResidencyForm";
import BankVerificationNumberForm from "./forms/BankVerificationNumberForm";
import ViewInfo from "./forms/ViewInfo";
import { useRef } from "react";
import { useAppSelector } from "../app/hooks";
import { selectRegister } from "../features/register/registerSlice";
import { Slide } from "@mui/material";
import NavigationInfo from "./NavigationInfo";

const theme = createTheme();

export default function Register() {
  const registerState = useAppSelector(selectRegister);
  // (property) RegisterState.selectType: "viewInfo" | "accountType" | "residency" | "individualForm" | "BVN"

  const containerRef = useRef(null);
  const formsToRender = [
    {
      type: "viewInfo",
      ele: <ViewInfo />,
    },
    {
      type: "accountType",
      ele: <SelectedAccount />,
    },
    {
      type: "residency",
      ele: <ResidencyForm />,
    },
    {
      type: "individualForm",
      ele: <IndividualForm />,
    },
    {
      type: "BVN",
      ele: <BankVerificationNumberForm />,
    },
  ];
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
        <Grid item xs={12} sm={8} md={6} sx={{ position: "relative" }}>
          <Box
            sx={{
              my: "71px",
              ml: "100px",
              mr: "81px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <NavigationInfo />

            <Box
              sx={{
                overflow: "hidden",
                p: 1,
              }}
              ref={containerRef}
            >
              <Box>
                {formsToRender.map((ele) => (
                  <div
                    key={ele.type}
                    style={{
                      // width: "100%",
                      display:
                        registerState && registerState.selectType === ele.type
                          ? "block"
                          : "none",
                    }}
                  >
                    <Slide
                      direction={registerState.backAnim ? "right" : "left"}
                      in={
                        registerState && registerState.selectType === ele.type
                      }
                      container={containerRef?.current}
                    >
                      <div>{ele.ele}</div>
                    </Slide>
                  </div>
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
