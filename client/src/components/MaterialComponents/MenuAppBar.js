import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import TemporaryDrawer from '../MaterialComponents/TemporaryDrawer';
import { ListItemIcon } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import account from '../Images/account.svg';
import logout from '../Images/logout.svg';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static" className="bg-primary">
          <Toolbar >
          <TemporaryDrawer />
            <Typography variant="title" color="inherit" className={classes.flex}>
            &ensp;LeadNynja - Beta v1.3
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  className="text-center"
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <Link to={'/account'}>
                    <MenuItem onClick={this.handleClose}>
                      <ListItemIcon className={classes.icon}>
                        <img src={account} alt=''/>
                      </ListItemIcon>
                      <ListItemText classes={{ primary: classes.primary }} inset primary="Account" />
                    </MenuItem>
                  </Link>
                  <SignOutButton>
                    <MenuItem onClick={this.handleClose}>
                        <img src={logout} alt=''/>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="" />
                    </MenuItem>
                  </SignOutButton>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
