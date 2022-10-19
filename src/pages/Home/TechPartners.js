import { makeStyles } from "@material-ui/core/styles";
import CompanyCard from "../../components/CompanyCard";
import { partnerDetails } from "../Ventures/companyDetails";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginBottom: "8rem",

    [theme.breakpoints.down("sm")]: {
      marginBottom: "3rem",
    },
  },
  heading: {
    color: "white",
    textAlign: "center",
    fontSize: 50,
    fontWeight: 700,
    verticalAlign: "middle",
    wordSpacing: "0px",
    margin: "0px 0px 12px",
    marginBottom: "2rem",

    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
      marginBottom: "1rem",
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
}));

export default function TechPartners() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <p className={classes.heading}> Tech & Community Partners</p>
      <div className={classes.container}>
        <div className={classes.cardsGrid}>
          {partnerDetails.map((company, index) => {
            return <CompanyCard key={index} {...company} />;
          })}
        </div>
      </div>
    </div>
  );
}
