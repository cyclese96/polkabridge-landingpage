import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import emailjs from "@emailjs/browser";

const useStyles = makeStyles((theme) => ({
  background: {
    paddingTop: 80,
    paddingBottom: 80,
    paddingLeft: "8%",
    paddingRight: "8%",
    backgroundColor: "transparent",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      paddingLeft: "1%",
      paddingRight: "1%",
    },
  },

  circle: {
    width: 7,
    height: 7,
    padding: 5,
    margin: 6,
    borderRadius: "50%",
    backgroundColor: theme.palette.pbr.primary,
  },
  header: {
    minHeight: "90vh",
    width: "auto",

    background: `linear-gradient(180deg,
      rgba(0, 0, 0, 0.99),
      rgba(6, 21, 33, 0.60)
    ),
    url("https://png.pngtree.com/thumb_back/fh260/background/20201014/pngtree-abstract-particles-background-with-connection-concept-vector-illustration-image_416083.jpg") no-repeat center center
      fixed`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    [theme.breakpoints.down("sm")]: {
      height: "85vh",
    },
  },
  notice: {
    fontWeight: 400,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    paddingBottom: 15,
  },
  heading: {
    fontWeight: 700,
    verticalAlign: "baseline",
    margin: 0,
    fontSize: 42,
    color: "white",
    textAlign: "center",
    fontFamily: "Fira Sans",
    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
      textAlign: "center",
      lineHeight: 1.2,
    },
  },

  subheading: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: 500,
    marginTop: 50,
    verticalAlign: "middle",
    wordSpacing: "0px",
    margin: "0px 0px 12px",
  },
  para: {
    textAlign: "center",
    width: "100%",
    fontSize: 16,
    fontWeight: 400,
    color: "#e5e5e5",
  },
  partner: {
    flex: "25%",
    height: "32px",
    [theme.breakpoints.down("sm")]: {
      flex: " 50%",
    },
  },
  logoWrapperCard: {
    width: "100%",
    maxWidth: 100,
    backgroundColor: "#f9f9f9",
    border: "3px solid #121212",
    filter: "drop-shadow(0 0 0.5rem #111111)",
    borderRadius: 7,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      maxWidth: 100,
      marginTop: 20,
    },
  },
  logoWrapper: {
    width: "100%",
    maxWidth: 100,

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      maxWidth: 100,
      marginTop: 20,
    },
  },
  celerWrapper: {
    width: "100%",
    maxWidth: 150,

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      maxWidth: 100,
      marginTop: 20,
    },
  },
  celer: {
    maxWidth: 140,

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      maxWidth: 80,
    },
  },
  logoMain: {
    width: "100%",
    maxWidth: 100,
    filter: "brightness(0) invert(1)",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      maxWidth: 80,
    },
  },
  logoMainNoFilter: {
    width: "100%",
    maxWidth: 100,
    filter: " invert(1)",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      maxWidth: 80,
    },
  },
  logoMainHacken: {
    width: "100%",
    maxWidth: 55,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      maxWidth: 45,
    },
  },
  ecologoMain: {
    width: "100%",
    maxWidth: 65,
  },
  imageWrapperNewTomo: {
    width: "90%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      maxWidth: 90,
    },
  },
  imageWrapperChina: {
    padding: 15,
    height: "60px",
    [theme.breakpoints.down("sm")]: {
      height: "54px",
      padding: 15,
    },
  },
  imageWrapper: {
    padding: 15,
    height: "64px",
    [theme.breakpoints.down("sm")]: {
      height: "54px",
      padding: 15,
    },
  },
  imageWrapperBMW: {
    padding: 10,
    height: "70px",
    [theme.breakpoints.down("sm")]: {
      height: "54px",
      padding: 15,
    },
  },
  imageWrapperNew: {
    padding: 10,
    height: "68px",
    [theme.breakpoints.down("sm")]: {
      height: "64px",
      padding: 10,
    },
  },

  listingsWrapper: {
    maxWidth: 700,
  },
  listingsWrapper2: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  listingsWrappe2: {
    maxWidth: 900,
  },
  listingsWrapper3: {
    maxWidth: 900,
  },
  card: {
    width: "100%",
    height: "100%",

    borderRadius: 10,
    backgroundColor: "#111111",
    border: "3px solid #121212",
    filter: "drop-shadow(0 0 0.5rem #111111)",

    paddingBottom: 15,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
      width: "100%",
      height: "100%",
    },
  },
  imageWrapperCard: {
    borderRadius: 10,
    padding: 10,
    height: "60px",

    backgroundColor: "#f9f9f9",
    border: "3px solid #121212",
    filter: "drop-shadow(0 0 0.5rem #111111)",
    [theme.breakpoints.down("sm")]: {
      height: "64px",
      padding: 10,
    },
  },
  imageWrapperCardUnilend: {
    borderRadius: 10,
    padding: 10,
    height: "50px",

    backgroundColor: "#f9f9f9",
    border: "3px solid #121212",
    filter: "drop-shadow(0 0 0.5rem #111111)",
    [theme.breakpoints.down("md")]: {
      marginTop: 6,
      height: "50px",
      maxWidth: 120,
      padding: 5,
    },
  },
  imageWrapperNewSafle: {
    padding: 10,
    height: "50px",

    [theme.breakpoints.down("sm")]: {
      height: "50px",
      padding: 10,
    },
  },
  imageWrapperCardDfyn: {
    borderRadius: 10,
    padding: 10,
    height: "50px",

    backgroundColor: "#f9f9f9",
    border: "3px solid #121212",
    filter: "drop-shadow(0 0 0.5rem #111111)",
    [theme.breakpoints.down("sm")]: {
      marginTop: 6,
      height: "50px",
      width: "fit-content",
      padding: 5,
    },
  },
  imageWrapperCardBlack: {
    borderRadius: 10,
    padding: 10,
    height: "50px",

    backgroundColor: "#121212",
    border: "3px solid #121212",
    filter: "drop-shadow(0 0 0.5rem #111111)",
    [theme.breakpoints.down("sm")]: {
      height: "50px",
      padding: 10,
    },
  },
  button: {
    borderRadius: "10px",
    background: `linear-gradient(to bottom,#D9047C, #BF1088)`,
    lineHeight: "24px",
    verticalAlign: "baseline",
    letterSpacing: "-1px",
    margin: 0,
    marginTop: 5,
    color: "#ffffff",
    padding: "8px 16px 8px 16px",
    fontWeight: 600,
    fontSize: "1.02vw",
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
    },
  },
}));
export default function GetInTouch() {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = () => {
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", "hj", "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className={classes.background}>
      <p className={classes.heading}> GET IN TOUCH NOW!</p>

      <p className={classes.para}>
        Looking for support from us? mail us your proposal at
      </p>
      <div className="text-center mt-3">
        <a href="mailto:support@polkabridge.org">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            support@polkabaridge.org
          </Button>
        </a>
      </div>
      {/* 

      <div class="row container mt-4">
        <div class="col">
          <div className="mb-3">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              class="form-control"
              placeholder="Name"
              style={{
                height: "50px",
                backgroundColor: "#161F30",
                border: "none",
              }}
            />
          </div>{" "}
          <div className="mt-3">
            <input
              type="text"
              class="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                height: "50px",
                backgroundColor: "#161F30",
                border: "none",
              }}
            />
          </div>
        </div>
        <div class="col">
          <textarea
            type="text"
            class="form-control"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              height: "100%",
              backgroundColor: "#161F30",
              border: "none",
            }}
          />
        </div>
      </div>
      <div className="text-center mt-3">
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={onSubmit}
        >
          Submit Message
        </Button>
      </div> */}
    </div>
  );
}
