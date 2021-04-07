import React from 'react';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  card: {
    width: 260,
    height: 260,
    margin: 20,
    border: '1px solid',
    borderRadius: 10,
    borderColor: theme.palette.pbr.textDark,
    boxShadow: '2px 3px 20px #eeeeee',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));
export default function CardContainer() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://media.istockphoto.com/photos/kaaba-in-mecca-picture-id482206266?k=6&m=482206266&s=612x612&w=0&h=EW8RNbj2pu7a8Os_nkRogmhWT7RYhYYY6Yl2oAGhJwg="
          title="Location"
        />
        <CardContent>
          <Typography variant="h6" color="textPrimary" component="p" className="mb-2">
            Mecca - Umrah
          </Typography>
          <Typography variant="caption" color="textSecondary" component="p">
            Starting from
          </Typography>
          <Typography variant="h6" color="textPrimary" component="p">
            ₹138493
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
