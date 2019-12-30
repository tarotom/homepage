import React from 'react';
import {
  makeStyles,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemText,
  Container
} from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  myTitle: {
    position: "absolute",
    top: "height / 50%",
    left: "50%",
    bottom: "50%",
    color: "red",
    backgroundColor: "#0ff",
    boxShadow: "0 0 40px 20px #0ff"
  }
});

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <Container >

      <Container>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <Container className={classes.toolbar} />
          <Divider />
          <List>
            {['Home', 'About', 'Skills', 'Resume', 'Contact'].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Container>

      <Container>
        <h2 className={classes.myTitle}>
          Hi, I'm Tomi, a developer.
        </h2>
        <Container>
          <img
            src="https://images.unsplash.com/photo-1550645612-83f5d594b671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="a lot of code"
          />
        </Container>
      </Container>

    </Container>
  );
}
