import { makeStyles } from "@material-ui/core/styles";
import CompanyCard from "../../components/CompanyCard";
import { portfolioDetails } from "./companyDetails";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginBottom: "8rem",

    [theme.breakpoints.down("sm")]: {
      marginBottom: "3rem",
    },
  },
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
    width: "100%",
    maxWidth: "1200px",
    [theme.breakpoints.down("sm")]: {
      padding: "calc(3vw)",
    },
  },
  heading: {
    fontWeight: 700,
    verticalAlign: "baseline",
    margin: 0,
    fontSize: 42,
    color: "white",
    textAlign: "center",
    fontFamily: "Fira Sans",

    marginBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
      textAlign: "center",
      lineHeight: 1.2,
      marginBottom: "1rem",
    },
  },
}));
export default function Portfolio() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <p className={classes.heading}> PORTFOLIO</p>
      <div className={classes.container}>
        <div className={classes.cardsGrid}>
          {portfolioDetails.map((company, index) => {
            return <CompanyCard key={index} {...company} />;
          })}
        </div>
      </div>
    </div>
  );
}
