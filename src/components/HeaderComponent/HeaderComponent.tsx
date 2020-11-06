import React from 'react';
import styles from './HeaderComponent.module.css';
import {AppBar, Button} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

interface InputProps {
    title: string,
    buttonHook:(hookValue:string) => void,
    loggedIn: boolean
}

const HeaderComponent: React.FC<InputProps> = (props:InputProps) => {

    function loginHandler() {
        props.buttonHook("Login");
    }

    function logoutHandler() {
        props.buttonHook("Logout");
    }
    return (

  <div className={styles.HeaderComponent} data-testid="HeaderComponent">
      <AppBar position="static">
          <Toolbar>
              <IconButton edge="start" className={styles.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={styles.title}>
                  {props.title}
              </Typography>
              {
                  props.loggedIn ?
                      <Button color="inherit" onClick={logoutHandler}>Log Out</Button>
                      :
                      <Button color="inherit" onClick={loginHandler}>Login</Button>
              }
          </Toolbar>
      </AppBar>
  </div>
)};

export default HeaderComponent;
