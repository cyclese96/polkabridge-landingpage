import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  circle: {
    color: theme.palette.pbr.primary,
    fontSize: 20,
  },
}));
export default function DotCircle() {
  const classes = useStyles();

  return <font className={classes.circle}>.</font>;
}
