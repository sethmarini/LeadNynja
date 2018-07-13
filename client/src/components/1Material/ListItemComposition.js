import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import dashboard from '../Images/dashboard.svg';
import analytics from '../Images/analytics.svg';
import calendar from '../Images/calendar.svg';
import landing from '../Images/landing.svg';

const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      }, 
    },
  },
  primary: {},
  icon: {},
});

function ListItemComposition(props) {
  const { classes } = props;

  return (
    <Paper>
      <MenuList>
        <Link to={'/dashboard'}>
          <MenuItem className={classes.menuItem}>
            <ListItemIcon className={classes.icon}>
              <img src={dashboard} alt=""/>
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="Dashboard" />
          </MenuItem>
        </Link>
        <Link to={'/analytics'}>
          <MenuItem className={classes.menuItem}>
            <ListItemIcon className={classes.icon}>
            <img src={analytics} alt=""/>
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="Analytics" />
          </MenuItem>
        </Link>
        <Link to={'/calendar'}>
          <MenuItem className={classes.menuItem}>
            <ListItemIcon className={classes.icon}>
            <img src={calendar} alt=""/>
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="Calendar" />
          </MenuItem>
        </Link>
        <Link to={'/landing'}>
          <MenuItem className={classes.menuItem}>
            <ListItemIcon className={classes.icon}>
            <img src={landing} alt=""/>
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="Landing Page" />
          </MenuItem>
        </Link>
      </MenuList>
    </Paper>
  );
}

ListItemComposition.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListItemComposition);
