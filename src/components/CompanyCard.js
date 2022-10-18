import { makeStyles } from "@material-ui/core";
import {
  Facebook,
  Instagram,
  Language,
  Telegram,
  Twitter,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    borderRadius: "10px",
    aspectRatio: "5/3",
    margin: "10px",
    marginBottom: "30px",
    perspective: "1000px",
    transformStyle: "preserve-3d",

    "&:hover": {
      boxShadow: "0 0 1rem rgb(186, 45, 125, 0.8)",
      border: "0.5px solid rgb(186, 45, 125)",
    },
    "&:hover $cardBody": {
      transform: "rotateY(-180deg)",
    },

    [theme.breakpoints.down("sm")]: {
      aspectRatio: "16/8",
      margin: "5px",
      marginBottom: "10px",
    },
  },
  cardBody: {
    position: "relative",
    height: "100%",
    width: "100%",
    transition:
      "transform .7s cubic-bezier(0.4, 0.2, 0.2, 1), -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1)",
    transformStyle: "preserve-3d",

    borderRadius: "10px",
    backgroundImage:
      "linear-gradient(rgb(23, 29, 42) 0%, rgba(23, 29, 42, 0.4) 100%)",
  },
  cardFront: {
    position: "relative",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    height: "100%",
    width: "100%",
    overflow: "hidden",

    transform: "rotateX(0deg)",
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardBack: {
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    transform: "rotateX(0deg)",

    overflow: "hidden",

    position: "absolute",
    top: 0,
    right: 0,
    padding: "1rem 1.8rem",
    transform: "rotateY(180deg)",
    zIndex: 1,
  },
  logo: {
    width: "60%",
    margin: "0.5rem 2rem",
    objectFit: "contain",
    aspectRatio: "1/1",
    [theme.breakpoints.down("sm")]: {
      width: "40%",
      margin: "0.5rem 1rem",
    },
  },
  cardBack_Header: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginBottom: "0.5rem",
  },
  title: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "white",

    [theme.breakpoints.down("xs")]: {
      fontSize: "0.9rem",
    },
  },
  logoSmall: {
    width: "40px",
    objectFit: "contain",
    marginRight: "1rem",

    [theme.breakpoints.down("xs")]: {
      width: "30px",
    },
  },
  description: {
    fontSize: "0.9rem",
    color: "white",
    marginBottom: "0.5rem",

    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
  socials: {
    display: "flex",
  },
  social: {
    margin: "0 0.5rem",
  },
}));

const CompanyCard = ({ name, description, logo, socials }) => {
  const classes = useStyles();

  const Icon = (social) => {
    switch (social) {
      case "website":
        return <Language fontSize="small" color="white" />;
      case "twitter":
        return <Twitter fontSize="small" color="white" />;
      case "facebook":
        return <Facebook fontSize="small" color="white" />;
      case "instagram":
        return <Instagram fontSize="small" color="white" />;
      case "telegram":
        return <Telegram fontSize="small" color="white" />;
      default:
        break;
    }
  };

  return (
    <div className={classes.card}>
      <div className={classes.cardBody}>
        <div className={classes.cardFront}>
          <img src={logo} alt={`${name} Logo`} className={classes.logo} />
        </div>
        <div className={classes.cardBack}>
          <div className={classes.cardBack_Header}>
            <img
              src={logo}
              alt={`${name} Logo`}
              className={classes.logoSmall}
            />
            <div className={classes.title}>{name}</div>
          </div>
          <div className={classes.description}>
            {description.split(" ").length > 8
              ? description.split(" ").slice(0, 8).join(" ") + "..."
              : description}
          </div>
          <div>
            {Object.keys(socials).map((key, index) => {
              if (socials[key].length) {
                return (
                  <a
                    target="_blank"
                    href={socials[key]}
                    className={classes.social}
                  >
                    {Icon(key)}
                  </a>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
