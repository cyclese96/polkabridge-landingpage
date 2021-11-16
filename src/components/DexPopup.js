import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Close } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    position: "relative",
    width: 600,
    height: 700,
    overflowX: "hidden",
    overflowY: "scroll",

    marginBottom: 30,
    background: `url("http://jolttx.com/wp-content/uploads/2019/05/istockphoto-601370366-612x612.jpg") padding-box,linear-gradient(to right, #00EBF9, #C42195) border-box`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    border: `5px solid transparent`,
    borderRadius: 40,

    padding: 10,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: 400,
    },
  },
  card1: {
    background: `url("images/2.png") padding-box,linear-gradient(to right, #00EBF9, #C42195) border-box`,
    borderRadius: 40,
    border: `2px solid transparent`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: 300,
      backgroundSize: "contain",
    },
  },
  card2: {
    background: `url("images/1.png") padding-box,linear-gradient(to right, #00EBF9, #C42195) border-box`,
    borderRadius: 40,
    border: `2px solid transparent`,
  },
  card3: {
    background: `linear-gradient(to right, #00EBF9, #C42195) border-box`,
    borderRadius: 40,
    border: `2px solid transparent`,
  },
  footer: {},
  title: {
    color: "#f9f9f9",
    textAlign: "center",
    fontWeight: 800,
    fontSize: 28,
    paddingBottom: 20,
    [theme.breakpoints.down("md")]: {
      fontWeight: 700,
      fontSize: 20,
    },
  },
  icon: {
    color: "#f9f9f9",
  },
}));
export default function DexPopupContent({ closePopup }) {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div className="d-flex justify-content-end align-items-center">
        <IconButton onClick={closePopup}>
          <Close className={classes.icon} />
        </IconButton>
      </div>
      <div>
        <h4 className={classes.title}>Multichain AMM launched</h4>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <div className={classes.card3}>
            <a
              href="https://swap.polkabridge.org/"
              style={{ textDecoration: "none", padding: 5 }}
            >
              ]
              <img
                src="images/swap.png"
                height="100%"
                width="100%"
                style={{ borderRadius: 40 }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
