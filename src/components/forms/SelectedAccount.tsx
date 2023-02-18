import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "../../styles/Register.module.css";
function SelectedAccount() {
  const individual = (
    <Box className={styles.indi}>
      <Box className={styles.polygon}>
        <PermIdentityIcon sx={{ color: "#fff" }} />
      </Box>
      <Box className={styles.indi__info}>
        <Typography
          component="div"
          variant="body2"
          className={styles.text__node}
        >
          Individual
        </Typography>
        <Typography
          component="div"
          variant="body2"
          className={styles.text__node__2}
        >
          Personal account to manage all you activities.
        </Typography>
      </Box>
      <Box className={styles.arrow}>
        <ArrowForwardIcon />
      </Box>
    </Box>
  );
  const business = (
    <Box className={styles.indi}>
      <Box className={styles.polygon__business}>
        <Box className={styles.polygon__business__2}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 8C3.44772 8 3 8.44772 3 9V19C3 19.5523 3.44772 20 4 20H20C20.5523 20 21 19.5523 21 19V9C21 8.44772 20.5523 8 20 8H4ZM1 9C1 7.34315 2.34315 6 4 6H20C21.6569 6 23 7.34315 23 9V19C23 20.6569 21.6569 22 20 22H4C2.34315 22 1 20.6569 1 19V9Z"
              fill="#1565d8"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.87868 2.87868C8.44129 2.31607 9.20435 2 10 2H14C14.7956 2 15.5587 2.31607 16.1213 2.87868C16.6839 3.44129 17 4.20435 17 5V21C17 21.5523 16.5523 22 16 22C15.4477 22 15 21.5523 15 21V5C15 4.73478 14.8946 4.48043 14.7071 4.29289C14.5196 4.10536 14.2652 4 14 4H10C9.73478 4 9.48043 4.10536 9.29289 4.29289C9.10536 4.48043 9 4.73478 9 5V21C9 21.5523 8.55228 22 8 22C7.44772 22 7 21.5523 7 21V5C7 4.20435 7.31607 3.44129 7.87868 2.87868Z"
              fill="#1565d8"
            />
          </svg>
        </Box>
      </Box>
      <Box className={styles.indi__info}>
        <Typography
          component="div"
          variant="body2"
          className={styles.text__node}
        >
          Business
        </Typography>
        <Typography
          component="div"
          variant="body2"
          className={styles.text__node__2}
        >
          Own or belong to a company, this is for you.{" "}
        </Typography>
      </Box>
    </Box>
  );
  return (
    <Box>
      <Box>
          <p className={styles.sign__in}>
            Already have an account?&nbsp;{" "}
            <a href="#root" className={styles.link}>
              {" "}
              Sign In
            </a>
          </p>
      </Box>
      <Box className={styles.choose}>
        <div>
          <span className={styles.join__us}>Join Us</span>
        </div>
        <div>
          <p className={styles.join__us__2}>
            To begin this journey, tell us what type of account you’d be
            opening.
          </p>
        </div>
        <Button size="large" className={styles.indi__button} fullWidth>
          {individual}
        </Button>
        <Button size="large" className={styles.business} fullWidth>
          {business}
        </Button>
      </Box>
    </Box>
  );
}

export default SelectedAccount;
