import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: '50px',
    background: `linear-gradient(to bottom,#D9047C, #BF1088)`,
    lineHeight: '24px',
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    marginTop: 5,
    color: '#ffffff',
    padding: '10px 20px 10px 20px',
    fontWeight: 600,
  },
}));

export default function CustomButton({ title }) {
  const classes = useStyles();
  return (
    <Button variant="contained" color="primary" className={classes.button}>
      {title}
    </Button>
  );
}
